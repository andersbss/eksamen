import express from 'express';
import { userLogController } from '../controllers/index.js';
import { userLogService } from '../services/index.js';

const router = express.Router();

router.get('/articlevisits', userLogController.getCountByArticle);
router.get('/uservisits', userLogService.getCountByUser);
router.post('/', userLogController.create);

export default router;
