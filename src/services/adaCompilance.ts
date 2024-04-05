import axios from "axios";
require('dotenv').config();
import { AdaCompilanceRequestArgs, EmailServiceArgs } from './types';

export class AdaCompilance {
  private static waveApiKey = process.env.WAVE_API_KEY as string;
  private static waveApiBaseUrl = process.env.WAVE_API_BASE_URL as string;

  constructor() {}

  private static async waveApiService({
    email,
    url,
  }: AdaCompilanceRequestArgs) {
    const { data } = await axios.get(
      `${this.waveApiBaseUrl}?key=${this.waveApiKey}&url=${url}`
    );
    return await this.emailService({ data, email });
  }

  private static async emailService({ data, email }: EmailServiceArgs) {
    return `I should send ${data} to email ${email}`
  }

  static async handleRequest({ email, url }: AdaCompilanceRequestArgs) {
    return await this.waveApiService({ email, url });
  }
}


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