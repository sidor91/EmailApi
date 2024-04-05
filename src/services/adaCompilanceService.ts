import axios from 'axios';
require('dotenv').config();
import EmailService from './emailService';
import * as t from './types';

class AdaCompilanceService {
  private static waveApiKey = process.env.WAVE_API_KEY as string;
  private static waveApiBaseUrl = process.env.WAVE_API_BASE_URL as string;

  constructor() {}

  static async handleRequest({
    email,
    url,
  }: t.AdaCompilanceRequestArgs) {
    try {
      const { data }: { data: t.WaveResponse } = await axios.get(
        `${this.waveApiBaseUrl}?key=${this.waveApiKey}&url=${url}`
      );
      return await EmailService.sendMail({ data, email });
    } catch (error: any) {
       throw error;
    }
  }
}

export default AdaCompilanceService;