import { Request, Response } from "express";
import EmailService from "../services/EmailService";

export const sendMail = async (req: Request, res: Response) => {
	const { email } = req.query;

	const response = await EmailService.sendMail(email as string);
	res.status(200).json(response);
};
