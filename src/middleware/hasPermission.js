const { Role, Permission } = require('../models');

async function hasPermission(requiredRole, requiredPermission) {
  return async (req, res, next) => {
    try {
      // O payload do JWT deve conter as informações do usuário autenticado
      const { payload } = req;

      // Busque as roles e permissões do usuário no banco de dados
      const userRoles = await Role.findAll({
        include: {
          model: Permission,
          through: { attributes: [] }, // Para obter apenas as permissões
        },
        where: { userId: payload.id }, // Supondo que o ID do usuário esteja no payload
      });

      // Verifique se o usuário tem a role necessária
      const hasRole = userRoles.some(role => role.description === requiredRole);

      if (!hasRole) {
        return res.status(403).json({ message: "Acesso negado: Role insuficiente." });
      }

      // Verifique se o usuário tem a permissão necessária
      const hasPermission = userRoles.some(role => 
        role.Permissions.some(permission => permission.description === requiredPermission)
      );

      if (!hasPermission) {
        return res.status(403).json({ message: "Acesso negado: Permissão insuficiente." });
      }

      // Se passou nas verificações, continue para o próximo middleware ou rota
      next();
    } catch (error) {
      return res.status(500).json({ message: "Erro no servidor", cause: error.message });
    }
  };
}

module.exports = hasPermission;
