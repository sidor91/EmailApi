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
    const emailTransporter = nodemailer.createTransport(this.config);
    const { statistics } = data;
    
    emailTransporter.sendMail({
      from: this.senderAddress,
      to: email,
      subject: `Web Accessibility Test Results for ${statistics.pageurl}`,
      text: 'Hello world?',
      html: generateEmailLayout(data),
      attachments: [attachment],
    });
  }
}

export default EmailService;
