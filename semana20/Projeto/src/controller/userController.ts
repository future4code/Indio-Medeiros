import { Request, Response } from "express";
import { loginBusiness, signupBusiness } from "../business/userBusiness";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    console.log(name);
    const result = await signupBusiness(name, email, password);

    res.status(201).send(result);
  } catch (error) {
    res.statusCode = 400;
    let message = error.sqlMessage || error.message;

    res.send({ message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await loginBusiness(email, password);
     
    res.status(200).send(result);
  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;
    res.send({ message });
  }
};
