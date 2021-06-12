const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('subscription', {
<<<<<<< Updated upstream
=======
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true
        },

>>>>>>> Stashed changes
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
    },{ timestamps: false })
}