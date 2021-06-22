const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {

	sequelize.define("cart", {
		
        state: {
            type: DataTypes.ENUM("Active", "Paid", "Rejected"),
            defaultValue: "Active",
            allowNull: false
        },
        totalAmount: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        }

	},{ timestamps: false })
};

  
