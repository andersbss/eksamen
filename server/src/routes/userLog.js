import express from 'express';
import { ROLE } from '../constants/roles.js';
import { userLogController } from '../controllers/index.js';
import appendUser from '../middleware/appendUser.js';
import { authenticate, authorize, authorizeAccess } from '../middleware/auth.js';
import validate from '../middleware/validate.js';
import { userLogSchema } from '../schemas/userLog.js';

const router = express.Router();

router.get('/articlevisits', [authenticate, authorize(ROLE.SUPER_ADMIN)], userLogController.getCountByArticle);
router.get('/uservisits', [authenticate, authorize(ROLE.SUPER_ADMIN)], userLogController.getCountByUser);
router.get('/toparticles', [authenticate, authorize(ROLE.SUPER_ADMIN)], userLogController.getTopArticles);
router.post('/', [authorizeAccess, validate(userLogSchema)], userLogController.create);

export default router;
