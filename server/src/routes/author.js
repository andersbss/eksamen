import express from 'express';
import { authorController } from '../controllers/index.js';

const router = express.Router();

// Not needed to fulfill the requirements. Only used to add the given authors
// router.post('/', authorController.create);

export default router;
