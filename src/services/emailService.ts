require('dotenv').config();
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs'
import * as configs from './configs';
import * as t from './types';
import { generateEmailLayout } from '../utils/generateEmailLayout';

const pdfFilePath = path.join('assets', 'Website Accessibility Guide.pdf');
const attachment = {
  filename: 'Website Accessibility Guide.pdf',
  content: fs.readFileSync(pdfFilePath),
  contentType: 'application/pdf',
};

class EmailService {
  private static config = configs.emailTransporter;
  private static senderAddress = process.env.EMAIL_USER as string;

  constructor() {}

  static async sendMail({ data, email }: t.EmailServiceArgs) {
    try {
      const emailTransporter = nodemailer.createTransport(this.config);
      const { statistics } = data;

      const response = await emailTransporter.sendMail({
        from: this.senderAddress,
        to: email,
        subject: `Web Accessibility Test Results for ${statistics.pageurl}`,
        text: 'Hello world?',
        html: generateEmailLayout(data),
        attachments: [attachment],
      });
      if (response.response?.startsWith('250 OK')) {
        return `The report for ${statistics.pageurl} was successfully sent to ${email}`;
      } 
    } catch (error: any) {
      throw new Error('There was an error sending the email');
    }
  }
}

export default EmailService;
