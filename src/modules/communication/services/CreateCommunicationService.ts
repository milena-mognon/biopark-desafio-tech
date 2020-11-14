import { inject, injectable } from 'tsyringe';
import Communication from '../infra/typeorm/entities/Communication';
import ICommunicationRepository from '../repositories/ICommunicationRepository';

interface IRequest {
  message: string;
  send_date: Date;
  recipient_id: string;
}

@injectable()
export default class CreateCommunicationService {
  constructor(
    @inject('CommunicationsRepository')
    private communicationsRepository: ICommunicationRepository,
  ) {}

  public async execute({
    message,
    recipient_id,
    send_date,
  }: IRequest): Promise<Communication> {
    const communication = await this.communicationsRepository.create({
      message,
      recipient_id,
      send_date,
      status: 'pendente',
    });

    return communication;
  }
}
