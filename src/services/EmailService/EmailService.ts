require("dotenv").config();
import nodemailer from "nodemailer";
import * as configs from "./configs";
import path from "path";
import fs from 'fs';

const senderAddress = process.env.EMAIL_USER as string;
const cc = (process.env.EMAIL_CC as string) || "";
const bcc = (process.env.EMAIL_BCC as string) || "";
const replyTo = (process.env.EMAIL_REPLY_TO as string) || "";

class EmailService {
	private static emailTransporter = nodemailer.createTransport(configs.emailTransporter);

	private static generateEmailPayload(email: string) {
		const pdfFilePath = path.join("assets", "Serhii_Sydorenko_Backend_Developer.pdf");
		const attachment = {
			filename: "Serhii_Sydorenko_Backend_Developer.pdf",
			content: fs.readFileSync(pdfFilePath),
			contentType: "application/pdf",
		};

		return {
			from: senderAddress,
			to: email,
			cc,
			bcc,
			replyTo,
			subject: `Serhii Sydorenko CV`,
			text: "Hello world =)",
			attachments: [attachment],
		};
	}

	static async sendMail(email: string) {
		try {
			const payload = this.generateEmailPayload(email);
			const { response } = await this.emailTransporter.sendMail(payload);
			if (response.startsWith("250 OK")) {
				return {message: `The email with CV was successfully sent to ${email}`};
			}
		} catch (error: any) {
			throw new Error(`There was an error sending the email: ${error.message}`);
		}
	}
}

export default EmailService;
