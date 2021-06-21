require('dotenv').config();
const nodemailer = require('nodemailer');
const {USER_EMAIL, PASSWORD_EMAIL } = process.env;
const jwt = require('jsonwebtoken')
const {template} = require('./MailTemplate/template')
const {Barber} = require('../db');

const sendEmail = (req, res) => {
    const {message, from, to, subject} = req.body

    // Le indicamos a nodemailer como vamos a transportar el mensaje
    const transporter = nodemailer.createTransport({
        service:'gmail', // En este caso la enviamos por gmail
        auth: {
            user: USER_EMAIL,
            auth: PASSWORD_EMAIL
        }
    });

    const mailOptions = {
        from,
        to,
        subject,
        text:message
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.send('Email enviado: ' + info.response);
        }
      });

};

// Ruta de recuperación de contraseña wachiiin
const passwordRecoveryBarber = async (req, res)=>{
    const {to} = req.body
    const barber  = await Barber.findAll({
      where: {
          email: to
        }});
    
    if(barber.length !== 0){
      const token = jwt.sign({check: true}, 'lalolanda', {
        expiresIn: 120
       });
      
      const transporter = nodemailer.createTransport({
        service:'gmail', // En este caso la enviamos por gmail
        auth: {
            user: USER_EMAIL,
            pass: PASSWORD_EMAIL
        }
      });
      
      const mailOptions = {
        from:`Community Barber's <${USER_EMAIL}>`,
        to,
        subject: "RECOVERY PASSWORD: ",
        html:template(token)
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.json({token, barber});
        }
      });
    }else{
      res.status(404).send("Email Barber not found")
    }    
};






module.exports = {
    sendEmail,
    passwordRecoveryBarber
}


