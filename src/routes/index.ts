import express from 'express';
import controllers from '../controllers';
import * as middlewares from '../middlewares'
import { controllerWrapper } from '../decorators';

const router = express.Router();

router.post(
  '/check-ada-compilance',
  middlewares.validateEmail,
  middlewares.validateURL,
  controllerWrapper(controllers.adaCompilance)
);

export default router;
