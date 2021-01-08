import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { userAccount, userExtract, users } from "./database";

const app = express();
app.use(express.json());
app.use(cors());

//cadastrar usuário
app.post("/users/register", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    if (Number(req.body.birth.year) > 2003) {
      throw new Error(
        "Só é possível cadastrar pessoas com ou acimade 18 anos."
      );
    }

    if (
      req.body.name === undefined ||
      req.body.CPF === undefined ||
      req.body.birth.day === undefined ||
      req.body.birth.moth === undefined
    ) {
      throw new Error("Algo deu errado com sua requisição (verificar o body).");
    }

    const user: userAccount = {
      name: req.body.name,
      CPF: req.body.CPF,
      birth: {
        day: req.body.birth.day,
        moth: req.body.birth.moth,
        year: req.body.birth.year,
      },
      balance: 0,
      transactions: ["Não possui transações"],
    };
    users.push(user);
    
    res.status(200).send("Conta criada com sucesso! Bem vindo ao F4Bank");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//pegar todos usuários existentes
app.get("/users/all", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    if (!users || Number(users) === 0) {
      res.status(200).send("Ainda não existe usuários");
    }
    res.status(200).send(users);
  } catch (error) {
    res.status(errorCode).send("error.message");
  }
});

//pegar saldo
app.post("/users/balance", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const result= users.findIndex(user => {
      return req.body.CPF === user.CPF
    })
    
    if (result === -1 || req.body.CPF === undefined) {
      errorCode = 404;
      throw new Error("Não há usuários ou usuário não encontrado")
    }

    res.status(200).send("seu saldo é: " + users[result].balance)

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
