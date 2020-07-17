import { IValidator } from '../utils/interfaces/validator.interface';

export async function makeBuildBooks(config: any): Promise<IValidator> {
  const { schema, validator, value } = config;

  try {
    const validation = validator(schema, value);
    if (validation.error) {
      return Object.freeze({
        error: true,
        message: validation.message,
      });
    }

    return Object.freeze({
      value,
    });
  } catch (error) {
    console.log(error);
    return Object.freeze({
      error: true,
      message: error.message,
    });
  }
}
