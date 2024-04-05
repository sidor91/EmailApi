import nodemailer from 'nodemailer';
require('dotenv').config();

const host = process.env.EMAIL_HOST as string;
const port = Number(process.env.EMAIL_PORT);
const user = process.env.EMAIL_USER as string;
const pass = process.env.EMAIL_PASSWORD as string;

const config = {
  host,
  port,
  secure: true,
  auth: {
    user,
    pass,
  },
};

const emailTransporter = nodemailer.createTransport(config);

export default emailTransporter;
