const { DataTypes, STRING } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contraseña:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    tipo:{
      type:DataTypes.ENUM("cliente", "admin", "clientePremium"),
      allowNull: false,
    }

  },{ timestamps: false });
};
