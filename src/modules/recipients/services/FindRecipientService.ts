import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Recipient from '../infra/typeorm/entities/Recipient';
import IRecipientsepository from '../repositories/IRecipientsRepository';

@injectable()
export default class FindRecipientService {
  constructor(
    @inject('RecipientsRepository')
    private recipientsRepository: IRecipientsepository,
  ) {}

  public async execute(id: string): Promise<Recipient> {
    const recipient = await this.recipientsRepository.findById(id);

    if (!recipient) {
      throw new AppError('Recipient not found.');
    }

    return recipient;
  }
}
