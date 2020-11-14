import ICreateCommunicationDTO from '../dtos/ICreateCommunicationDTO';
import Communication from '../infra/typeorm/entities/Communication';

export default interface ICommunicationRepository {
  create({
    message,
    send_date,
    recipient_id,
  }: ICreateCommunicationDTO): Promise<Communication>;
  checkCommunicationStatus(id: string): Promise<Communication | undefined>;
  delete(id: string): Promise<void>;
}
