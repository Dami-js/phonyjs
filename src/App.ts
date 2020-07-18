import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import { Route } from './core/interfaces/controller.interface';
import { errorMiddleware } from './core/middleware/error.middleware';
import { Database } from './core/interfaces/database.interface';
import exphbs from 'express-handlebars';
import path from 'path';

class App {
  public app: Application;
  constructor(routes: Route[], database: Database) {
    this.app = express();
    this.connectToTheDatabase(database);
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`App listening on the port ${port}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(compression());
    this.app.use(cors()); // CORS middleware
    this.app.use(helmet());
    this.app.use(morgan('dev'));
    // Static folders
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.set('views', path.join(__dirname, '/views'));

    // Handlebars
    this.app.engine(
      '.hbs',
      exphbs({
        defaultLayout: 'main',
        extname: '.hbs',
        partialsDir: __dirname + '/views/partials/',
      }),
    );
    this.app.set('view engine', '.hbs');

    // Body parser
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeRoutes(routes: Route[]) {
    routes.forEach((route) => {
      this.app.use(route.router);
    });
  }

  private connectToTheDatabase(database: Database) {
    database;
    // databases.forEach((database) => {
    //   database();
    // });
  }
}

export default App;
