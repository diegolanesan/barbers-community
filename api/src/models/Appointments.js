const { DataTypes, STRING } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define("appointment", {
		date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		status: {
			type: DataTypes.ENUM("Pending", "Approb", "Cancel", "Delete"),
			allowNull: false,
		},
		total: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},{ timestamps: false });
};
