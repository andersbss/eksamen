import express from 'express';
import { articleController } from '../controllers/index.js';

const router = express.Router();

router.post('/articles', articleController.createArticle);

export default router;
