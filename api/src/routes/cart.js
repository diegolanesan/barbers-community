const express = require('express');
const server = express();
const { addItem,
    getCartsById,
    removeProductFromCart,
    getActiveCartFromUser,
    changeCartState,
    changeCartStateMercadoPago,
    getCartbyBarberId,
    getAppointments,
    getCartsByUser} = require('../controllers/Cart');

server.post("/addItem/:id", addItem)

server.get("/:id", getCartsById)

server.delete("/:id", removeProductFromCart)

server.get("/active/:id", getActiveCartFromUser)

server.put("/state/:id", changeCartState)

server.put("/state/payment/:id", changeCartStateMercadoPago)

server.get("/barber/:id", getAppointments)

server.get("/barber/all/:id", getCartbyBarberId)

server.get("/client/all/:id", getCartsByUser)


module.exports= server;