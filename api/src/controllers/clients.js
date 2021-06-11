const { Client, FaceType, HairType, Style } = require('../db');
require('dotenv').config();
const { Op } = require('sequelize');


const getClients = (req, res, next) => {

/* ----------------------- El usuario (administrador) busca todos los clientes ---------------------------------*/
    if(!req.query.name){
        try {
            Client.findAll({
                include: [ { model: FaceType }, {model: HairType}, { model: Style } ]  // REVISAR SINTAXIS
            })
            .then((result) => {
                res.status(200).send(result);
            })
     
        } catch(e){
            console.log("No se pudo realizar la petición HTTP correctamente " + e)
        }
/*---------------------- El usuario (administrador) busca por nombre /client?name=pablo ---------------------*/
    } else {
        let queryName = req.query.name;         //REVISAR ESTA LÓGICA
        try {
            Client.findAll({ 
                where: {name: {[Op.iLike]: `%${queryName}%`}},
                include: [ { model: FaceType }, {model: HairType}, { model: Style } ]  // REVISAR SINTAXIS
            })
            .then((result) => {
                res.status(200).send(result);
            })
        } catch {
            res.status(404).send("Client not found!");
        }
    }
}


const getClientById = (req, res, next) => {
    try {
        let queryId = req.params.id.toUpperCase();
        Client.findOne({
            where: {id: queryId},
            //include: {model: Activity}
        })
        .then((result) => {
            res.status(200).send(result);
        })
        } catch(e){
        console.log("No se pudo realizar la petición HTTP correctamente " + e);
    }
}


const addClient = async(req, res, next) => {
    const { 
        name, 
        lastname,
        email,
        image,
        mobile, 
        location, 
        password, 
        status, 
        styleId, 
        faceTypeId, 
        hairTypeId } = req.body;
    
    try {
        const createdClient = await Client.create({ 
            name, 
            lastname, 
            email, 
            image, 
            mobile, 
            location, 
            password, 
            status, 
            styleId, 
            faceTypeId, 
            hairTypeId
        });
        return res.send(createdClient); // A MODIFICAR PARA ENVIAR TODOS LOS CLIENTS PARA FACILITARLE LA TAREA AL FRONT
    } catch (error) {
        next(error);
    }

}

const updateClient = async (req, res, next ) => {
    const id = req.params.id;
    const body = req.body;
    const [numberOfAffectedRows, affectedRows] = await Client.update(body, {
        where: {id},
        returning: true, // needed for affectedRows to be populated
        plain: true // makes sure that the returned instances are just plain objects

    })
        return res.send(numberOfAffectedRows);
}



const deleteClient = (req, res, next) => {
    const id = req.params.id;
    Client.destroy({
        where: {
            id,
        }
    })
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => next(error));

}

module.exports = {
    getClients,
    getClientById,
    addClient,
    deleteClient,
    updateClient
}