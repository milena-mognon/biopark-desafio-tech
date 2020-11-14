import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCommunicationService from '@modules/communication/services/CreateCommunicationService';
import FindCommunicationService from '@modules/communication/services/FindCommunicationService';
import DeleteCommunicationService from '@modules/communication/services/DeleteCommunicationService';

class CommunicationsController {
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

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findCommunicationService = container.resolve(
      FindCommunicationService,
    );

    const communication = await findCommunicationService.execute(id);

    return response.json(communication);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCommunicationService = container.resolve(
      DeleteCommunicationService,
    );

    await deleteCommunicationService.execute(id);

    return response.status(200).json('deleted communication');
  }
}

export default new CommunicationsController();
