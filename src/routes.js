import { Router } from 'express';
import ContactController from './controllers/ContactController.js';

const router = Router();
const contactController = new ContactController();

router.get('/contacts', contactController.index);
router.get('/contacts/:id', contactController.show);
router.post('/contacts', contactController.store);
router.put('/contacts/:id', contactController.update);
router.delete('/contacts/:id', contactController.delete);


export default router;
