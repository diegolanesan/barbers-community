const { Barber, ServiceBarber } = require('../db');
require('dotenv').config();
const { Op } = require('sequelize');

// Ruta que devuelve todos los barberos
const getAllBarbers = (req, res)=>{
    const barber = Barber.findAll({incude:{model:ServiceBarber}});
    if(barber){
        res.send(barber)
    }else{
        res.status(400).send("No hay barberos en la base de datos")
    }
};

//Ruta que devuelve los barbero según su id

const getByIdBarbers = async(req, res)=>{
    const idBarber = req.params.id;
    const resul = await Barber.findByPk(idBarber);
    if(resul){
        res.send(resul)
    }else{
        res.status(400).send("No se encontro el barbero")
    }
}

//Ruta que devuelve a los barberos según su nombre

const getByNameBarbers = async(req, res)=>{
    const name = req.params.name;
    const resul= await Barber.findAll({
        where:{
            name
        }
    });

    if(resul){
        res.send(resul)
    }else{
        res.send("No se ha encontrado al barbero")
    }
}



// Ruta para crear barberos
const postBarbers = async (req,res)=>{
    const {barber} = req.body;
    const resul = await Barber.findOrCreate(barber);
    
    if(resul){
        const barbersAll = await Barber.findAll()
        res.send(barbersAll);
    }else{
        res.status(400).send("No se ha creado correctamente el barbero");
    }
    
};

// Ruta para modificar a los barberos
const putBarers = async (req, res)=>{
    const idBarber = req.params.id;
    const barber = await Barber.findByPk(idBarber) 

}

module.exports = {
    getAllBarbers,
    postBarbers,
    getByIdBarbers,
    getByNameBarbers
}