require('dotenv').config();
import path from 'path';
import fs from 'fs';
import { generateEmailLayout } from '../../../utils/generateEmailLayout';
import * as t from '../types';

const senderAddress = process.env.EMAIL_USER as string;

export const generateAdaEmailPayload = ({
  data,
  email,
}: t.GenerateEmailPayload) => {
  const { statistics } = data;

  const pdfFilePath = path.join('assets', 'Website Accessibility Guide.pdf');
  const attachment = {
    filename: 'Website Accessibility Guide.pdf',
    content: fs.readFileSync(pdfFilePath),
    contentType: 'application/pdf',
  };

  return {
    from: senderAddress,
    to: email,
    subject: `Web Accessibility Test Results for ${statistics.pageurl}`,
    text: 'Hello world?',
    html: generateEmailLayout(data),
    attachments: [attachment],
  };
};
