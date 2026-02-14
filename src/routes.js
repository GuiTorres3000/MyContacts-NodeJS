import { Router } from 'express';
import ContactController from './controllers/ContactController.js';
import CategoryController from './controllers/categoryController.js';

const router = Router();
const contactController = new ContactController();
const categoryController = new CategoryController();

router.get('/contacts', contactController.index);
router.get('/contacts/:id', contactController.show);
router.post('/contacts', contactController.store);
router.put('/contacts/:id', contactController.update);
router.delete('/contacts/:id', contactController.delete);

router.get('/categories', categoryController.index);
router.get('/categories/:id', categoryController.show);
router.post('/categories', categoryController.store);
router.put('/categories/:id', categoryController.update);
router.delete('/categories/:id', categoryController.delete);

export default router;
