const { DataTypes, STRING } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define("appointment", {
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
		},
		date: {
			type: DataTypes.DATE,  // RE-VER ESTO WACHIN!
			allowNull: false,
		},
		status: {
			type: DataTypes.ENUM("Pending", "Approved", "Cancel", "Delete"),
			allowNull: false,
		},
		total: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},{ timestamps: false });
};
