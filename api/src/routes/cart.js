const express = require('express');
const server = express();
const { addItem,
    getCartsById,
    removeProductFromCart,
    getActiveCartFromUser} = require('../controllers/Cart');      


server.post("/addItem/:id", addItem)

server.get("/:id", getCartsById)

server.delete("/:id", removeProductFromCart)

server.get("/active/:id", getActiveCartFromUser)
module.exports= server;