import { Response } from "express";

export default function checkDataExisting(
  requestPropety: string,
  propetyName: string,
  res: Response
): void {
  if (!requestPropety || requestPropety === undefined) {
    res.statusCode = 406;
    throw new Error(`The "${propetyName}" was not filled in correctly.`);
  }
}
