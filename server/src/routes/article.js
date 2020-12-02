import express from 'express';
import { ROLE } from '../constants/roles.js';
import { articleController } from '../controllers/index.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', articleController.getAll);
router.post('/', [authenticate, authorize(ROLE.ADMIN)], articleController.create);
router.delete('/', [authenticate, authorize(ROLE.ADMIN)], articleController.remove);

export default router;
