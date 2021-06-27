const express = require("express");
const server = express();
const {getPanelClient}= require("../controllers/panelClient");

server.get("/", getPanelClient);

module.exports = server;


