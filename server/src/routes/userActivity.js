import express from 'express';
import { userActivityController } from '../controllers/index.js';

const router = express.Router();

router.get('/articlevisits', userActivityController.getCountByArticle);

export default router;
