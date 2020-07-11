import { HttpException } from "./HttpExeception";

export class ValidateParamExeception extends HttpException {
  constructor(message: string) {
    super(404, message);
  }
}
