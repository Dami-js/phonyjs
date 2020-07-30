import express from 'express';
import { BooksController } from '@controllers/books';

export class BooksRoute extends BooksController {
  public path = '/books';
  public router = express.Router();

  constructor() {
    super();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getBooks);
    this.router.post(this.path, this.createBook);
  }
}
