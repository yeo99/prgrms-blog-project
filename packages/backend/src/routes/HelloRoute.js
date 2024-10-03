import express from 'express';
import { getHello } from '../controllers/HelloController.js';

const router = express.Router();

router.get('/', getHello);

export default router;
