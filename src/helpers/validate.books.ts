import { ObjectSchema } from '@hapi/joi';
import { Books } from '../utils/interfaces/books.interface';
import { IValidator } from '../utils/interfaces/validator.interface';

export function validateBooks(
  schema: ObjectSchema,
  body: Books,
): Readonly<IValidator> {
  const { value, error } = schema.validate(body);
  if (error) {
    return Object.freeze({
      error: true,
      message: error.message,
    });
  }
  return Object.freeze({
    value,
  });
}
