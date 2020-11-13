import ICreateRecipient from '@modules/recipients/dtos/ICreateRecipientDTO';
import IRecipientsepository from '@modules/recipients/repositories/IRecipientsRepository';
import { getRepository, Repository } from 'typeorm';
import Recipient from '../entities/Recipient';

export default class RecipientsRepository implements IRecipientsepository {
  private ormRepository: Repository<Recipient>;

  constructor() {
    this.ormRepository = getRepository(Recipient);
  }

  public async create({
    name,
    email,
    phone,
  }: ICreateRecipient): Promise<Recipient> {
    const recipient = this.ormRepository.create({
      name,
      email,
      phone,
    });

    await this.ormRepository.save(recipient);

    return recipient;
  }

  public async findById(id: string): Promise<Recipient | undefined> {
    return this.ormRepository.findOne(id);
  }
}
