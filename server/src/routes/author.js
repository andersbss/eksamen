import express from 'express';
import { authorController } from '../controllers/index.js';

const router = express.Router();

router.get('/', authorController.getAll);
router.post('/', authorController.create);

export default router;
