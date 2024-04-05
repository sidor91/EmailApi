import express from 'express';
import controllers from '../controllers';
import * as middlewares from '../middlewares'

const router = express.Router();

router.post('/check-ada-compilance', middlewares.validateEmail, middlewares.validateURL, controllers.adaCompilance);

export default router;
