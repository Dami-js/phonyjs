import { PORT } from '@config/constants';
import App from '@config/App';
import { IndexRoute } from '@routes/index';
import { BooksRoute } from '@routes/books';
import { mongodb } from '@database/mongodb';
import { IDatabase } from '@interfaces/database.interface';

const routes = [new IndexRoute(), new BooksRoute()];

const databases: IDatabase = { mongodb };

const app = new App(routes, databases);

// Start the server
const port = Number(PORT);
app.listen(port);
