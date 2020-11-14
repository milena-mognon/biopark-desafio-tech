import ICreateCommunicationDTO from '@modules/communication/dtos/ICreateCommunicationDTO';
import ICommunicationRepository from '@modules/communication/repositories/ICommunicationRepository';
import { uuid } from 'uuidv4';
import Communication from '../../entities/Communication';

export default class FakeCommunicationsRepository
  implements ICommunicationRepository {
  private communications: Communication[] = [];

  public async create(
    communicationData: ICreateCommunicationDTO,
  ): Promise<Communication> {
    const communication = new Communication();
    Object.assign(
      communication,
      { id: uuid() },
      { ...communicationData, canceled_at: null },
    );

    this.communications.push(communication);
    return communication;
  }

  public async checkCommunicationStatus(
    id: string,
  ): Promise<Communication | undefined> {
    const communicationFound = this.communications.find(
      communication => communication.id === id,
    );
    return communicationFound;
  }

  public async findCommunication(
    id: string,
  ): Promise<Communication | undefined> {
    const communicationFound = this.communications.find(
      communication => communication.id === id,
    );
    return communicationFound;
  }

  public async delete(id: string): Promise<void> {
    this.communications.map(communication => {
      if (communication.id === id) {
        return {
          ...communication,
          canceled_at: new Date(),
        };
      }
      return communication;
    });
  }
}
