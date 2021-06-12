const { Barber, ServiceBarber, categoryBarber } = require('../db');
require('dotenv').config();
const { Op } = require('sequelize');

const getAllService = (req, res)=>{}

const postService = async (req,res)=>{
    const {service, categoryId} = req.body;
    const resul = await ServiceBarber.create(service);
    
    if(resul){
        const intermedia = await categoryBarber.create({serviceBarberId: resul.id, categoryId});
        if(intermedia){
            const serviceAll = await ServiceBarber.findAll()
            res.send(serviceAll);
        }else{
            res.status(400).send("No se ha creado correctamente el servicio");
        }
        
    }else{
        res.status(400).send("No se ha creado correctamente el servicio");
    }
};




module.exports = {
    getAllService,
    postService
}