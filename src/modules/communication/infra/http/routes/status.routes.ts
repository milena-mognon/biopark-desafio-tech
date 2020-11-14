import { Router } from 'express';
import CommunicationStatusController from '../controllers/CommunicationStatusController';

const communicationStatusRoutes = Router();

communicationStatusRoutes.get(
  '/:id/status',
  CommunicationStatusController.show,
);

export default communicationStatusRoutes;
