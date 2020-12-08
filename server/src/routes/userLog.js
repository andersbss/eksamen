import express from 'express';
import { userLogController } from '../controllers/index.js';

const router = express.Router();

router.get('/articlevisits', userLogController.getCountByArticle);
router.get('/uservisits', userLogController.getCountByUser);
router.get('/toparticles', userLogController.getTopArticles);
router.post('/', userLogController.create);

export default router;
