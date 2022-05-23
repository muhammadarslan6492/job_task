import express from 'express';

import CategoryController from '../controller/category';

const { Router } = express;
const router = Router();

router.get('/tree', CategoryController.getCategoryTree);
router.get('/', CategoryController.categories);
router.get('/:categoryId', CategoryController.categoryById);
router.delete('/drop', CategoryController.dropDb);

export default router;
