const { DataTypes, STRING } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('client', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    image:{
        type: DataTypes.ARRAY(STRING), // ¿Tiene sentido que el client tenga varias fotos? Por ahora vamos a hacer que sea solo una (Foto de perfil)
        allowNull: false,
        defaultValue:["https://imagenurl"]
    },
    mobile:{
        type: DataTypes.INTEGER,
    },
    location: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    status:{
        type: DataTypes.BOOLEAN,
    },    
  },{ timestamps: false });
};
