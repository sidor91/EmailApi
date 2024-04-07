require('dotenv').config();
import nodemailer from 'nodemailer';
import * as configs from './configs';
import * as t from './types.ts'

class EmailService {
  private static emailTransporter = nodemailer.createTransport(
      configs.emailTransporter
  );
  
  constructor () {}

  static async sendMail(payload: t.EmailPayload) {
    try {
      return await this.emailTransporter.sendMail(payload);
    } catch (error: any) {
      throw new Error(`There was an error sending the email: ${error.message}`);
    }
  }
}

export default EmailService;
