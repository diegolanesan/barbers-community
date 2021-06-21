const { Barber, Service, Category, ServiceBarber } = require('../db');
require('dotenv').config();
const { Op } = require('sequelize');

// ruta que retorna los sevicios  según el barbero
const getBarbersService = async (req, res) =>{
    const idBarber = req.params.id;
    const barber = await Barber.findByPk(idBarber, { include: { all: true, nested: true }});
    if(barber){
        res.send(barber)
    }else {
        res.status(400).send("No se encontro los servicios solicitados");
    }
};



// ruta para buscar todos los servicios
const getAllService = async (req, res)=>{
    const allService = await Service.findAll({include:[{model:Category},{model:Barber}]});
    if(allService){
        for (let i = 0; i < allService.length; i++) {
            if (allService[i].dataValues.categories[0] !== undefined) allService[i].dataValues.Categories = {
                name: allService[i].dataValues.categories[0].dataValues.name,
                description: allService[i].dataValues.categories[0].dataValues.description
            }
        }
        res.send(allService)
    }else{
        res.status(400).send("No hay servicios")
    }
};

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

// ruta que   vincular  un barber y un servicio
const relationService = async (req, res)=>{
    const {barberId, serviceId, price, image} = req.body;
    const resul = ServiceBarber.create({barberId, serviceId, price, image});
    if(resul){
        res.send(resul)
    }else{
        res.status(400).send("No se pudo relacionar las tablas");
    }
}


module.exports = {
    getAllService,
    postService,
    getBarbersService,
    relationService
}


