import { Router } from 'express';
import contactController from './controllers/contactController.js';

const router = Router();

router.get('/contacts', contactController.index);
router.get('/contacts/:id', contactController.show);
router.post('/contacts', contactController.store);
router.put('/contacts/:id', contactController.update);
router.delete('/contacts/:id', contactController.delete);


export default router;
