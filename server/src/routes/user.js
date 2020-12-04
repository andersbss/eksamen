import express from 'express';
import { userController } from '../controllers/index.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/me', authenticate, userController.me);

export default router;
