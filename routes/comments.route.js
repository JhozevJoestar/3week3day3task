const { Router } = require('express');
const { commentController } = require('../controllers/comments.controllers.js');

const router = Router();

router.get('/comment/:id', commentController.getComment);
router.post('/comment', commentController.postComment);
router.delete('/comment/:id', commentController.deleteComment);


module.exports = router;