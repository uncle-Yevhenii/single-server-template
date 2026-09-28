import pino, { type LoggerOptions } from 'pino';

const isProduction = process.env['NODE_ENV'] === 'production';

const options: LoggerOptions = isProduction
  ? { level: 'info' }
  : { level: 'debug', transport: { target: 'pino-pretty' } };

export const logger = pino(options);
