import { Request, Response } from "express";
import {
  InputLoginBusiness,
  InputSignupBusiness,
} from "../business/entities/userType";
import { loginBusiness, signupBusiness } from "../business/userBusiness";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const inputUser: InputSignupBusiness = {
      name,
      email,
      password,
    };

    const result = await signupBusiness(inputUser);

    res.status(201).send(result);
  } catch (error) {
    res.status(error.statusCode || 400).send(error.sqlMessage || error.message);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const inputLoginBusiness: InputLoginBusiness = {
      email,
      password,
    };

    const result = await loginBusiness(inputLoginBusiness);

    res.status(200).send(result);
  } catch (error) {
    res.status(error.statusCode || 400).send(error.sqlMessage || error.message);
  }
};
