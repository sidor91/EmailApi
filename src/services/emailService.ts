require('dotenv').config();
import nodemailer from 'nodemailer';
import * as configs from './configs';
import * as t from './types';
import { generateEmailLayout } from '../utils/generateEmailLayout';

const waveResponseExample = {
  status: { success: true, httpstatuscode: 200 },
  statistics: {
    pagetitle: 'Ecomitize: We Grow eCommerce Websites and Businesses',
    pageurl: 'https://ecomitize.com/',
    time: 4.32,
    creditsremaining: 95,
    allitemcount: 195,
    totalelements: 674,
    waveurl: 'http://wave.webaim.org/report?url=https://ecomitize.com/',
  },
  categories: {
    error: { description: 'Errors', count: 14 },
    contrast: { description: 'Contrast Errors', count: 20 },
    alert: { description: 'Alerts', count: 7 },
    feature: { description: 'Features', count: 42 },
    structure: { description: 'Structural Elements', count: 51 },
    aria: { description: 'ARIA', count: 61 },
  },
};

class EmailService {
  private static config = configs.emailTransporter;
  private static senderAddress = process.env.EMAIL_USER as string;

  constructor() {}

  static async sendMail({ data, email }: t.EmailServiceArgs) {
    const emailTransporter = nodemailer.createTransport(this.config);
    const { statistics } = data;
    return await emailTransporter.sendMail({
      from: this.senderAddress,
      to: email,
      subject: `Web Accessibility Test Results for ${statistics.pageurl}`,
      text: 'Hello world?',
      html: generateEmailLayout(data),
    });
  }
}

export default EmailService;
