// Rotas vídeo
const { Router } = require('express');
const upload = require('../config/multer'); 
const router = Router();

const {storeVideo, getVideo, getVideosById} = require('../controller/videoController');

<<<<<<< HEAD
router.post('/store/video', upload.array('files'), storeVideo);
router.get('/get/video', getVideo);
=======
/**
 * @swagger
 * /store/video:
 *  post:
 *      summary: Cria novo vídeo
 *      responses:
 *        200:
 *          description: Vídeo criado
 *          content:
 *              application/json:
 *                  schema:
 *                    type: array
 *                    items:   
 *                      type: object
 */
router.post('/store/video', upload.array('files'), storeVideo);

/**
 * @swagger
 * /get/video:
 *  get:
 *      summary: Busca todos os vídeos
 *      responses:
 *        200:
 *          description: Vídeos encontrados
 *          content:
 *              application/json:
 *                  schema:
 *                    type: array
 *                    items:   
 *                      type: object
 */
router.get('/get/video', getVideo);

/**
 * @swagger
 * /get/video/detalhes/:id:
 *  get:
 *      summary: Busca um vídeo específico junto de seus detalhes
 *      responses:
 *        200:
 *          description: Vídeo encontrado
 *          content:
 *              application/json:
 *                  schema:
 *                    type: array
 *                    items:   
 *                      type: object
 */
>>>>>>> fddbfe1 (configuração swagger)
router.get('/get/video/detalhes/:id', getVideosById)

module.exports = router;