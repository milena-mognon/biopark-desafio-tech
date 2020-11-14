import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Communication from '../infra/typeorm/entities/Communication';
import ICommunicationRepository from '../repositories/ICommunicationRepository';

@injectable()
export default class FindCommunicationService {
  constructor(
    @inject('CommunicationsRepository')
    private communicationsRepository: ICommunicationRepository,
  ) {}

  public async execute(id: string): Promise<Communication> {
    const communication = await this.communicationsRepository.findCommunication(
      id,
    );

    if (!communication) {
      throw new AppError('Communication not found');
    }

    return communication;
  }
}
