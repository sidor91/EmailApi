import http from 'http';
import app from './app';
require('dotenv').config();
import { startServerLogger } from './utils/startServerLogger';

const port = process.env.PORT as string;

const server = http.createServer(app);

server.listen(port, () => {
  startServerLogger(port);
});