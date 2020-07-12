import { ObjectSchema } from '@hapi/joi';
import * as Joi from '@hapi/joi';

export const createBookSchema: ObjectSchema = Joi.object({
  name: Joi.string().required(),
  author: Joi.string().required(),
  published: Joi.boolean().required(),
});
