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
    resetUserCart,
    getStatusAppointments,
    getCartsByUser,
<<<<<<< Updated upstream
    changeOrderStatus} = require('../controllers/Cart');
=======
    getSomeCarts} = require('../controllers/Cart');
>>>>>>> Stashed changes

server.post("/addItem/:id", addItem)

server.get("/:id", getCartsById)

server.delete("/:id", removeProductFromCart)

server.get("/active/:id", getActiveCartFromUser)

server.put("/state/:id", changeCartState)

server.put("/status/:id", changeOrderStatus)

server.put("/state/payment/:id", changeCartStateMercadoPago)

server.get("/barber/:id", getAppointments)

server.get("/barber/all/:id", getCartbyBarberId)

server.get("/", getSomeCarts)

server.get("/client/all/:id", getCartsByUser)

server.delete("/reset/:id", resetUserCart)

server.get("/state/:status", getStatusAppointments)


module.exports= server;