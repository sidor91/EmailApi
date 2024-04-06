import os from 'os';

const isLocal = () => os.hostname().split('.').pop() === 'local';

export const setHost = () =>
  isLocal() ? `http://localhost` : `http://${os.hostname()}`;

export const startServerLogger = async (port: string) => {
  console.log('');
  console.log(`server ${setHost()}:${port} is running`);
  console.log('');
};
