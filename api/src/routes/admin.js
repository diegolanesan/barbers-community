const express = require('express');
const server = express();
const {
    getAllAdmins,
    getByIdAdmin,
    getByNameAdmin,
    postAdmin,
    putAdmin,
    deleteAdmin
} = require('../controllers/admins');


server.get('/all', getAllAdmins);
server.get('/id/:id', getByIdAdmin)
server.get('/name/:name', getByNameAdmin)
server.post('/',postAdmin);
server.put('/:id', putAdmin)
server.delete('/:id',deleteAdmin);


module.exports= server;