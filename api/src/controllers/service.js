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
const putService = async (req,res)=>{
    const {id, serviceModify} = req.body;
    let resul = await Service.findByPk(id);
    if(resul){
        resul = await resul.update(serviceModify);
        const allService = await Service.findAll();
        res.send(allService);
    }else{
        res.status(400).send({message:"No se pudo crear el servicio"})
    }
 };

const deleteService = async (req, res)=>{
    const idService = req.params.id;
    const service = await Service.findByPk(idService);
    if(service){
        const resul = await service.destroy();
        const allService = await Service.findAll();
        res.send(allService)
    }else{
        res.status(400).send({message:"No se pudo eliminar el servicio"})
    }
}
// ruta que   vincular  un barber y un servicio
const createRelationService = async (req, res)=>{
    const {barberId, serviceId, price} = req.body;
    const resul = await ServiceBarber.create({barberId, serviceId, price});
    if(resul){
        res.send(resul)
    }else{
        res.status(400).send("No se pudo relacionar las tablas");
    }
};

const deleteRelationService = async (req, res) => {
    // NO ANDAA !!!
    const {barberId, serviceId, price} = req.body;
    const resul = await ServiceBarber.delete({barberId, serviceId, price});
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
    createRelationService,
    putService,
    deleteService,
    deleteRelationService
}


