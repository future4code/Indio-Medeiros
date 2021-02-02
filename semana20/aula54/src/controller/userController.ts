import { Request, Response } from "express";
import {
    businessDeleteUser,
  businessGetAllUsers,
  businessLogin,
  businessSignup,
} from "../business/userBusiness";

export const signup = async (req: Request, res: Response): Promise<void> => {
  res.statusCode = 404;
  try {
    const { name, password, email, role } = req.body;

    const token = await businessSignup(name, password, email, role, res);

    res.status(200).send({ token: token });
  } catch (error) {
    res.send(error.sqlMessage || error.message);
  }
};

export async function login(req: Request, res: Response): Promise<void> {
  res.statusCode = 400;
  try {
    const { email, password } = req.body;
    const token = await businessLogin(email, password, res);

    res.status(200).send({ token: token });
  } catch (error) {
    res.send(error.sqlMessage || error.message);
  }
}

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
    res.statusCode = 400
  try {
      
    const token = req.headers.authorization as string;
    const users = await businessGetAllUsers(token);

    res.status(200).send(users);
  } catch (error) {
    res.send(error.sqlMessage || error.message);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
    try {
        res.statusCode = 400
        const token = req.headers.authorization as string;
        const idToBeDeleted = req.params.id  as string
        await businessDeleteUser(token, idToBeDeleted, res );
        
        res.status(201).send({ message: "Usuário apagado com sucesso" })
    } catch (error) {
        res.send(error.sqlMessage || error.message)
    }
};
