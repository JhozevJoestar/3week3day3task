const { Router } = require('express');
const { categoriesController } = require('../controllers/categories.controllers.js');

const router = Router();

router.post('/categories', categoriesController.postCategories);
router.get('/categories', categoriesController.getCategories);
router.delete('/categories/:id', categoriesController.deleteCategories);


module.exports = router;