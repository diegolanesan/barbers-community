const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {

	sequelize.define("cart", {
		
        state: {
            type: DataTypes.ENUM("Active", "Paid", "Rejected", "Pending"),
            defaultValue: "Active",
            allowNull: false
        },
        totalAmount: {
            type: DataTypes.FLOAT,
            defaultValue: 0
        },
        date: {
            type: DataTypes.STRING
        },
        time: {
            type: DataTypes.STRING
        },
        barberId: {
            type: DataTypes.INTEGER
        },
        orderStatus: {
            type: DataTypes.ENUM("Pending", "In progress", "Completed"),
            defaultValue: "Pending",
            allowNull: false
        },
	},{ timestamps: false })
};