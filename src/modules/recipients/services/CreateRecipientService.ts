import { inject, injectable } from 'tsyringe';
import ICreateRecipient from '../dtos/ICreateRecipientDTO';
import Recipient from '../infra/typeorm/entities/Recipient';
import IRecipientsepository from '../repositories/IRecipientsRepository';

@injectable()
export default class CreateRecipientService {
  constructor(
    @inject('RecipientsRepository')
    private recipientsRepository: IRecipientsepository,
  ) {}

  public async execute({
    name,
    email,
    phone,
  }: ICreateRecipient): Promise<Recipient> {
    const recipient = await this.recipientsRepository.create({
      name,
      email,
      phone,
    });

    return recipient;
  }
}
