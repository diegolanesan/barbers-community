const { DataTypes, STRING } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"invoice",
		{
			id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
			},
			date: {
				type: DataTypes.DATE, // RE-VER ESTO WACHIN!
				allowNull: false,
			},
			statusOrder: {
				type: DataTypes.ENUM(
					"unSuccessful",
					"onHold",
					"inProgress",
					"Completed"
				),
				defaultValue: "onHold",
			},
			statusPay: {
				type: DataTypes.ENUM("Cancel", "unPaid", "Pay"),
				defaultValue: "unPaid",
			},
			total: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
		},
		{ timestamps: false }
	);
};
