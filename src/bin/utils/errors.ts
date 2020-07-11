import express, { Response, Request, Errback } from "express";
import { StatusCode } from "./constants";

export const BadRequestError = (res: Response, error: any) => {
  return res.status(StatusCode.BAD_REQUEST).json(error);
};
