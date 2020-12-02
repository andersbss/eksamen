import express from 'express';
import { articleController } from '../controllers/index.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.post('/articles', authenticate, articleController.createArticle);

export default router;
