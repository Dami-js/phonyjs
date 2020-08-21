import fs from 'fs';
import { Request, Response, NextFunction } from 'express';
import { LOG_PATH } from '@config/constants';

export const errorLogger = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err) {
    fs.appendFileSync(`${LOG_PATH}/errors.log`, `${err.stack} \n \n`);
    if (process.env.NODE_ENV == 'development') {
      console.log(err.stack);
    }
  }
  next();
};
