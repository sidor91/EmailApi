import express from 'express';
import * as middlewares from '../middlewares'
import { controllerWrapper } from '../decorators';
import { sendMail } from '../controllers/sendMail';

const router = express.Router();

router.get(
  '/send-mail',
  middlewares.validateEmail,
  controllerWrapper(sendMail)
);

export default router;
