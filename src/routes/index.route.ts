import express from 'express';
import { IndexController } from '../controllers/index.controller';

export class IndexRouter extends IndexController {
  public path = '/';
  public router = express.Router();

  constructor() {
    super();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.home);
  }
}
