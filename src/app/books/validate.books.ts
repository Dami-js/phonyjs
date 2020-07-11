import { ObjectSchema } from "@hapi/joi";
import { Books } from "./interfaces/books.interface";
import { ValidateParamExeception } from "../../bin/exceptions/ValidateParamExeception";

export class ValidateBooks {
  constructor(private schema: ObjectSchema) {}

  validate(body: Books) {
    const { value, error } = this.schema.validate(body);
    if (error) {
      throw new ValidateParamExeception(error.message);
    }
    return value;
  }
}
