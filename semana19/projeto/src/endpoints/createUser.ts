import { Request, Response } from "express";
import { userData } from "../types/userData";
import checkDataExisting from "../services/checkDataExisting";
import insertUserInTable from "../data/insertUserInTable";
import checkEmailFormat from "../services/checkEmailFormat";
import checkPasswordFormat from "../services/checkPasswordFormat";
import { hashGenerator } from "../services/hashGenerator";
import { generateToken } from "../services/authenticator";
import { idGenerator } from "../services/idGenerate";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  res.statusCode = 400;
  try {
    const { name, password, email } = req.body;

    checkDataExisting(name, "name", res);
    checkDataExisting(password, "name", res);
    checkDataExisting(email, "email", res);
    checkEmailFormat(email, res);
    checkPasswordFormat(password, res);

    const hash: string = hashGenerator(password);

    const user: userData = {
      id: idGenerator(),
      name: name,
      password: hash,
      email: email,
    };

    await insertUserInTable(user);

    const token: string = generateToken(user.id);

    res.status(200).send({ access_token: token });
  } catch (error) {
    res.send(error.sqlMessage || error.message);
  }
}
