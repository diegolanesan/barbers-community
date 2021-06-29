const express = require('express');
const server = express();
const {
    getWishlistByUser, addFavorite, removeFavorite
} = require('../controllers/wishlist');

server.post("/addFavorite/:id", addFavorite)

server.get("/:id", getWishlistByUser)

server.delete("/:id", removeFavorite)




module.exports= server;