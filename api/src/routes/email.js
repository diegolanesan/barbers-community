const express = require('express');
const server = express();
const  {sendEmail, passwordRecovery} = require('../controllers/email');

// Ruta que envia mail a las personas (La pueden usar todos si necesitan enviar un email)
server.post('/', sendEmail);

// Ruta que envia el email de recuperación de contraseña
server.post('/recovery', passwordRecovery)

module.exports= server;
