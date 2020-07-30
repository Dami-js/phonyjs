import { PORT } from '@config/constants';
import App from '@config/App';
import { IndexRoute } from '@routes/index';
import { IDatabase } from '@interfaces/database.interface';
import { BooksRoute } from '@routes/books';
import { DB } from '@database/index';

const routes = [new IndexRoute(), new BooksRoute()];

const database: IDatabase = new DB();

const app = new App(routes, database);

// Start the server
const port = Number(PORT);
app.listen(port);
