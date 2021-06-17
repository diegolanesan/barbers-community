const { DataTypes, STRING } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define("serviceBarber", {
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		image: {
			type: DataTypes.ARRAY(STRING), // Se puede ingresar un array de varias url
			allowNull: false,
			defaultValue: ["https://imagenurl"],
		},
	},{ timestamps: false });
};
