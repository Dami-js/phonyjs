import { PORT } from './bin/config';
import App from './App';
import BooksController from './app/books/books.controller';
import { useMongodb } from './bin/database/mongodb';
import { IndexController } from './app/index/index.controller';

const controllers = [new BooksController(), new IndexController()];

const databases = [useMongodb];

const app = new App(controllers, databases);

// Start the server
const port = Number(PORT);
app.listen(port);
