import { Books } from './interfaces/books.interface';
import { CreateBookDto } from './dto/create-book.dto';

export class BooksService {
  books: Books[];
  constructor() {
    this.books = [
      {
        name: 'Harry potter and the socerrer stone',
        author: 'J. Rowlings',
        published: false,
      },
      {
        name: 'Harry potter and the chambers of secret',
        author: 'J. Rowlings',
        published: false,
      },
    ];
  }

  public async find(): Promise<Books[]> {
    return this.books;
  }

  public async create(body: CreateBookDto): Promise<Books[]> {
    this.books.push(body);
    return this.books;
  }
}
