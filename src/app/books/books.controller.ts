import express, { Request, Response, Application } from "express";
import { Controller } from "../../bin/interfaces/controller.interface";
import { BooksService } from "./books.service";
import { StatusCode } from "../../bin/utils/constants";
import { BadRequestError } from "../../bin/utils/errors";
import { ValidateBooks } from "./validate.books";
import { createBookSchema } from "./books.schema";

const booksService = new BooksService();
const vaidateBook = new ValidateBooks(createBookSchema);

class BooksController implements Controller {
  public path = "/books";
  public app: Application;
  public router = express.Router();

  constructor() {
    this.app = express();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getBooks);
    this.router.post(this.path, this.createBook);
  }

  private async getBooks(req: Request, res: Response): Promise<Response> {
    try {
      const books = await booksService.find();
      return res.status(StatusCode.OK).json(books);
    } catch (error) {
      return BadRequestError(res, error);
    }
  }

  private async createBook(req: Request, res: Response): Promise<Response> {
    try {
      const value = vaidateBook.validate(req.body);

      const allBooks = await booksService.create(value);
      return res.status(StatusCode.CREATED).json(allBooks);
    } catch (error) {
      return BadRequestError(res, error);
    }
  }
}

export default BooksController;
