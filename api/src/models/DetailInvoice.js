const { DataTypes, STRING } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"detailInvoice",
		{
			id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
			},

			invoiceId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},

			serviceId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			price: {
				type: DataTypes.FLOAT,
				defaultValue: 0,
			},
		}
		//{ timestamps: false }
	);
};
