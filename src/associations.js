const User = require('./models/User');
const Role = require('./src/models/Role');
const Permission = require('./models/Permission');
const UserRole = require('./models/UserRole');
const PermissionRole = require('./models/PermissionRole');

// Configurando as associações

// Associação muitos-para-muitos entre User e Role através de UserRole
User.belongsToMany(Role, { through: UserRole });
Role.belongsToMany(User, { through: UserRole });

// Associação muitos-para-muitos entre Role e Permission através de PermissionRole
Role.belongsToMany(Permission, { through: PermissionRole });
Permission.belongsToMany(Role, { through: PermissionRole });

module.exports = {
  User,
  Role,
  Permission,
  UserRole,
  PermissionRole,
};
