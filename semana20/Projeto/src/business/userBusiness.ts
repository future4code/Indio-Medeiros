import { insertUserData, selectUserByEmail } from "../data/userDatabase";
import { generateId } from "./services/IdGenerator";
import { response } from "express";
import { generateToken } from "./services/authenticator";
import { hashGenerator } from "./services/hashGenerator";
import { User } from "./entities/userType";

export const signupBusiness = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    let message = "Success!";

    if (!name || !email || !password) {
      response.statusCode = 406;
      message = '"name", "email" and "password" must be provided';
      throw new Error(message);
    }

    const id: string = generateId();

    const hash = new hashGenerator();
    const cypherPassword = await hash.hash(password);

    await insertUserData(id, name, email, cypherPassword);

    const token: string = generateToken({ id });

    return { message, token };
    
  } catch (error) {
    response.statusCode = 400;
    let message = error.sqlMessage || error.message;

    response.send({ message });
  }
};

export const loginBusiness = async (email: string, password: string) => {
  try {
    let message = "Success!";

    if (!email || !password) {
      response.statusCode = 406;
      message = '"email" and "password" must be provided';
      throw new Error(message);
    }
    const queryResult: any = await selectUserByEmail(email);

    if (!queryResult[0]) {
      response.statusCode = 401;
      message = "Invalid credentials";
      throw new Error(message);
    }
    const user: User = {
      id: queryResult[0].id,
      name: queryResult[0].name,
      email: queryResult[0].email,
      password: queryResult[0].password,
    };

    const hash = new hashGenerator();
    const passwordIsCorrect: boolean = await hash.compare(
      password,
      user.password
    );

    if (!passwordIsCorrect) {
      response.statusCode = 401;
      message = "Invalid credentials";
      throw new Error(message);
    }

    const token: string = generateToken({
      id: user.id,
    });

    return { message, token };
  } catch (error) {
    response.statusCode = 400;
    let message = error.sqlMessage || error.message;

    response.send({ message });
  }
};
