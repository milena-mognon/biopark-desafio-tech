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
    status,
  }: ICreateCommunicationDTO): Promise<Communication> {
    const communication = this.ormRepository.create({
      message,
      send_date,
      recipient_id,
      status,
    });

    await this.ormRepository.save(communication);

    return communication;
  }

  public async checkCommunicationStatus(
    id: string,
  ): Promise<Communication | undefined> {
    return this.ormRepository.findOne({
      where: {
        id,
      },
      select: ['id', 'status'],
      relations: ['recipient'],
    });
  }

  public async findCommunication(
    id: string,
  ): Promise<Communication | undefined> {
    return this.ormRepository.findOne({
      where: {
        id,
      },
      relations: ['recipient'],
    });
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.findOne(id);
    // not complete
  }
}
