const Role = require('../models/Role');
const Permission = require('../models/Permission');
const User = require('../models/User');

module.exports = {
  async createOnePermission(req, res) {
    try {
      const { description } = req.body;
      const permission = await Permission.create({ description });
      return res.status(201).json(permission);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async createOneRole(req, res) {
    try {
      const { description } = req.body;
      const role = await Role.create({ description });
      return res.status(201).json(role);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async listPermissions(req, res) {
    try {
      const permissions = await Permission.findAll();
      return res.status(200).json(permissions);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async listRoles(req, res) {
    try {
      const roles = await Role.findAll();
      return res.status(200).json(roles);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async listPermissionsByRole(req, res) {
    try {
      const { roleId } = req.params;
      const role = await Role.findByPk(roleId, {
        include: [Permission]
      });
      if (!role) {
        return res.status(404).json({ error: 'Role not found' });
      }
      return res.status(200).json(role.Permissions);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async addRoleToUser(req, res) {
    try {
      const { userId, roleId } = req.body;
      const user = await User.findByPk(userId);
      const role = await Role.findByPk(roleId);
      if (!user || !role) {
        return res.status(404).json({ error: 'User or Role not found' });
      }
      await user.addRole(role);
      return res.status(200).json({ message: 'Role added to user successfully' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async addPermissionToRole(req, res) {
    try {
      const { roleId, permissionId } = req.body;
      const role = await Role.findByPk(roleId);
      const permission = await Permission.findByPk(permissionId);
      if (!role || !permission) {
        return res.status(404).json({ error: 'Role or Permission not found' });
      }
      await role.addPermission(permission);
      return res.status(200).json({ message: 'Permission added to role successfully' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
