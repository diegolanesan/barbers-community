require('dotenv').config();
const { Op } = require('sequelize');
const { Client } = require('../db');

const getAllAdmins = async (req, res) =>{
    const admins = await Client.findAll({where: {rol: "admin"}});
    if(admins){
        res.send(admins)
    }else{
        res.status(400).send("No hay admins en la base de datos")
    }
};


module.exports = {
    getAllAdmins
}