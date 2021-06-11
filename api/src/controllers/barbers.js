const { Barber, ServiceBarber } = require('../db');
require('dotenv').config();
const { Op } = require('sequelize');

// Ruta que devuelve todos los barberos
const getAllBarbers = async(req, res)=>{
    const barber = await Barber.findAll();
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
            name: {
                [Op.iLike]: `%${name}%`,
              }
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
    const resul = await Barber.create(barber);
    
    if(resul){
        const barbersAll = await Barber.findAll()
        res.send(barbersAll);
    }else{
        res.status(400).send("No se ha creado correctamente el barbero");
    }
    
};

// Ruta para modificar a los barberos
const putBarbers = async (req, res)=>{
    const idBarber = req.params.id;
    const {barberModify} = req.body
    let barber = await Barber.findByPk(idBarber)
    if(barber){
        barber = barber.update(barberModify);
        res.send(barber)
    }else{
        res.send("No se ha podido modificar al barbero")
    }
}

// Ruta para eliminar a los barberos 
const deleteBarbers  = async (req,res)=>{
    const idBarber = req.params.id;
    let barber = await Barber.findByPk(idBarber)
    if(barber){
        barber = barber.destroy();
        res.send("Eliminación exitosa")
    }else{
        res.status(400).exportssend("No se ha podido eliminar al barbero")
    }
}


module.exports = {
    getAllBarbers,
    postBarbers,
    getByIdBarbers,
    getByNameBarbers,
    putBarbers,
    deleteBarbers 
}