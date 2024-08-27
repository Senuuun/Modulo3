const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const hasPermission = require('../middleware/hasPermission');

// Importar controladores
const { listOneCategory, createCategory, updateCategory, deleteCategory } = require('../controllers/category.controller');

// Definir as rotas e aplicar os middlewares
router.get('/listOneCategory/:id', auth, hasPermission('admin', 'sListarCategorias'), listOneCategory);
router.post('/createCategory', auth, hasPermission('admin', 'sCriarCategoria'), createCategory);
router.put('/updateCategory/:id', auth, hasPermission('admin', 'sAtualizarCategoria'), updateCategory);
router.delete('/deleteCategory/:id', auth, hasPermission('admin', 'sDeletarCategoria'), deleteCategory);

module.exports = router;
