import express from 'express';
import { ROLE } from '../constants/roles.js';
import { articleController } from '../controllers/index.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.post('/', [authenticate, authorize(ROLE.ADMIN)], articleController.create);
router.get('/', articleController.getAll);
router.put('/:id', [authenticate, authorize(ROLE.ADMIN)], articleController.update);
router.delete('/:id', [authenticate, authorize(ROLE.ADMIN)], articleController.remove);

export default router;
