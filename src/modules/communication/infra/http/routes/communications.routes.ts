import { Router } from 'express';
import CommunicationsController from '../controllers/CommunicationsController';

const communicationsRoutes = Router();

communicationsRoutes.post('/', CommunicationsController.create);
communicationsRoutes.get('/:id', CommunicationsController.show);
// communicationsRoutes.delete('/', CommunicationsController.delete);

export default communicationsRoutes;
