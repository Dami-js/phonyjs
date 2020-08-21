import { CreateBookDto } from '@dto/create-book.dto';
import { handleError } from '@helpers/makeLogs';
import { pool } from '@database/postgresSql';

export class BooksService {
  constructor() {}

  public async find(): Promise<any> {
    const queryStream = 'SELECT * FROM books ORDER BY id ASC';
    try {
      const res = await pool.query(queryStream);
      return res.rows;
    } catch (e) {
      return handleError(e);
    }
  }

  public async create(body: CreateBookDto): Promise<any> {
    const queryStream =
      'INSERT INTO books(name, author, is_published) VALUES($1, $2, $3) RETURNING *';
    const values = [body.name, body.author, body.published];
    try {
      const res = await pool.query(queryStream, values);
      return res.rows[0];
    } catch (e) {
      return handleError(e);
    }
  }
}
