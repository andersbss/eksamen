import express from 'express';
import { ROLE } from '../constants/roles.js';
import { contactController } from '../controllers/index.js';
import { authenticate, authorize, authorizeAccess } from '../middleware/auth.js';
import validate from '../middleware/validate.js';
import { contactSchema } from '../schemas/contact.js';
import { contactService } from '../services/index.js';

const router = express.Router();

router.get('/', authenticate, authorize(ROLE.ADMIN), contactController.getAll);
router.get('/:id', authenticate, authorize(ROLE.ADMIN), contactController.getById);
router.post('/', [validate(contactSchema)], contactController.create);

export default router;
