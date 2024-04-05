import axios from 'axios';
require('dotenv').config();
import EmailService from './emailService';
import * as t from './types';

class AdaCompilanceService {
  private static waveApiKey = process.env.WAVE_API_KEY as string;
  private static waveApiBaseUrl = process.env.WAVE_API_BASE_URL as string;

  constructor() {}

  private static async waveApiService({
    email,
    url,
  }: t.AdaCompilanceRequestArgs) {
    const { data }: {data: t.WaveResponse} = await axios.get(
      `${this.waveApiBaseUrl}?key=${this.waveApiKey}&url=${url}`
    );
    return await EmailService.sendMail({ data, email });
  }

  static async handleRequest({ email, url }: t.AdaCompilanceRequestArgs) {
    return await this.waveApiService({ email, url });
  }
}

export default AdaCompilanceService;