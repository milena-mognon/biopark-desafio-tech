import { Router } from 'express';
import recipientsRoutes from '@modules/recipients/infra/http/routes/recipients.routes';
import communicationsRoutes from '@modules/communication/infra/http/routes/communications.routes';
import communicationStatusRoutes from '@modules/communication/infra/http/routes/status.routes';

const routes = Router();

routes.use('/recipients', recipientsRoutes);
routes.use('/communications', communicationsRoutes);
routes.use('/communications', communicationStatusRoutes);

export default routes;
