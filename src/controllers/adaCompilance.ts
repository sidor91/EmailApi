import { Request, Response } from 'express';
import AdaCompilanceService from '../services/adaCompilanceService';

export const adaCompilance = async (req: Request, res: Response) => {
  const { email, url } = req.body;
  AdaCompilanceService.handleRequest({ email, url });
  res.status(200).json('Email has been sent successfully');
};
