import { uuid } from 'uuidv4';
import FakeCommunicationsRepository from '../infra/typeorm/repositories/fakes/FakeCommunicationsRepository';
import CreateCommunicationService from './CreateCommunicationService';

let fakeCommunicationsRepository: FakeCommunicationsRepository;
let createCommunication: CreateCommunicationService;

describe('Create Communication', () => {
  beforeEach(() => {
    fakeCommunicationsRepository = new FakeCommunicationsRepository();
    createCommunication = new CreateCommunicationService(
      fakeCommunicationsRepository,
    );
  });

  it('shoud be able to create a new communication', async () => {
    const user = await createCommunication.execute({
      message: 'teste: solicitação de agendamento de comunicação',
      recipient_id: uuid(),
      send_date: new Date(),
    });

    expect(user).toHaveProperty('id');
  });

  // it('shoud not be able to create a new recipient with an email already used', async () => {
  //   const user = await createCommunication.execute({
  //     name: 'Jane Doe',
  //     email: 'janedoe@mail.com',
  //     phone: '(42) 99999-9999',
  //   });

  //   expect(user).toHaveProperty('id');

  //   await expect(
  //     createCommunication.execute({
  //       name: 'Jane Doe 2',
  //       email: 'janedoe@mail.com',
  //       phone: '(42) 88888-8888',
  //     }),
  //   ).rejects.toBeInstanceOf(AppError);
  // });
});
