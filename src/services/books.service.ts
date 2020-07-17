import { CreateBookDto } from '../utils/dto/create-book.dto';
import { DB } from '../core/database';
import { makeBuildBooks } from '../logic/books.logic';
import { createBookSchema } from '../utils/schemas/books.schema';
import { validateBooks } from '../helpers/validate.books';

const lowdb = new DB().lowdb;
// const lowdb = db.lowdb;

export class BooksService {
  constructor() {}

  public async find(): Promise<any> {
    const books = lowdb.get('books').value();
    return books;
  }

  public async create(body: CreateBookDto): Promise<any> {
    const makeBookConfig = {
      schema: createBookSchema,
      validator: validateBooks,
      value: body,
    };
    try {
      const makeBook = await makeBuildBooks(makeBookConfig);
      console.log(makeBook);
      if (makeBook.error) {
        return makeBook;
      }
      lowdb.get('books').push(makeBook.value).write();
      const books = lowdb.get('books').value();
      return books;
    } catch (error) {
      console.log(error);
    }
  }
}
