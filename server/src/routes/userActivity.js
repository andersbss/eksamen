import express from 'express';
import { getCountByArticle } from '../controllers/index.js';

const router = express.Router();

router.get('/visitsByArticle');

export default router;
