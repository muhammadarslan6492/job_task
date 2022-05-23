import express from 'express';

import CategoryRouter from './category';

const { Router } = express;
const router = Router();

router.use('/category', CategoryRouter);

export default router;
