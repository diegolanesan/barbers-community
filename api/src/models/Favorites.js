const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {

	sequelize.define("favorite", {
		id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,  
        },
        serviceName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        servicePrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        serviceImage: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
       
	},{ timestamps: false })
};
