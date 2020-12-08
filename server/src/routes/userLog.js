import express from 'express';
import { ROLE } from '../constants/roles.js';
import { userLogController } from '../controllers/index.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/articlevisits', [authenticate, authorize(ROLE.SUPER_ADMIN)], userLogController.getCountByArticle);
router.get('/uservisits', [authenticate, authorize(ROLE.SUPER_ADMIN)], userLogController.getCountByUser);
router.get('/toparticles', [authenticate, authorize(ROLE.SUPER_ADMIN)], userLogController.getTopArticles);
router.post('/', userLogController.create);

export default router;
