import { compare } from "../services/generateHash";
import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUser";
import { generateToken } from "../services/generateToken";
import { userData } from "../type/userData";



export default async function getUserByEmail(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const userBody: userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
      // Item b. Validação do email
    if (!userBody.email || userBody.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }

      const user  = await selectUserByEmail ( userBody.email);

      const compareResult: boolean = await compare(
        userBody.password,
        user.password
     )
        

     if (!compareResult) {
        throw new Error("Incorrect Password.");
     }

      if (userBody.password !== user.password) {
        throw new Error("Invalid password");
      }
      const token = generateToken({
        id: user.id,
      });
  
  
      res.status(200).send({ token: token });
    } catch (error) {
      res.status(400).send(error.sqlMessage || error.message);
    }
  }