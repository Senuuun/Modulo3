const { DataTypes } = require('sequelize');
const { connection } = require('../database/connection');

const Role = connection.define('roles', {
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
    timestamps: true,  // Adiciona automaticamente createdAt e updatedAt
});

module.exports = Role;

