const { Router } = require('express');
const router = Router();

const { storeComentario } = require('../controller/comentarioController');

router.post('/store/comentario', storeComentario);

module.exports = router;