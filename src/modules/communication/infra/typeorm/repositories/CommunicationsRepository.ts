import ICreateCommunicationDTO from '@modules/communication/dtos/ICreateCommunicationDTO';
import ICommunicationRepository from '@modules/communication/repositories/ICommunicationRepository';
import { getRepository, Repository } from 'typeorm';
import Communication from '../entities/Communication';

export default class CommunicationsRepository
  implements ICommunicationRepository {
  private ormRepository: Repository<Communication>;

  constructor() {
    this.ormRepository = getRepository(Communication);
  }

  public async create({
    message,
    send_date,
    recipient_id,
  }: ICreateCommunicationDTO): Promise<Communication> {
    const communication = this.ormRepository.create({
      message,
      send_date,
      recipient_id,
    });

    await this.ormRepository.save(communication);

    return communication;
  }

  public async checkCommunicationStatus(
    id: string,
  ): Promise<Communication | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.findOne(id);
    // not complete
  }
}
