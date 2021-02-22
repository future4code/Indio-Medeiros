import { Response } from "express";

export default function checkEmailFormat(email: string, res: Response): void {
  if (email.indexOf("@") === -1) {
    res.statusCode = 422;
    throw new Error("check the format of your email, the '@' was not found");
  }
}
