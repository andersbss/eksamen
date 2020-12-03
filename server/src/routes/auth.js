import express from 'express';
import { authController } from '../controllers/index.js';
import validate from '../middleware/validate.js';
import { userSchema } from '../schemas/user.js';

const router = express.Router();

router.post('/register', validate(userSchema), authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

export default router;
