import express from 'express';
import { ROLE } from '../constants/roles.js';
import { articleController } from '../controllers/index.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.post('/articles', [authenticate, authorize(ROLE.ADMIN)], articleController.createArticle);

export default router;
