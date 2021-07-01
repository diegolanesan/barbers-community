const { Wishlist, ServiceBarber, Favorite, Client } = require("../db");
const { Op } = require("sequelize");
require('dotenv').config();
const nodemailer = require('nodemailer');
const {USER_EMAIL, PASSWORD_EMAIL } = process.env;

const getWishlistByUser = async(req, res) => {
    const userId = req.params.id;
    const wishlist = await Wishlist.findAll({ where: { clientId: userId }, include: {all: true } });
    res.send(wishlist);
}

const addFavorite = async (req, res) => {
    const userId = req.params.id
    const { serviceBarberId, name, price, image } = req.body
    let wishlist = await Wishlist.findOne({ where: { clientId: userId, state: "Active" } })
    if (!wishlist) {
        wishlist = await Wishlist.create({ clientId: userId, state: "Active" })
    }
        console.log(wishlist)
    const createdFavorite = await Favorite.create({
        wishlistId: wishlist.id,
        serviceBarberId,
        serviceName: name,
        servicePrice: price,
        serviceImage: image
    })
    // const items = await Item.findAll({where: {cartId: cart.id}})
    // let total = 0
    // items.map((i) => {
    //     total += i.dataValues.servicePrice
    // })
    // await cart.update({totalAmount: total})
    //cart.addServiceBarbers(createdItem)
    res.send(wishlist)
}

const removeFavorite = async(req, res) => {
    const  userId = req.params.id
    const {serviceBarberId} = req.query
    const wishlist = await Wishlist.findOne({ where: { clientId: userId, state: "Active" } })
    //const favorite = await Favorite.findOne({ where: { serviceBarberId: serviceBarberId }})
    Favorite.destroy({
        where: {
            serviceBarberId,
            wishlistId: wishlist.id
        }
    })
    .then(() => {
        res.sendStatus(200);
    })
}

module.exports = {
    getWishlistByUser,
    addFavorite,
    removeFavorite
}