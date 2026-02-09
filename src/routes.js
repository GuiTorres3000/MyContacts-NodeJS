import { Router } from 'express';
import contactController from './controllers/ContactController.js';

const router = Router();

router.get('/contacts', contactController.index);

export default router;
