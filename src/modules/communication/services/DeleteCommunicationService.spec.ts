import AppError from '@shared/errors/AppError';
import { uuid } from 'uuidv4';
import FakeCommunicationsRepository from '../infra/typeorm/repositories/fakes/FakeCommunicationsRepository';
import DeleteCommunicationService from './DeleteCommunicationService';

let fakeCommunicationsRepository: FakeCommunicationsRepository;
let deleteCommunication: DeleteCommunicationService;

describe('Delete Communication', () => {
  beforeEach(() => {
    fakeCommunicationsRepository = new FakeCommunicationsRepository();
    deleteCommunication = new DeleteCommunicationService(
      fakeCommunicationsRepository,
    );
  });

  it('shoud be able to delete a communication by id', async () => {
    const communication = await fakeCommunicationsRepository.create({
      message: 'teste: solicitação de agendamento de comunicação',
      recipient_id: uuid(),
      send_date: new Date(),
      status: 'pendente',
    });

    await deleteCommunication.execute(communication.id);
  });

  it('shoud not be able to delete a communication with non existing id', async () => {
    await expect(
      deleteCommunication.execute('non-existing-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
