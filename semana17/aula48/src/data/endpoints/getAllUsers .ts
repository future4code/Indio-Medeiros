import selectAllUsers from "../queryEndPoint/selectAllUsers";
import { Request, Response } from "express";
import selectAllLimit from "../queryEndPoint/selectAllLimit";
import filterUserName from "../queryEndPoint/filterUserName";
import filterUserType from "../queryEndPoint/filterUserType";
import orderTableNameType from "../queryEndPoint/orderTableNameType";

// pgear todos os usuários
export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //pesquisa por página
    if (req.query.page) {
      let page = Number(req.query.page);
      const users = await selectAllLimit(page * 5);
      res.status(200).send(users);

      if (!users.length) {
        res.statusCode = 404;
        throw new Error("page not found");
      }
    }
    //pesquisa por nome
    if (req.query.name) {
      const name = req.query.name as string;
      const users = await filterUserName(name);

      if (!name.length) {
        res.statusCode = 404;
        throw new Error("No users found");
      }
      res.status(200).send(users);
    }

    //pesquisa por tipo
    if (req.query.type) {
      const type = req.query.type as string;

      if (type === "CX" || type === "Teacher" || type === "Operations") {
        const users = await filterUserType(type);
        console.log(users);
        if (!type.length) {
          res.statusCode = 404;
          throw new Error("No users found");
        }
        res.status(200).send(users);
      } else {
        res.statusCode = 404;
        throw new Error(
          "parametro não aceito. use: 'CX', 'Teacher' ou 'Operations'"
        );
      }
    }

    //ordenação
    if (req.query.orderType && req.query.orderBy) {
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
    }

    const users = await selectAllLimit(0);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No recipes found");
    }

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
