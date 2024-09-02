// Rotas vídeo
const { Router } = require('express');
const upload = require('../config/multer'); 
const router = Router();

const {storeVideo, getVideo, getVideosById} = require('../controller/videoController');

router.post('/store/video', upload.array('files'), storeVideo);
router.get('/get/video', getVideo);
router.get('/get/video/detalhes/:id', getVideosById)

module.exports = router;