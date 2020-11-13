import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateRecipientService from '@modules/recipients/services/CreateRecipientService';
import FindRecipientService from '@modules/recipients/services/FindRecipientService';

class RecipientsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, phone } = request.body;

    const createRecipientService = container.resolve(CreateRecipientService);

    const recipient = await createRecipientService.execute({
      name,
      email,
      phone,
    });

    return response.json(recipient);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findRecipientService = container.resolve(FindRecipientService);

    const recipient = await findRecipientService.execute(id);

    return response.json(recipient);
  }
}

export default new RecipientsController();
