const express = require("express");
const server = express();
const { postPay, getPay } = require("../controllers/mercadoPago");

server.post("/create_preference", postPay);
server.get("/feedback", getPay);

module.exports = server;


