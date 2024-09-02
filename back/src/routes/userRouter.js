// Rotas login
const { Router } = require('express');
const router = Router();

const { login } = require('../controller/userController');

router.post('/login', login);

module.exports = router;