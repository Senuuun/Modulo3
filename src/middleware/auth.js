const { verify } = require('jsonwebtoken');
const Aluno = require('../models/Aluno');
const Role = require('./models/Role');

async function auth(req, res, next) {
  try {
    const { authorization } = req.headers;
    const decoded = verify(authorization, process.env.SECRET_JWT);

    const aluno = await Aluno.findByPk(decoded.id, {
      include: Role,
    });

    if (!aluno) {
      return res.status(401).json({
        message: 'Autenticação falhou!',
      });
    }

    req.aluno = aluno;
    req.roles = aluno.roles.map(role => role.description);  // Obtenha as roles do usuário

    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Autenticação falhou!',
      cause: error.message,
    });
  }
}

function authorize(roles = []) {
  return (req, res, next) => {
    if (roles.length && !roles.some(role => req.roles.includes(role))) {
      return res.status(403).json({ message: 'Acesso negado.' });
    }
    next();
  };
}

module.exports = { auth, authorize };
