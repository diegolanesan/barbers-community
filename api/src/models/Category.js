
const { DataTypes, STRING } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 
    image:{
        type: DataTypes.ARRAY(STRING), // Se puede ingresar un array de varias url 
        allowNull: false,
        defaultValue:["https://imagenurl"]
    },
  
  });
};