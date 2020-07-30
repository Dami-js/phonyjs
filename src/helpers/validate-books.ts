import { ObjectSchema } from '@hapi/joi';
import { IBooks } from '@interfaces/books.interface';
import { IValidator } from '@interfaces/validator.interface';
import * as Joi from '@hapi/joi';

export const createBookSchema: ObjectSchema = Joi.object({
  name: Joi.string().required(),
  author: Joi.string().required(),
  published: Joi.boolean().required(),
});

export function validateBooks(body: IBooks): Readonly<IValidator> {
  const { value, error } = createBookSchema.validate(body);
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
