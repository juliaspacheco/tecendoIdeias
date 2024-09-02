// Rota cadastro
const { Router } = require('express');
const router = Router();

const { cadastro } = require('../controller/cadastroController');

router.post('/cadastro', cadastro);

module.exports = router;