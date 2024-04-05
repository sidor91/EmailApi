import { Request, Response, NextFunction } from 'express';
import { Controller } from '../types';

export const controllerWrapper = (controller: Controller) => {
  const func = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error: any) {
      next(error);
    }
  };
  return func;
};
