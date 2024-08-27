const { DataTypes } = require('sequelize');
const { connection } = require('../database/connection');
const Role = require('./models/Role');
const Permission = require('./Permission');

const PermissionRole = connection.define('permission_roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    roleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,  // Referencia o modelo Role
            key: 'id',
        },
    },
    permissionId: {
        type: DataTypes.INTEGER,
        references: {
            model: Permission,  // Referencia o modelo Permission
            key: 'id',
        },
    }
}, {
    timestamps: true,
});

module.exports = PermissionRole;
