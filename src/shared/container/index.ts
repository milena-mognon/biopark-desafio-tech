import { container } from 'tsyringe';

import RecipientsRepository from '@modules/recipients/infra/typeorm/repositories/RecipientsRepository';
import IRecipientsepository from '@modules/recipients/repositories/IRecipientsRepository';
import ICommunicationRepository from '@modules/communication/repositories/ICommunicationRepository';
import CommunicationsRepository from '@modules/communication/infra/typeorm/repositories/CommunicationsRepository';

container.registerSingleton<IRecipientsepository>(
  'RecipientsRepository',
  RecipientsRepository,
);

container.registerSingleton<ICommunicationRepository>(
  'CommunicationsRepository',
  CommunicationsRepository,
);
