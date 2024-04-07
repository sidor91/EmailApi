require('dotenv').config();
import path from 'path';
import fs from 'fs';
import utils from '../../../utils';
import * as t from '../types';

const senderAddress = process.env.EMAIL_USER as string;
const cc = process.env.EMAIL_CC as string;
const bcc = process.env.EMAIL_BCC as string;
const replyTo = process.env.EMAIL_REPLY_TO as string;

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
    cc,
    bcc,
    replyTo,
    subject: `Web Accessibility Test Results for ${statistics.pageurl}`,
    text: 'Hello world?',
    html: utils.generateEmailLayout(data),
    attachments: [attachment],
  };
};
