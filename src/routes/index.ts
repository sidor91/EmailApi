import express from 'express';
import controllers from '../controllers';

const router = express.Router();

router.post('/check-ada-compilance', controllers.adaCompilance);

export default router;
