import express from 'express';
import { imageController } from '../controllers/index.js';
import { upload } from '../middleware/image.js';

const router = express.Router();

// Skal bare admin kunne uploade? Isåfall legge til authentication
router.post('/upload', upload, imageController.create);
router.get('/download/:id', imageController.get);

export default router;
