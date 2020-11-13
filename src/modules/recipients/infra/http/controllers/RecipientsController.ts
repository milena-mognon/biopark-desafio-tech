import { Request, Response } from 'express';

class RecipientsController {
  public async create(request: Request, response: Response): Promise<Response> {
    return response.json('created recipient');
  }

  public async show(request: Request, response: Response): Promise<Response> {
    return response.json('found recipient');
  }
}

export default new RecipientsController();
