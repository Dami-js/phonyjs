import { Books } from "./interfaces/books.interface";
import { CreateBookDto } from "./dto/create-book.dto";

export class BooksService {
  books: Books[];
  constructor() {
    this.books = [];
  }

  public async find(): Promise<Books[]> {
    return this.books;
  }

  public async create(body: CreateBookDto): Promise<Books[]> {
    this.books.push(body);
    return this.books;
  }
}
