import { Request, Response } from "express";
import { getData } from "../services/getData";

export default async function deleteUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;
    const authorization = getData(token);

    if(authorization.role !== "admin"){
        throw new Error ("usuário não é administador.")
    }

    

  } catch (error) {
    res.send(error.sqlMessage || error.message);
  }
}
