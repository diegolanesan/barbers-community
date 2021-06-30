require('dotenv').config();
const { Op } = require('sequelize');
const { Category, Service, categoryService } = require('../db');

const getAllCategory = async (req, res) =>{
    const category = await Category.findAll();
    if(category){
        res.send(category)
    }else{
        res.status(400).send("No hay categorias en la base de datos")
    }
};

//Ruta que devuelve las categorias  según su id

const getByIdCategory = async(req, res)=>{
    const idCategory = req.params.id;
    const resul = await Category.findByPk(idCategory,{include:{model:Service}});
    if(resul){
        res.send(resul)
    }else{
        res.status(400).send("No se encontro la categoria")
    }
}

//Ruta que devuelve a las categorias según su nombre

const getByNameCategory = async(req, res)=>{
    const name = req.params.name;
    const resul= await Category.findAll({
        where:{
            name: {
                [Op.iLike]: `%${name}%`,
              }
        },
        include:{model:Service}
    });

    if(resul){
        res.send(resul)
    }else{
        res.send("No se ha encontrado la categoria")
    }
}


// Ruta para crear categoria
const postCategory = async(req, res)=>{
    const {category} = req.body;
    const resul = await Category.create(category);
    if (resul){
        const allCategory = await Category.findAll();
        res.send(allCategory)
    }else{
        res.status(400).send("No se ha creado la categoria")
    }
}

// Ruta para modificar la categoria
const putCategory = async (req, res)=>{
    const idCategory = req.params.id;
    const {categoryModify} = req.body
    let category = await Category.findByPk(idCategory)
    if(category){
        category = await category.update(categoryModify);
        const allCategory = await Category.findAll();
        res.send(allCategory)
    }else {
        res.send("No se ha podido modificar la categoria")
    }
}

// Ruta para eliminar categoria
const deleteCategory = async (req, res)=>{
    const idCategory = req.params.id;
    const category = await Category.findByPk(idCategory);
    if(category){
        const resul = await category.destroy();
        const allCategory = await Category.findAll();
        res.send(allCategory)
    }else{
        res.status(400).send("No se ha eliminado la categoria")
    }
}

const relationsCategories = async (req, res) => {
    const { categoryId, serviceId } = req.body
    const result = await categoryService.findOrCreate({where: {categoryId, serviceId}})
    if (result) res.send(result)
    else res.status(400).send('Hay algo mal che')
}




module.exports = {
    postCategory,
    deleteCategory,
    getAllCategory ,
    getByIdCategory,
    getByNameCategory,
    putCategory,
    relationsCategories
}