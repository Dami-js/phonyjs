import fs from 'fs';
import { LOG_PATH } from '@config/constants';

export function makeLogs(filename: string, log: any) {
  try {
    fs.appendFileSync(`${LOG_PATH}/${filename}.log`, `${log} \n \n`);
    if (process.env.NODE_ENV == 'development') {
      console.log(log);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export function handleError(e: any) {
  makeLogs('errors', e.stack);
  return { error: true, message: e.message };
}
