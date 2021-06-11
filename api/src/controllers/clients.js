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
                // let clients = [];   
                // for(let i = 0; i < result.length; i++){
                //     let client = {
                //         name : result[i].name,     // REVISAR CÓMO VIENEN LOS DATOS DESDE LA DB
                //         lastname : result[i].lastname,
                //         status : result[i].status
                //     }
                //     clients.push(client);
                // }
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
                // let clients = [];   
                // for(let i = 0; i < result.length; i++){
                //     let client = {
                //         name : result[i].name,     // REVISAR CÓMO VIENEN LOS DATOS DESDE LA DB
                //         lastname : result[i].lastname,
                //         status : result[i].status
                //     }
                //     clients.push(client);
                // }
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
        
        return res.send();
        
    } catch (error) {
        next(error);
    }

}

// const updateClient = (req, res, next) => {
//     const {usuarioid} = req.body;
//     const {usuarioBody} = req.body; 
//     Usuario.findByPk(usuarioid)
//     .then(
//         (resp)=>{
//             resp === null && res.status(400).send("El usuario no existe");
//             resp !== null && resp.update(usuarioBody) && res.send("Modificación Exitosa")
//         },
//         ()=>{res.send("Modificación Fallida")}
//     )
// }


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
    // updateClient
}