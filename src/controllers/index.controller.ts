import { Request, Response } from 'express';
// import { Controller } from '../../bin/interfaces/controller.interface';

export class IndexController {
  constructor() {}

  public home(req: Request, res: Response) {
    res.render('index', { title: 'PhonyJs' });
  }
}
