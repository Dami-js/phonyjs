import { Response } from 'express';
import { StatusCode } from './constants';

export const BadRequestError = (res: Response, error: any): Response => {
  return res.status(StatusCode.BAD_REQUEST).json(error);
};
