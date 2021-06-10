const { DataTypes, STRING } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('faceType', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
  });
};
