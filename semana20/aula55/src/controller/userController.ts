import { Request, Response } from "express";
import { businessGetUserWhithTask, businessLogin, businessSignup } from "../business/userBusiness";
import { getTaskInputDTO } from "../data/model/task";
import { loginInputDTO, signupInputDTO } from "../data/model/user";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const loginInput: loginInputDTO = {
      email: req.body.emal,
      password: req.body.password,
    };

    const token = await businessLogin(loginInput);

    res.send({
      message: "Usuário logado!",
      token,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export const signup = async (req: Request, res: Response) => {
  try {
    const signupData: signupInputDTO = {
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    const token = await businessSignup(signupData);

    res.status(201).send({
      message: "Usuário criado!",
      token,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getUserWhithTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
     const id = req.params.id
     const task: getTaskInputDTO = {id: req.params.task}
      const result = await businessGetUserWhithTask(id, task )

   res.status(200).send(result)

  } catch (error) {
    res.status(400).send(error.message);
  }
};
