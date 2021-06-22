const express = require('express');
const server = express();
const { addItem,
    getCartsById,
    removeProductFromCart } = require('../controllers/Cart');      


server.post("/addItem/:id", addItem)

server.get("/:id", getCartsById)

server.delete("/:id", removeProductFromCart)

module.exports= server;