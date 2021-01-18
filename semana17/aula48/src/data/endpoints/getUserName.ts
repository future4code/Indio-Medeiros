import { Request, Response } from "express";
import filterUserName from "../queryEndPoint/filterUserName";

// filtrar o usuários por nome
export const getUserName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name = req.query.name as string;
    const users = await filterUserName(name);
    
    if (!name.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
