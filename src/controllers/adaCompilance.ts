import { Request, Response } from 'express';
import services from '../services';

export const adaCompilance = async (req: Request, res: Response) => {
  const { email, url } = req.body;
  const response = await services.AdaCompilance.handleRequest({ email, url });
  res.status(200).json(response);
};
