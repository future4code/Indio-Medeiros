import { Request, Response } from "express";
import insertUser from "../data/insertUser ";
import generateId from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { userTokenType } from "../type/userTokenType";
import { userData } from "../type/userData";
import { hash } from "../services/generateHash";
import {checkBody, checkBodyIncludes} from "../services/checkBody";
import { getAddressByCep } from "../services/adressManage";
import { addressType } from "../type/addressType";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const user: userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      complement: req.body.complement,
      cep: req.body.cep,
      number: req.body.number,
    };
    
    //validando os dados da requisição
    checkBody(user.complement, "complement", res);
    checkBody(user.number, "number", res);
    checkBody(user.cep, "cep", res)
    checkBodyIncludes(user.email, "email", "@", res)
    
    if (user.cep.includes("-")) {
      res.statusCode = 406;
      throw new Error("only numbers");
    }

    const id = generateId();

    const cryptedPassword = await hash(user.password);

    

    //pegando detalhes do cep por requisição em outra API
    const address: addressType = await getAddressByCep(user.cep);
    
    await insertUser(
      id, 
      user.email, 
      cryptedPassword, 
      user.role, 
      user.complement,
      address,
      user.number );

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
