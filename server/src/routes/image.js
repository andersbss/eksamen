import express from 'express';
import { imageController } from '../controllers/index.js';
import { upload } from '../middleware/image.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { ROLE } from '../constants/roles.js';

const router = express.Router();

router.post('/upload', authenticate, authorize(ROLE.ADMIN, ROLE.SUPER_ADMIN), upload, imageController.create);
router.get('/download/:id', imageController.get);

export default router;
