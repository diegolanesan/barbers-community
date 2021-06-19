const { DataTypes, STRING } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define("detailAppointment", {
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			// autoIncrement: true,
			allowNull: false,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},{ timestamps: false });
};
