import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import { Controller } from "./bin/interfaces/controller.interface";
import { errorMiddleware } from "./bin/middleware/error.middleware";

class App {
  public app: Application;
  constructor(controllers: Controller[], databases: Function[]) {
    this.app = express();
    this.connectToTheDatabase(databases);
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      console.log(`App listening on the port ${port}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(compression());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan("combined"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach(controller => {
      this.app.use(controller.router);
    });
  }

  private connectToTheDatabase(databases: Function[]) {
    databases.forEach(database => {
      database();
    });
  }
}

export default App;
