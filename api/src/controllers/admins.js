require('dotenv').config();
const { Op } = require('sequelize');
const { Client } = require('../db');
const nodemailer = require('nodemailer');
const {USER_EMAIL, PASSWORD_EMAIL } = process.env;

const getAllAdmins = async (req, res) =>{
    const admins = await Client.findAll({where: {rol: "admin"}});
    if(admins){
        res.send(admins)
    }else{
        res.status(400).send("No hay admins en la base de datos")
    }
};

const validation = async (req, res) => {
    const {email} = req.body
    const code = Math.floor(Math.random() * (9999 - 1000) + 1000)
    // Le indicamos a nodemailer como vamos a transportar el mensaje
    const transporter = nodemailer.createTransport({
        service:'gmail', // En este caso la enviamos por gmail
        auth: {
            user: USER_EMAIL,
            pass: PASSWORD_EMAIL
        }
    });

    const mailOptions = {
        from: USER_EMAIL,
        to: email,
        subject : "Code Validation",
        html: `${code}`
    };
    transporter.sendMail(mailOptions, function(error){
        if (error) {
          console.log(error);
        } else {
          res.json(code);
        }
      });
}


module.exports = {
    getAllAdmins,
    validation
}