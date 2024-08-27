const { DataTypes } = require('sequelize');
const { connection } = require('../database/connection');

const Permission = connection.define('permissions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
});

module.exports = Permission;
