// Rota cadastro
const { Router } = require('express');
const router = Router();

const { cadastro } = require('../controller/cadastroController');

<<<<<<< HEAD
=======
/**
 * @swagger
 * /cadastro:
 *  post:
 *      summary: Cadastra novos usuários
 *      responses:
 *        200: 
 *          description: Usuário criado
 *          content:
 *              application/json:
 *                  schema:
 *                    type: array
 *                    items:   
 *                      type: object
 */
>>>>>>> fddbfe1 (configuração swagger)
router.post('/cadastro', cadastro);

module.exports = router;