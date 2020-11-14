import ICreateRecipient from '@modules/recipients/dtos/ICreateRecipientDTO';
import Recipient from '@modules/recipients/infra/typeorm/entities/Recipient';
import IRecipientsepository from '@modules/recipients/repositories/IRecipientsRepository';
import { uuid } from 'uuidv4';

export default class FakeRecipientsRepository implements IRecipientsepository {
  private recipients: Recipient[] = [];

  public async create(recipientData: ICreateRecipient): Promise<Recipient> {
    const recipient = new Recipient();
    Object.assign(recipient, { id: uuid() }, recipientData);

    this.recipients.push(recipient);
    return recipient;
  }

  public async findById(id: string): Promise<Recipient | undefined> {
    const recipientFound = this.recipients.find(
      recipient => recipient.id === id,
    );
    return recipientFound;
  }

  public async findByEmail(email: string): Promise<Recipient | undefined> {
    const recipientFound = this.recipients.find(
      recipient => recipient.email === email,
    );
    return recipientFound;
  }
}
