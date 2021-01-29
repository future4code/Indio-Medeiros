import { Response } from "express";

export function checkPasswordFormat(password: string, res: Response): void {
  if (password.length < 6) {
    res.statusCode = 422;
    throw new Error("password must contain at least 6 characters");
  }
}
