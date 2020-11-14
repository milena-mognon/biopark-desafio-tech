import { Request, Response } from 'express';

class CommunicationsController {
  public async create(request: Request, response: Response): Promise<Response> {
    return response.json('created communication');
  }
}

export default new CommunicationsController();
