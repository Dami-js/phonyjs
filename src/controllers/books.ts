import { Request, Response } from 'express';
import { BooksService } from '@services/books.service';
import { StatusCode } from '@config/constants';
import { makeResponse } from '@helpers/makeResponse';
import { handleError } from '@helpers/makeLogs';

const bookService = new BooksService();
export class BooksController {
  constructor() {}

  public async getBooks(req: Request, res: Response): Promise<any> {
    try {
      const books = await bookService.find();

      const statusCode = books.error ? StatusCode.BAD_REQUEST : StatusCode.OK;
      const message = books.error
        ? books.message
        : 'Successfully fetched all books';
      return res
        .status(statusCode)
        .json(makeResponse(statusCode, books, message));
    } catch (error) {
      return handleError(error);
    }
  }

  public async createBook(req: Request, res: Response): Promise<any> {
    try {
      const result = await bookService.create(req.body);
      const statusCode = result.error
        ? StatusCode.BAD_REQUEST
        : StatusCode.CREATED;
      return res.status(statusCode).json(result);
    } catch (error) {
      return handleError(error);
    }
  }
}
