const { Router } = require('express');
const router = Router();

<<<<<<< HEAD
const { storeComentario } = require('../controller/comentarioController');

router.post('/store/comentario', storeComentario);

=======
const { storeComentario, getComentario } = require('../controller/comentarioController');

/**
 * @swagger
 * /store/comentario:
 *  post:
 *      summary: Cria um novo comentário
 *      responses:
 *        200:
 *          description: Comentário criado
 *          content:
 *              application/json:
 *                  schema:
 *                    type: array
 *                    items:   
 *                      type: object
 */
router.post('/store/comentario', storeComentario);

/**
 * @swagger
 * /get/comentario:
 *  get:
 *      summary: Busca comentários
 *      responses:
 *        200:
 *          description: Comentários encontrados
 *          content:
 *              application/json:
 *                  schema:
 *                    type: array
 *                    items:   
 *                      type: object
 */
router.get('/get/comentario', getComentario)

>>>>>>> fddbfe1 (configuração swagger)
module.exports = router;