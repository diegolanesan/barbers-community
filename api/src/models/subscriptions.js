const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('subscription', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        category: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}