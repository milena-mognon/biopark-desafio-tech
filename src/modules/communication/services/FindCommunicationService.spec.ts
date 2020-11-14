import AppError from '@shared/errors/AppError';
import { uuid } from 'uuidv4';
import FakeCommunicationsRepository from '../infra/typeorm/repositories/fakes/FakeCommunicationsRepository';
import FindCommunicationService from './FindCommunicationService';

let fakeCommunicationsRepository: FakeCommunicationsRepository;
let findCommunication: FindCommunicationService;

describe('Find Communication', () => {
  beforeEach(() => {
    fakeCommunicationsRepository = new FakeCommunicationsRepository();
    findCommunication = new FindCommunicationService(
      fakeCommunicationsRepository,
    );
  });

  it('shoud be able to find a communication by id', async () => {
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
  });

  it('shoud not be able to find a communication with non existing id', async () => {
    await expect(
      findCommunication.execute('non-existing-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
