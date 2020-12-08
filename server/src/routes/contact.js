import express from 'express';
import { ROLE } from '../constants/roles.js';
import { contactController } from '../controllers/index.js';
import { authenticate, authorize } from '../middleware/auth.js';
import validate from '../middleware/validate.js';
import { contactSchema } from '../schemas/contact.js';

const router = express.Router();

router.get('/', authenticate, authorize([ROLE.ADMIN, ROLE.SUPER_ADMIN]), contactController.getAll);
router.get('/:id', authenticate, authorize([ROLE.ADMIN, ROLE.SUPER_ADMIN]), contactController.getById);
router.post('/', [validate(contactSchema)], contactController.create);

export default router;
