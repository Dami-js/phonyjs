import express, { Request, Response } from 'express';
import { Controller } from '../../bin/interfaces/controller.interface';

export class IndexController implements Controller {
  public path = '/';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.home);
  }

  private home(req: Request, res: Response) {
    res.render('index', { title: 'PhonyJs' });
  }
}
