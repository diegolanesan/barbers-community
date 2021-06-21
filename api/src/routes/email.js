const express = require('express');
const server = express();
const  {sendEmail,   passwordRecoveryBarber} = require('../controllers/email');

// Ruta que envia mail a las personas (La pueden usar todos si necesitan enviar un email)
server.post('/', sendEmail);

// Ruta que envia el email de recuperación de contraseña
server.post('/recoveryBarber',  passwordRecoveryBarber)

module.exports= server;
