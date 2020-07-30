import { HttpException } from '@exceptions/HttpExeception';

export class ValidateParamExeception extends HttpException {
  constructor(message: string) {
    super(404, message);
  }
}
