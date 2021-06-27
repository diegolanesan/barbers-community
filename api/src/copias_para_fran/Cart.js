const { Cart, ServiceBarber, Item, Client } = require("../db");
const { Op } = require("sequelize");
require('dotenv').config();
const nodemailer = require('nodemailer');
const {USER_EMAIL, PASSWORD_EMAIL } = process.env;


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
    const cart = await Cart.findOne({ where: { id: id } })
}

const getCartsByUser = async(req, res) => {
    const userId = req.params.id;
    const cart = await Cart.findAll({ where: { clientId: userId }, include: {all: true } });
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
        subject: "Confirmed Order ",
        html: "<h1>Hola</h1>"
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
    const cart = await Cart.findOne({where: {clientId: userId, state: "Active"}, include: {all: true, nested: true}})
    //console.log(cart)
    res.send(cart)
}

const getAppointments = async(req, res) => {
    const barberId = req.params.id
    const cart = await Cart.findAll({where: {barberId: barberId, state: "Paid"}, include: {all: true, nested: true}})
    //console.log(cart)
    res.send(cart)
}

const getCartbyBarberId = async(req, res) => {
    const barberId = req.params.id
    const cart = await Cart.findAll({where: {barberId: barberId}, include: {all: true, nested: true}})
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
        res.sendStatus(200);
    })
}

const incrementServiceUnit = async(req, res) => {
    
}

const decrementServiceUnit = async(req, res) => {
    
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
    getCartbyBarberId
};