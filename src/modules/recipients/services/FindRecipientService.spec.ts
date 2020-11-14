import AppError from '@shared/errors/AppError';
import FakeRecipientsRepository from '../repositories/fakes/FakeRecipientsRepository';
import FindRecipientService from './FindRecipientService';

let fakeRecipientsRepository: FakeRecipientsRepository;
let findRecipient: FindRecipientService;

describe('Find Recipient', () => {
  beforeEach(() => {
    fakeRecipientsRepository = new FakeRecipientsRepository();
    findRecipient = new FindRecipientService(fakeRecipientsRepository);
  });

  it('shoud be able to find a recipient by id', async () => {
    const recipient = await fakeRecipientsRepository.create({
      name: 'Jane Doe',
      email: 'janedoe@mail.com',
      phone: '(42) 99999-9999',
    });

    const searchRecipient = await findRecipient.execute(recipient.id);

    expect(searchRecipient).toHaveProperty('id');
  });

  it('shoud not be able to find a recipient with non existing id', async () => {
    const recipient = await fakeRecipientsRepository.create({
      name: 'Jane Doe',
      email: 'janedoe@mail.com',
      phone: '(42) 99999-9999',
    });

    expect(recipient).toHaveProperty('id');

    await expect(
      findRecipient.execute('non-existing-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
