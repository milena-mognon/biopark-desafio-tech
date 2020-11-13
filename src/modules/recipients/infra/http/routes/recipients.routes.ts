import { Router } from 'express';
import RecipientsController from '../controllers/RecipientsController';

const recipientsRoutes = Router();

recipientsRoutes.post('/', RecipientsController.create);
recipientsRoutes.get('/:id', RecipientsController.show);

export default recipientsRoutes;
