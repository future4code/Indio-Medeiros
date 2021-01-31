import { Request, Response } from "express";
import selectUserByEmail from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
import checkEmailFormat from "../services/checkEmailFormat";
import checkPasswordFormat from "../services/checkPasswordFormat";
import checkDataExisting from "../services/checkDataExisting";
import { comparePasswordEndHash } from "../services/hashGenerator";

export default async function login(
  req: Request,
  res: Response
): Promise<void> {
  res.statusCode = 400;
  try {
    const { email, password } = req.body;

    checkDataExisting(password, "password", res);
    checkPasswordFormat(password, res);
    checkDataExisting(email, "email", res);
    checkEmailFormat(email, res);

    const user = await selectUserByEmail(email);

    const comparePass = comparePasswordEndHash(password, user.password);

    if (!comparePass) {
      res.statusCode = 404;
      throw new Error("Password incorrect!");
    }

    const token: string = generateToken(user.id);

    res.status(200).send({ access_token: token });
  } catch (error) {
    res.send(error.sqlMessage || error.message);
  }
}
