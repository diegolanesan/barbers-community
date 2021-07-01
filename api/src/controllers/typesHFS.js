const {FaceType, HairType, Style} = require('../db');
require('dotenv').config();

const getAllFaceTypes = async (req, res)=>{
    const allFaceTypes = await FaceType.findAll();
    if(allFaceTypes){
        res.send(allFaceTypes)
    }else{
        res.status(400).send("No hay servicios")
    }
};
const getAllHairTypes = async (req, res)=>{
    const allHairTypes = await HairType.findAll();
    if(allHairTypes){
        res.send(allHairTypes)
    }else{
        res.status(400).send("No hay servicios")
    }
};

// ruta para obtener todos los estilos
const getAllStyles = async (req, res)=>{
    const allStyles = await Style.findAll();
    if(allStyles){
        res.send(allStyles)
    }else{
        res.status(400).send("No hay servicios")
    }
};

// ruta para crear estilos 
const  postStyle = async (req, res) => {
    const {style} = req.body;
    
    const resul = await Style.findOrCreate({
        where: style
    });
    if(resul){
        const allStyle = await Style.findAll();
        res.send(allStyle); 
    }else{
        res.status(400).send({message: "No se ha podido crear el estilo"});
    }
}


// ruta para modificar estilos 
const  putStyle = async (req, res) => {
    const {styleId, styleModify} = req.body;
    let resul = await Style.findByPk(styleId)
    if(resul){
        resul = await resul.update(styleModify)
        const allStyle = await Style.findAll();
        res.send(allStyle)
    }else{
        res.status(400).send({message: "No se ha podido crear el estilo"});
    }
}
// ruta para eliminar estilos 
const  deleteStyle = async (req, res) => {
    const {styleId} = req.params;
    let resul = await Style.findByPk(styleId)
    if(resul){
        resul = await resul.destroy();
        const allStyle = await Style.findAll();
        res.send(allStyle)
            
    }else{
        res.status(400).send({message: "No se ha podido eliminar el estilo"});
    }
}

module.exports = {
    getAllFaceTypes,
    getAllHairTypes,
    getAllStyles,
    postStyle,
    putStyle,
    deleteStyle
}
