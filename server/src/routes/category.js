import express from 'express';
import { ROLE } from '../constants/roles.js';
import { categoryController } from '../controllers/index.js';
import { authenticate, authorize } from '../middleware/auth.js';
import validate from '../middleware/validate.js';
import { categorySchema } from '../schemas/category.js';

const router = express.Router();

router.get('/', categoryController.getAll);
router.post(
  '/',
  [authenticate, authorize(ROLE.ADMIN, ROLE.SUPER_ADMIN), validate(categorySchema)],
  categoryController.create
);

export default router;
