import { logger } from './lib/logger';

export function template(v: number) {
  logger.debug('template function');
  return v;
}

logger.info(template(1));
