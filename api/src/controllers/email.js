require('dotenv').config();
const nodemailer = require('nodemailer');
const {USER_EMAIL, PASSWORD_EMAIL } = process.env;
const jwt = require('jsonwebtoken')
const {template} = require('./MailTemplate/template')

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
const passwordRecovery = (req, res)=>{
    const {to} = req.body
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
        subject: "RECUPERACIÓN DE CONTRASEÑA: ",
        html:template
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.send(token);
        }
      });
};





module.exports = {
    sendEmail,
    passwordRecovery
}


