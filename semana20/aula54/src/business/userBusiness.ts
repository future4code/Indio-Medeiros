import { userType, USER_ROLES } from "./entities/userType";
import { Response } from "express";
import {
  checkEmailFormat,
  checkExistenceProperty,
  checkPasswordFormat,
} from "./services/checkBodyRequest";
import { idGenerator } from "./services/idGenerator";
import { compare, hash } from "./services/hashManager";
import { generateToken } from "./services/authenticator";
import { insertUserInTable, selectUserByEmail } from "../data/userDatabase";

export const businessSignup = async (
  name: string,
  password: string,
  email: string,
  role: USER_ROLES,
  res: Response
): Promise<string> => {
  try {
    checkExistenceProperty(name, "name", res);
    checkExistenceProperty(password, "password", res);
    checkExistenceProperty(role, "role", res);
    checkExistenceProperty(email, "email", res);

    checkEmailFormat(email, res);
    checkPasswordFormat(password, res);

    const id: string = idGenerator();
    const user: userType = {
      id: id,
      name: name,
      password: await hash(password),
      email: email,
      role: role,
    };

    await insertUserInTable(user);
    const token: string = generateToken({ id, role });
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

export async function businessLogin(
  email: string,
  password: string,
  res: Response
) {
  res.statusCode = 400;
  try {
    checkExistenceProperty(password, "password", res);
    checkPasswordFormat(password, res);
    checkExistenceProperty(email, "email", res);
    checkEmailFormat(email, res);

    const user = await selectUserByEmail(email);
    const comparePass = await compare(password, user.password);
    console.log(comparePass)
    if (!comparePass) {
      res.statusCode = 404;
      throw new Error("Password incorrect!");
    }

    const token: string = generateToken({
      id: user.id,
      role: user.role,
    });

    return token;

  } catch (error) {
    res.send(error.sqlMessage || error.message);
  }
}
