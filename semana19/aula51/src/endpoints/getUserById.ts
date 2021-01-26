import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import {getData} from "../services/getData"

export default async function getUserById (req: Request, res: Response): Promise<void> {
    try {
      const token = req.headers.authorization as string;
  
      const authenticationData = getData(token);
      console.log("getusarbyid", authenticationData)


      if (authenticationData.role !== "normal") {
        throw new Error("somente usuário 'normal' pode acessar essa funcionalidade");
      }

      const user = await selectUserById(authenticationData.id);
      console.log("id", user)

      res.status(200).send({
        id: user.id,
        email: user.email,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };