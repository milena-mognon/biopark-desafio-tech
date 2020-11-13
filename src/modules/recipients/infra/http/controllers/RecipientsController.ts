import CreateRecipientService from '@modules/recipients/services/CreateRecipientService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

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
    return response.json('found recipient');
  }
}

export default new RecipientsController();
