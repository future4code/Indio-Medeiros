import { Request, Response } from "express"
import { businessLogin, businessSignup } from "../business/userBusiness"

export const signup = async (
    req: Request,
    res: Response
): Promise<void> => {
    res.statusCode = 404
    try {
        const {
            name,
            password,
            email,
            role
        } = req.body

        const token = await businessSignup(
            name,
            password,
            email,
            role,
            res
        )

        res.status(200).send({ token: token })
    } catch (error) {
        res.send(error.sqlMessage || error.message)
    }
}

export async function login(req: Request, res: Response): Promise<void> {
    res.statusCode = 400;
    try {
      const { email, password } = req.body;
      const token = await businessLogin(email, password, res);
  
      res.status(200).send({ token: token });
    } catch (error) {
      res.send(error.sqlMessage || error.message);
    }
  }