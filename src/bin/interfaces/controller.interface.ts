import { Router, Application } from "express";

export interface Controller {
  path: string;
  router: Router;
}
