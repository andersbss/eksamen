import express from 'express';
import { ROLE } from '../constants/roles.js';
import { articleController } from '../controllers/index.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/articles', articleController.getAll);
router.post('/articles', [authenticate, authorize(ROLE.ADMIN)], articleController.create);
router.delete('/articles', [authenticate, authorize(ROLE.ADMIN)], articleController.remove);

export default router;
