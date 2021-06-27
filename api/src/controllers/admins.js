require('dotenv').config();
const { Op } = require('sequelize');
const { Admin } = require('../db');

const getAllAdmins = async (req, res) =>{
    const admins = await Admin.findAll();
    if(admins){
        res.send(admins)
    }else{
        res.status(400).send("No hay admins en la base de datos")
    }
};

const getByIdAdmin = async(req, res)=>{
    const idAdmin = req.params.id;
    const resul = await Admin.findByPk(idAdmin);
    if(resul){
        res.send(resul)
    }else{
        res.status(400).send("No se encontro el admin")
    }
}

const getByNameAdmin = async(req, res)=>{
    const name = req.params.name;
    const resul= await Admin.findAll({
        where:{name: {[Op.iLike]: `%${name}%`}}});
    if(resul){
        res.send(resul)
    }else{
        res.send("No se ha encontrado el admin")
    }
}

const postAdmin = async(req, res)=>{
    const admin = req.body;
    console.log(admin)
    const resul = await Admin.create(admin);
    if (resul){
        const allAdmin = await Admin.findAll();
        res.send(allAdmin)
    }else{
        res.status(400).send("No se ha creado el admin")
    }
}

const putAdmin = async (req, res)=>{
    const idAdmin = req.params.id;
    const {adminModify} = req.body
    let admin = await Admin.findByPk(idAdmin)
    if(admin){
        admin = admin.update(adminModify);
        res.send("se modifico correctamente el admin")
    }else {
        res.send("No se ha podido modificar el admin")
    }
}

const deleteAdmin = async (req, res)=>{
    const idAdmin = req.params.id;
    const admin = await Admin.findByPk(idAdmin);
    if(admin){
        admin.destroy();
        res.send("Se ha eliminado correctamente el admin")
    }else{
        res.status(400).send("No se ha eliminado el admin")
    }
}

module.exports = {
    getAllAdmins,
    getByIdAdmin,
    getByNameAdmin,
    postAdmin,
    putAdmin,
    deleteAdmin
}