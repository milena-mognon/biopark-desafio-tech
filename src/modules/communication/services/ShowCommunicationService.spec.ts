import AppError from '@shared/errors/AppError';
import { uuid } from 'uuidv4';
import FakeCommunicationsRepository from '../infra/typeorm/repositories/fakes/FakeCommunicationsRepository';
import ShowCommunicationStatusService from './ShowCommunicationStatusService';

let fakeCommunicationsRepository: FakeCommunicationsRepository;
let findCommunication: ShowCommunicationStatusService;

describe('Show Communication Status', () => {
  beforeEach(() => {
    fakeCommunicationsRepository = new FakeCommunicationsRepository();
    findCommunication = new ShowCommunicationStatusService(
      fakeCommunicationsRepository,
    );
  });

  it('shoud be able to find a communication by id and see the status', async () => {
    const communication = await fakeCommunicationsRepository.create({
      message: 'teste: solicitação de agendamento de comunicação',
      recipient_id: uuid(),
      send_date: new Date(),
      status: 'pendente',
    });

    const searchCommunication = await findCommunication.execute(
      communication.id,
    );

    expect(searchCommunication).toHaveProperty('id');
    expect(searchCommunication).toHaveProperty('status');
  });

  it('shoud not be able to find a communication with non existing id', async () => {
    await expect(
      findCommunication.execute('non-existing-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
