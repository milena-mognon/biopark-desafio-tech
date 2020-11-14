import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICommunicationRepository from '../repositories/ICommunicationRepository';

@injectable()
export default class DeleteCommunicationService {
  constructor(
    @inject('CommunicationsRepository')
    private communicationsRepository: ICommunicationRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const communication = await this.communicationsRepository.findCommunication(
      id,
    );

    if (!communication || communication.canceled_at !== null) {
      throw new AppError('Communication not found or deleted');
    }

    await this.communicationsRepository.delete(id);
  }
}
