const express = require('express');
const router = express.Router();
const { hasPermission } = require('../middleware/hasPermission');
const { createOneRole, createOnePermission } = require('../controllers/rbac.controller');

const rbacRoutes = Router();

// Rota para criar uma permissão
rbacRoutes.post('/permissions', rbacController.createOnePermission);

// Rota para criar uma role
rbacRoutes.post('/roles', rbacController.createOneRole);

// Rota para listar todas as permissões
rbacRoutes.get('/permissions', rbacController.listPermissions);

// Rota para listar todas as roles
rbacRoutes.get('/roles', rbacController.listRoles);

// Rota para listar permissões por role
rbacRoutes.get('/roles/:roleId/permissions', rbacController.listPermissionsByRole);

// Rota para adicionar uma role a um usuário
rbacRoutes.post('/roles/add-to-user', rbacController.addRoleToUser);

// Rota para adicionar uma permissão a uma role
rbacRoutes.post('/permissions/add-to-role', rbacController.addPermissionToRole);

module.exports = rbacRoutes;
