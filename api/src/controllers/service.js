const { Barber, Service, Category } = require('../db');
require('dotenv').config();
const { Op } = require('sequelize');

// ruta para buscar todos los servicios
const getAllService = async (req, res)=>{
    const allService = await Service.findAll({include:{model:Category}});
    if(allService){
        res.send(allService)
    }else{
        res.status(400).send("No hay servicios")
    }
}

// ruta para crear un servicio
const postService = async (req,res)=>{
   const {service, idCategory} = req.body;
   const resul = await Service.create(service);
   if(resul){
       const allService = await Service.findAll();
       resul.addCategory([idCategory]);
       res.send(allService)
   }else{
       res.status(400).send("No se pudo crear el servicio")
   }
};





module.exports = {
    getAllService,
    postService
}


