import { AxiosResponse } from "axios";

export type AdaCompilanceRequestArgs = {
  email: string;
  url: string;
}

export type EmailServiceArgs = {
  data: AxiosResponse;
  email: string;
}