import { Router } from 'express';
import CommunicationsController from '../controllers/CommunicationsController';

const communicationsRoutes = Router();

communicationsRoutes.post('/', CommunicationsController.create);

export default communicationsRoutes;
