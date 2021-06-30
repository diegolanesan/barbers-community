const { Op } = require("sequelize");
const {Barber, Client, Category, Service, Style} = require("../db");

const createBarber = (req, res)=>{
    Barber.bulkCreate([
        {
            name: "Sebastián",
            lastname:"Ciare",
            email:"seba@sebote.com",
            image: ["pepe"],
            mobile: "12321312",
            location: "lugar",
            password: "sadsa12",
            status: true,
            alias: "El enano",
            rating:1.1,
            resume: "el resumen",
            bio: "la biografia",
            type: "Urban",
            hairType:"dsa",
            faceType: "ds"
        }
    ]).then(
        (resp)=>{res.send(resp)},
        (err)=>{res.send(err)}
    )
    
};

const createClient = (req, res)=>{
    Client.bulkCreate([
        {
            name: "Sebastián",
            lastname:"Ciare",
            email:"seba@sebote.com",
            image: ["pepe"],
            mobile: "12321312",
            location: "lugar",
            password: "sadsa12",
            resume: "el resumen",
            type: "Urban",
            hairType:"Afro",
            faceType: "Square"
        }
    ]).then(
        (resp)=>{res.send(resp)},
        (err)=>{res.send(err)}
    )
};

const createCategory = (req, res) =>{
    Category.bulkCreate([
        {
            name: "Sebastián",
            image: ["pepe"],
            description: "sdasd"
        }
    ]).then(
        (resp)=>{res.send(resp)},
        (err)=>{res.send(err)}
    )
};

const createService = (req, res)=>{
    Service.bulkCreate([
        {
            name: "Sebastián",
            image: ["pepe"],
            description: "sdasd",
            price: 100
        }
    ]).then(
        (resp)=>{res.send(resp)},
        (err)=>{res.send(err)}
    )
};

const createStyle = (req, res)=>{
    Style.bulkCreate([
        {
            description: "loquita",
        }
    ]).then(
        (resp)=>{res.send(resp)},
        (err)=>{res.send(err)}
    )
};



module.exports = {
    createBarber,
    createClient ,
    createCategory,
    createService,
    createStyle
}