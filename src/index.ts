import { PORT } from './core/config';
import App from './App';
import { IndexRouter } from './routes/index.route';
import { Database } from './core/interfaces/database.interface';
import { BooksRouter } from './routes/books.route';
import { DB } from './core/database';

const routes = [new IndexRouter(), new BooksRouter()];

const database: Database = new DB();

const app = new App(routes, database);

// Start the server
const port = Number(PORT);
app.listen(port);
