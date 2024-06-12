require('dotenv').config();

const host = process.env.EMAIL_HOST as string;
const port = Number(process.env.EMAIL_PORT);
const user = process.env.EMAIL_USER as string;
const pass = process.env.EMAIL_PASSWORD as string;

export const emailTransporter = {
  host: host,
  port: port,
  secure: true,
  auth: {
    user: user,
    pass: pass,
  },
};
