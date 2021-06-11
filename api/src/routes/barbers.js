const express = require('express');
const server = express();

server.get('/barber', getBarbers);

module.exports= server;
