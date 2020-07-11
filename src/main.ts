import "dotenv/config";
import App from "./App";
import BooksController from "./app/books/books.controller";
import { useMongodb } from "./bin/database/mongodb";

const controllers = [new BooksController()];

const databases = [useMongodb];

const app = new App(controllers, databases);

app.listen();
