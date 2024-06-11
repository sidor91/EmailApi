import {Request, Response, NextFunction} from 'express'
import { isEmail } from 'validator';

export const validateEmail = (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.query;

		if (typeof email !== "string" || !isEmail(email)) {
			return res.status(400).json({ error: "Invalid email address" });
		}

  next();
};
