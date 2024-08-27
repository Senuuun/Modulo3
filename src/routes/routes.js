const { Router } = require('express');
const categoryRoutes = require('./category.routes');
const alunoRoutes = require("./alunos.route");
const cursoRoutes = require("./cursos.route");
const loginRoutes = require("./login.route");
const matriculaRoutes = require("./matricula.route");
const rbacRoutes = require("./rbac.routes");  // Importa as rotas de RBAC

const routes = Router();

routes.use('/categories', categoryRoutes);
routes.use('/matriculas', matriculaRoutes);
routes.use('/alunos', alunoRoutes);
routes.use('/cursos', cursoRoutes);
routes.use('/login', loginRoutes);
routes.use('/rbac', rbacRoutes);  // Adiciona as rotas de RBAC ao sistema

module.exports = routes;
