const { DataTypes } = require('sequelize');
const { connection } = require('../database/connection');
const { hash } = require('bcryptjs');
const Role = require('./models/Role');  // Importando o modelo Role
const UserRole = require('./UserRole');  // Importando a tabela intermediária

const Aluno = connection.define('alunos', {
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    nome: {
        type: DataTypes.STRING,
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    celular: {
        type: DataTypes.STRING,
    }
});

// hooks 
Aluno.beforeSave(async (user) => {
    user.password = await hash(user.password, 8);
    return user;
});

// Associações
Aluno.belongsToMany(Role, { through: UserRole });  // Relaciona Aluno com Role através da tabela UserRole
Role.belongsToMany(Aluno, { through: UserRole });  // Relaciona Role com Aluno através da tabela UserRole

module.exports = Aluno;
