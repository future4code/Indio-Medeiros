import { Request, Response } from "express";
import orderTableNameType from "../queryEndPoint/orderTableNameType";

// Ordenar usuário por nome ou typo
export const orderTypeName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const orderType = req.query.orderType as string;
    const orderBy = req.query.orderBy as string;

    if (!orderBy) {
      res.statusCode = 404;
      throw new Error("No users/types found. use 'name' or 'type'");
    }

    if (orderType === "ASC" || orderType === "DESC") {
      const users = await orderTableNameType(orderBy, orderType);

      res.status(200).send(users);
    } else {
      res.statusCode = 404;
      throw new Error("parametro não aceito. use: 'ASC', 'DESC'");
    }
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
