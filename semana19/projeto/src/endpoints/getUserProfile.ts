import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { getTokenData } from "../services/authenticator";
import { checkDataExisting } from "../services/checkDataExisting";

export async function getUserProfile(
  req: Request,
  res: Response
  
): Promise<void> {
  res.statusCode = 400;
  try {
    const { authorization } = req.headers;
    checkDataExisting(authorization as string, "authorization", res);

    const tokenChecked = getTokenData(authorization!);
    const profile = await selectUserById(tokenChecked);

    res.status(200).send(profile);
  } catch (error) {
    res.send(error.sqlMessage || error.message);
  }
}
