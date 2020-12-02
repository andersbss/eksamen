import express from 'express';
import { ROLE } from '../constants/roles.js';
import { categoryController } from '../controllers/index.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', [authenticate, authorize(ROLE.ADMIN)], categoryController.getAll);
router.post('/', [authenticate, authorize(ROLE.ADMIN)], categoryController.create);

export default router;
