import express from 'express';
import { ROLE } from '../constants/roles.js';
import { articleController } from '../controllers/index.js';
import appendUser from '../middleware/appendUser.js';
import { authenticate, authorize, checkLogin } from '../middleware/auth.js';
import validate from '../middleware/validate.js';
import { articleSchema } from '../schemas/article.js';

const router = express.Router();

router.post(
  '/',
  [authenticate, authorize(ROLE.ADMIN), appendUser('publisher'), validate(articleSchema)],
  articleController.create
);
router.get('/', checkLogin, articleController.getAll);
router.get('/:id', checkLogin, articleController.getById);
router.put(
  '/:id',
  [authenticate, authorize(ROLE.ADMIN), appendUser('publisher'), validate(articleSchema)],
  articleController.update
);
router.delete('/:id', [authenticate, authorize(ROLE.ADMIN)], articleController.remove);

export default router;
