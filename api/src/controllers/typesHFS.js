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
const getAllStyles = async (req, res)=>{
    const allStyles = await Style.findAll();
    console.log(allStyles, "lelelelele")
    if(allStyles){
        console.log(allStyles, "lelelelele")
        res.send(allStyles)
    }else{
        res.status(400).send("No hay servicios")
    }
};

module.exports = {
    getAllFaceTypes,
    getAllHairTypes,
    getAllStyles
}
