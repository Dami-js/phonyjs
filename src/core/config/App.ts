import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import { IRoute } from '@interfaces/routes.interface';
import exphbs from 'express-handlebars';
import path from 'path';
import fs from 'fs';
import { errorLogger } from '@middlewares/errorLogger.middleware';
import { LOG_PATH, SRC_PATH } from './constants';
import { IDatabase } from '@interfaces/database.interface';

class App {
  public app: Application;
  constructor(routes: IRoute[], databases: IDatabase) {
    this.app = express();
    // this.connectToTheDatabase(databases);
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
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
    this.app.use(errorLogger);
    this.app.use(
      morgan('combined', {
        stream: fs.createWriteStream(`${LOG_PATH}/app.log`, { flags: 'a' }),
      }),
    );
    // Static folders
    this.app.use(express.static(`${SRC_PATH}/public`));
    this.app.set('views', `${SRC_PATH}/views`);

    // Handlebars
    this.app.engine(
      '.hbs',
      exphbs({
        defaultLayout: 'main',
        extname: '.hbs',
        partialsDir: `${SRC_PATH}/views/partials/`,
      }),
    );
    this.app.set('view engine', '.hbs');

    // Body parser
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: IRoute[]) {
    routes.forEach((route) => {
      this.app.use(route.router);
    });
  }

  private async connectToTheDatabase(databases: IDatabase) {
    // Initialize databases
    databases.mongodb();
  }
}

export default App;
