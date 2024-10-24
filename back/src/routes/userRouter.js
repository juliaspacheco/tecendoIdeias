<<<<<<< HEAD
// Rotas login
=======
// Rota login
>>>>>>> fddbfe1 (configuração swagger)
const { Router } = require('express');
const router = Router();

const { login } = require('../controller/userController');

<<<<<<< HEAD
=======
/**
 * @swagger
 * /login:
 *  post:
 *      summary: Loga usuário em sua conta
 *      responses:
 *        200:
 *          description: Usuário logado
 *          content:
 *              application/json:
 *                  schema:
 *                    type: array
 *                    items:   
 *                      type: object
 */
>>>>>>> fddbfe1 (configuração swagger)
router.post('/login', login);

module.exports = router;