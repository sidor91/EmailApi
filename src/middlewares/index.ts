import {Request, Response, NextFunction} from 'express'
import { isEmail, isURL } from 'validator';

export const validateEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  if (!isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  next();
};

export const validateURL = (req: Request, res: Response, next: NextFunction) => {
  const { url } = req.body;

  if (!isURL(url)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  next();
};
