import { Router } from 'express';
import recipientsRoutes from '@modules/recipients/infra/http/routes/recipients.routes';

const routes = Router();

routes.use('/recipients', recipientsRoutes);

export default routes;
