import AppError from '@shared/errors/AppError';
import FakeRecipientsRepository from '../repositories/fakes/FakeRecipientsRepository';
import CreateRecipientService from './CreateRecipientService';

let fakeRecipientsRepository: FakeRecipientsRepository;
let createRecipient: CreateRecipientService;

describe('Create Recipient', () => {
  beforeEach(() => {
    fakeRecipientsRepository = new FakeRecipientsRepository();
    createRecipient = new CreateRecipientService(fakeRecipientsRepository);
  });

  it('shoud be able to create a new recipient', async () => {
    const user = await createRecipient.execute({
      name: 'Jane Doe',
      email: 'janedoe@mail.com',
      phone: '(42) 99999-9999',
    });

    expect(user).toHaveProperty('id');
  });

  it('shoud not be able to create a new recipient with an email already used', async () => {
    const user = await createRecipient.execute({
      name: 'Jane Doe',
      email: 'janedoe@mail.com',
      phone: '(42) 99999-9999',
    });

    expect(user).toHaveProperty('id');

    await expect(
      createRecipient.execute({
        name: 'Jane Doe 2',
        email: 'janedoe@mail.com',
        phone: '(42) 88888-8888',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
