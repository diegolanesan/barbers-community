const { Cart, ServiceBarber, Item } = require("../db");
const { Op } = require("sequelize");



const addItem = async (req, res) => {
    const userId = req.params.id
    const { serviceBarberId, name, price } = req.body

    const cart = await Cart.findOne({where: { clientId: userId, state: "Active" }})

    const createdItem = await Item.create({
        cartId: cart.id,
        serviceBarberId,
        serviceName: name,
        servicePrice: price,
    })
    cart.totalAmount += createdItem.servicePrice;
    await cart.save()
        console.log(cart)
    //cart.addServiceBarbers(createdItem)
    res.send(createdItem)
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
    const { userId } = req.params.id
    const cart = await Cart.findOne({ where: { userId } })
}

const changeStatus = async(req, res) => {
    const { cartId } = req.params.id
    const { status } = req.body
    const cart = await Cart.findOne({ where: { id: id } })
    cart.status = status
    res.send(cart)
}

const getActiveCartFromUser = async(req, res) => {
    const userId = req.params.id
    const cart = await Cart.findOne({where: {clientId: userId, state: "Active"}, include: {all: true, nested: true}})
    console.log(cart)
    res.send(cart)
}

const removeProductFromCart = async(req, res) => {
    const  userId = req.params.id
    const {serviceBarberId} = req.query
    const cart = await Cart.findOne({ where: { clientId: userId, state: "Active" } })
    const item = await Item.findOne({ where: { serviceBarberId: serviceBarberId }})
    cart.totalAmount -= item.servicePrice;
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
	addItem,
    getCartsById,
    removeProductFromCart,
    getActiveCartFromUser
};