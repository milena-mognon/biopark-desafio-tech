import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCommunicationService from '@modules/communication/services/CreateCommunicationService';

class CommunicationsStatusController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { message, send_date, recipient_id } = request.body;

    const createCommunicationService = container.resolve(
      CreateCommunicationService,
    );

    const communication = await createCommunicationService.execute({
      message,
      send_date,
      recipient_id,
    });

    return response.json(communication);
  }
}

export default new CommunicationsStatusController();
