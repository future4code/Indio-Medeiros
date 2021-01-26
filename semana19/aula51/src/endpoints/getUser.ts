import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { getData } from "../services/getData";

export default async function getUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;

    const tokenData = getData(token);
    const user = await selectUserById(tokenData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(400).send(error.sqlMessage || error.message);
  }
}
