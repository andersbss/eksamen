import express from 'express';
import { authorController } from '../controllers/index.js';

const router = express.Router();

router.get('/', authorController.getAll);

// This was only used to put data into the database and for testing.
router.post('/', authorController.create);

export default router;
