const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {

	sequelize.define("review", {
		
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        barberId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
	},{ timestamps: false })
};