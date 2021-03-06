import { Request, Response } from "express";
import { insertUser } from "../data/insertUser ";
import generateId from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { userTokenType } from "../type/userTokenType";
import { userData } from "../type/userData";
import { hash } from "../services/generateHash";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const user: userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    if (!user.email) {
      res.statusCode = 422;
      throw new Error("verifique a propriedade *email*");
    }
    if (!user.email.includes("@")) {
      res.statusCode = 422;
      throw new Error(
        "verifique a propriedade *email* (ausência do caracter '@')"
      );
    }
    if (user.password.length < 6 || !user.password) {
      res.statusCode = 422;
      throw new Error(
        "verifique a propriedade *password* (minimo de 6 caracteres)"
      );
    }

    const id = generateId();

    const cryptedPassword = await hash(user.password);

    await insertUser(id, user.email, cryptedPassword);

    const idToken: userTokenType = { 
      id: id, 
      role: user.role,
     };

    const token = generateToken(idToken);

    res.status(200).send({ token: token });
  } catch (error) {
    res.status(400).send(error.sqlMessage || error.message);
  }
}
