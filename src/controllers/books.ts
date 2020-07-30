import { Request, Response } from 'express';
import { BooksService } from '@services/books.service';
import { StatusCode } from '@config/constants';
import { BadRequestError } from '@config/errors';

const bookService = new BooksService();
export class BooksController {
  constructor() {}

  public async getBooks(req: Request, res: Response): Promise<Response> {
    try {
      const books = await bookService.find();
      return res.status(StatusCode.OK).json(books);
    } catch (error) {
      console.log(error);

      return BadRequestError(res, error);
    }
  }

  public async createBook(req: Request, res: Response): Promise<Response> {
    try {
      const result = await bookService.create(req.body);
      const statusCode = result.error
        ? StatusCode.BAD_REQUEST
        : StatusCode.CREATED;
      return res.status(statusCode).json(result);
    } catch (error) {
      console.log(error);
      return BadRequestError(res, error);
    }
  }
}
