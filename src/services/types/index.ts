import { AxiosResponse } from "axios";

export type AdaCompilanceRequestArgs = {
  email: string;
  url: string;
}

export type EmailServiceArgs = {
  data: WaveResponse;
  email: string;
};

export type WaveResponse = {
  status: { success: boolean; httpstatuscode: number };
  statistics: {
    pagetitle: string;
    pageurl: string;
    time: number;
    creditsremaining: number;
    allitemcount: number;
    totalelements: number;
    waveurl: string;
  };
  categories: {
    error: { description: string; count: number };
    contrast: { description: string; count: number };
    alert: { description: string; count: number };
    feature: { description: string; count: number };
    structure: { description: string; count: number };
    aria: { description: string; count: number };
  };
};