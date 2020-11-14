import ShowCommunicationStatusService from '@modules/communication/services/ShowCommunicationStatusService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CommunicationStatusController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCommunicationStatusService = container.resolve(
      ShowCommunicationStatusService,
    );

    const communication = await showCommunicationStatusService.execute(id);

    return response.json(communication);
  }
}

export default new CommunicationStatusController();
