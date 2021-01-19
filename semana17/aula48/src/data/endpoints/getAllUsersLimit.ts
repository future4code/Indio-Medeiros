import { Request, Response } from "express";
import selectAllLimit from "../queryEndPoint/selectAllLimit";

// pgear todos os usuários limitando a 5
export const getAllUsersLimit = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let page = Number(req.params.page);
    const users = await selectAllLimit(page * 5);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("page not found");
    }

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
