import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';

const app = express();

app.use(cors(), express.json(), morgan('dev'));

app.get('/', (_: Request, res: Response) => {
  res.send(true);
});
app.use('/api', (_, __, next) => next(0), routes);
app.use('/assets', express.static('assets'));

app.use((_, res) => res.status(404).json({ error: `Not found` }));
app.use((e: Error, _: Request, res: Response) => {
  const msg = e.message || 'Internal Server Error';
  return res.status(500).json({ error: msg });
});

export default app;