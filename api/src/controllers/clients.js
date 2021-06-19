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
            include: [ { model: FaceType }, {model: HairType}, { model: Style } ]
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
<<<<<<< Updated upstream
        const clientAll = await Client.findAll({include: [ { model: FaceType }, {model: HairType}, { model: Style } ]})
        return res.send(clientAll); // A MODIFICAR PARA ENVIAR TODOS LOS CLIENTS PARA FACILITARLE LA TAREA AL FRONT
=======
        return res.send(createdClient); // ¿A MODIFICAR PARA ENVIAR TODOS LOS CLIENTS PARA FACILITARLE LA TAREA AL FRONT?
>>>>>>> Stashed changes
    } catch (error) {
        next(error);
    }
}


const updateClient = async (req, res, next ) => {
    // const [numberOfAffectedRows, affectedRows] = await Client.update(body, {
    //     where: {id},
    //     returning: true, // needed for affectedRows to be populated
    //     plain: true // makes sure that the returned instances are just plain objects

    // })
    const id = req.params.id;
	const { clientModified } = req.body;
	let client = await Client.findByPk(id);
	if (client) {
		client = client.update(clientModified);
		res.send(client);
	} else {
		res.send("No se ha podido modificar al barbero");
	}
        return res.send(clientModified);
}


const deleteClient = (req, res, next) => {
    const id = req.params.id;
    Client.destroy({
        where: {
            id,
        }
    })
    .then(() => {
        res.send("Barber deleted!");
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