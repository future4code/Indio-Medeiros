import { compare } from "../services/generateHash";
import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUser";
import { generateToken } from "../services/generateToken";
import { checkBodyIncludes } from "../services/checkBody";

export default async function getUserByEmail(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const  {email, password} = req.body

    // Validação do email
    checkBodyIncludes(email, "email", "@", res)

    const user = await selectUserByEmail(email);

    const compareResult: boolean = await compare(
      password,
      user.password
    );

    if (!compareResult) {
      throw new Error("Incorrect Password.");
    }

    const token = generateToken({
      id: user.id,
      role: user.role,
    });

    res.status(200).send({ token: token });
  } catch (error) {
    res.status(400).send(error.sqlMessage || error.message);
  }
}
