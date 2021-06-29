const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {

	sequelize.define("wishlist", {
		
        state: {
            type: DataTypes.ENUM("Active"),
            defaultValue: "Active",
            allowNull: false
        },
        barberId: {
            type: DataTypes.INTEGER
        }
	},{ timestamps: false })
};