const { Cart, Barber, ServiceBarber, Item, Client } = require("../db");
const { Op } = require("sequelize");
require('dotenv').config();
const nodemailer = require('nodemailer');
const {USER_EMAIL, PASSWORD_EMAIL } = process.env;
const {confirmationMail} = require('./MailTemplate/confirmationMail')

// const addItem = async (req, res) => {
//   const { services} = req.body;
//   const userId = req.params.id;
//     const cart = await Cart.findOrCreate({where : {clientId: userId, state: "Active"}})
//     let total = 0;
//     const items = services.map( async s => {
//         await Item.create({
//             cartId: cart.id,
//             clientId: userId,
//             serviceName: s.name,
//             servicePrice: s.price
//         });
//         total += s.price;
//     })
//     Cart.findByPk(cart.id)
//     .then((resp) => {
//         // resp.update({totalAmount: total})
//         res.send(resp);
//     })
// }


const addItem = async (req, res) => {
    const userId = req.params.id
    const { serviceBarberId, name, price } = req.body
    let cart = await Cart.findOne({ where: { clientId: userId, state: "Active" } })
    if (!cart) {
        cart = await Cart.create({ clientId: userId, state: "Active" })
        
    }
        //console.log(cart)
    const createdItem = await Item.create({
        cartId: cart.id,
        serviceBarberId,
        serviceName: name,
        servicePrice: price,
    })
    const items = await Item.findAll({where: {cartId: cart.id}})
    let total = 0
    items.map((i) => {
        total += i.dataValues.servicePrice
    })
    await cart.update({totalAmount: total})
    //cart.addServiceBarbers(createdItem)
    res.send(cart)
}


const getAllCarts = async(req, res) => {
    const carts = await Cart.findAll()
    res.send(carts)
}

const getCartsById = async(req, res) => {
    const { cartId } = req.params.id
    const cart = await Cart.findOne({ where: { id: cartId } })
    res.send(carts)
}

const getCartsByUser = async (req, res) => {
    const userId = req.params.id;
    const cart = await Cart.findAll({
        where: {
            clientId: userId, [Op.or]: [
                {
                    state: "Paid"
                },
                {
                    state: "Rejected"
                }
            ]
        },
        order: [
            ['id', 'DESC']
            // ["date", 'DESC']
            // ['time', 'DESC']
        ]
        , include: { all: true }
    });

    // cart.map(async e => {
    //     e.dataValues.barberName = barber.name + " " + barber.lastname
    //     e.save()
    //     console.log(e.dataValues.barberName)
    // })
    for (let i = 0; i < cart.length; i++) {
        let barber = await Barber.findByPk(cart[i].barberId)
        if (barber && barber.id === cart[i].barberId) {
            cart[i].dataValues.barberName = barber.name + " " + barber.lastname
        }
        // barber.map(e => {
        //     cart[i].dataValues.barberName = e.name + " " + e.lastname;
        //     cart.save()
        // })
        
    }
    // cart[0].dataValues.barberName = barber.name + " " + barber.lastname
    res.send(cart);
}

const getLastFiveCartsByUser = async (req, res) => {
    const userId = req.params.id;
    const cart = await Cart.findAll({
        where: {
            clientId: userId, [Op.or]: [
                {
                    state: "Paid"
                },
                {
                    state: "Rejected"
                }
            ]
        },
        order: [
            ['id', 'DESC']
            // ["date", 'DESC']
            // ['time', 'DESC']
        ],
        limit: 5
        , include: { all: true }
    });
    const barber = await Barber.findByPk(cart[0].barberId)
    cart[0].dataValues.barberName = barber.name + " " + barber.lastname

    

    res.send(cart);
}

const changeCartState = async(req, res) => {
    const userId = req.params.id
    const { state, date, time, barberId, } = req.body
    const cart = await Cart.findOne({ where: { clientId: userId, state: "Active" } })
    cart.state = state
    cart.date = date
    cart.time = time
    cart.barberId = barberId
    cart.save()
    res.send(cart)
}

const changeCartStateMercadoPago = async(req, res) => {
    const userId = req.params.id
    const {state} = req.body
    const cart = await Cart.findOne({ where: { clientId: userId, state: "Pending" }, include: {all: true }})
    cart.state = state
    if (state === "Paid") {
        console.log(cart)
        let client = await Client.findByPk(userId)
        const transporter = nodemailer.createTransport({
        service:'gmail', // En este caso la enviamos por gmail
        auth: {
            user: USER_EMAIL,
            pass: PASSWORD_EMAIL
        }
      });
      
      const mailOptions = {
        from:`Community Barber's <${USER_EMAIL}>`,
        to: client.email,
        subject: "Confirmed Order",
        html: confirmationMail(cart, client)
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.send("Ok");
        }
      });
    }
    Cart.create({clientId: userId});
    cart.save()
    res.send(cart)
}


const getActiveCartFromUser = async(req, res) => {
    const userId = req.params.id
    const cart = await Cart.findOne({where: {clientId: userId, state: "Active"}, include: {all: true, required: false}})
    //console.log(cart)
    res.send(cart)
}

const getAppointments = async(req, res) => {
    const barberId = req.params.id
    const cart = await Cart.findAll({where: {barberId: barberId, state: "Paid"}, include: {all: true, required: false}})
    //console.log(cart)
    res.send(cart)
} 

const getStatusAppointments = async(req, res) => {
    const status = req.params.status
    const cart = await Cart.findAll({where: {state: status}, include: {all: true, nested: true}})
    console.log(cart.length)
    res.send(cart.length)
} 

const getCartbyBarberId = async(req, res) => {
    const barberId = req.params.id
    const cart = await Cart.findAll({where: {barberId: barberId}, include: {all: true, nested: true, required: false}})
    //console.log(cart)
    res.send(cart)
}

const getSomeCarts = async(req, res) => {
    console.log("KENTAROOOOO")
    const cart = await Cart.findAll({where: {state: ["Paid","Rejected","Pending"] }, include: {all: true, nested: true}})
    //console.log(cart)
    res.send(cart)
}


const removeProductFromCart = async(req, res) => {
    const  userId = req.params.id
    const {serviceBarberId} = req.query
    const cart = await Cart.findOne({ where: { clientId: userId, state: "Active" } })
    const item = await Item.findOne({ where: { serviceBarberId: serviceBarberId }})
    cart.totalAmount -= await item.servicePrice;
    await cart.save()
    Item.destroy({
        where: {
            serviceBarberId,
            cartId: cart.id
        }
    })
    .then(() => {
        res.send("OK");
    })
}

const changeOrderStatus = async(req, res) => {
    const cartId = req.params.id
    const { status } = req.body
    // console.log(status)
    const cart = await Cart.findOne({ where: { id: cartId } })
    // console.log(cart)
    cart.orderStatus = status
    cart.save()
    res.send(cart)
}

// const incrementServiceUnit = async(req, res) => {
    
// }

// const decrementServiceUnit = async(req, res) => {
    
// }

const resetUserCart = async (req, res) => {
    const userId = req.params.id
    const cart = await Cart.findOne({ where: { clientId: userId, state: "Active" } })
    cart.totalAmount = 0;
    await cart.save()
    Item.destroy({
        where: {
            cartId: cart.id
        }
    })
        .then(() => {
            res.sendStatus(200);
        })
}


module.exports = {
    getAppointments,
	addItem,
    getCartsByUser,
    getCartsById,
    removeProductFromCart,
    getActiveCartFromUser,
    changeCartState,
    changeCartStateMercadoPago,
    getCartbyBarberId,
    resetUserCart,
    getStatusAppointments,
    changeOrderStatus,
    getSomeCarts,
    getLastFiveCartsByUser,
};