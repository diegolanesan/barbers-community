const { DataTypes, STRING } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('style', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
<<<<<<< HEAD
  },{ timestamps: false });
=======
  }, { timestamps: false });
>>>>>>> 5cc05aa23e2e1e1cc1c0f73f72b7001d4c113cdf
};
