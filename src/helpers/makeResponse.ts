import { StatusCode } from '@config/constants';

export function makeResponse(statusCode: any, data: any, message?: string) {
  let error = false;
  let defualtMessage = 'Operation successful';
  if (statusCode !== StatusCode.OK && statusCode !== StatusCode.CREATED) {
    error = true;
    defualtMessage = 'Unable to process request';
  }

  return Object.freeze({
    success: error ? false : true,
    message: message ? message : defualtMessage,
    data: error ? [] : data,
  });
}
