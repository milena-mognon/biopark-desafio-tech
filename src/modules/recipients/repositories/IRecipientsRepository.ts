import ICreateRecipient from '../dtos/ICreateRecipientDTO';
import Recipient from '../infra/typeorm/entities/Recipient';

export default interface IRecipientsepository {
  create({ name, email, phone }: ICreateRecipient): Promise<Recipient>;
  findById(id: string): Promise<Recipient | undefined>;
  findByEmail(email: string): Promise<Recipient | undefined>;
}
