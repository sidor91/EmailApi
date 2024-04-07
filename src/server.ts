import http from 'http';
import app from './app';
require('dotenv').config();
import utils from './utils';

const port = process.env.PORT as string;

const server = http.createServer(app);

server.listen(port, () => {
  utils.startServerLogger(port);
});