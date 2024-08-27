const { DataTypes } = require('sequelize');
const { connection } = require('../database/connection');
const User = require('./User');
const Role = require('./models/Role');

const UserRole = connection.define('user_roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,  // Referencia o modelo User
            key: 'id',
        },
    },
    roleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,  // Referencia o modelo Role
            key: 'id',
        },
    }
}, {
    timestamps: true,
});

module.exports = UserRole;
