import { Response } from "express";


export function checkUserPropety(
  requestPropety: string,
  propetyName: string,
  res: Response
) {
  if (!requestPropety || requestPropety === undefined) {
    res.statusCode = 406;
    throw new Error(`The "${propetyName}" was not filled in correctly.`);
  } 

}
