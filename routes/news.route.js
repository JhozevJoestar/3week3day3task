const { Router } = require('express');
const { newsController } = require('../controllers/news.controllers.js');

const router = Router();

router.post('/news', newsController.postNews);
router.get('/news', newsController.getNews);
router.get('/news/:id', newsController.getNewsById);
router.get('/news/category/:id', newsController.getNewsByCategory);
router.patch('/news/:id', newsController.patchNews);
router.delete('/news/:id', newsController.deleteNews);


module.exports = router;