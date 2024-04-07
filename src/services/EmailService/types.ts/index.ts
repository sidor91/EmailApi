export type EmailPayload = {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
  attachments: {
    filename: string;
    content: Buffer;
    contentType: string;
  }[];
};
