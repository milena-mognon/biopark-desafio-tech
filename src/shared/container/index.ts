import { container } from 'tsyringe';

import RecipientsRepository from '@modules/recipients/infra/typeorm/repositories/RecipientsRepository';
import IRecipientsepository from '@modules/recipients/repositories/IRecipientsRepository';

container.registerSingleton<IRecipientsepository>(
  'RecipientsRepository',
  RecipientsRepository,
);
