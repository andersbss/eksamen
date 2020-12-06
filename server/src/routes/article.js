import express from 'express';
import { ROLE } from '../constants/roles.js';
import { articleController } from '../controllers/index.js';
import appendUser from '../middleware/appendUser.js';
import { authenticate, authorize, authorizeAccess } from '../middleware/auth.js';
import validate from '../middleware/validate.js';
import { articleSchema } from '../schemas/article.js';

const router = express.Router();

router.post(
  '/',
  [authenticate, authorize(ROLE.ADMIN), appendUser('publisher'), validate(articleSchema)],
  articleController.create
);
router.get('/', authorizeAccess, articleController.getAll);
router.get('/:id', authorizeAccess, articleController.getById);
router.put(
  '/:id',
  [authenticate, authorize(ROLE.ADMIN), appendUser('publisher'), validate(articleSchema)],
  articleController.update
);
router.delete('/:id', [authenticate, authorize(ROLE.ADMIN)], articleController.remove);

export default router;
