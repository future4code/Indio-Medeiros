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

    const result = users.findIndex((user) => {
      return req.body.CPF === user.CPF;
    });

    if (result !== -1) {
      throw new Error("usuário/CPF já existe na base dados");
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
      transactions: [],
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
  let errorCode: number = 400;
  try {
    const result = users.findIndex((user) => {
      return req.body.CPF === user.CPF;
    });

    if (result === -1 || req.body.CPF === undefined) {
      errorCode = 404;

      throw new Error("Não há usuários ou usuário não encontrado");
    }
    //adicionar saldo
    if (req.body.balance < users[result].balance) {
      throw new Error("você não pode negativar o saldo por este endpoint");
    } else if (req.body.balance > users[result].balance && req.body.name) {
      users[result].balance = req.body.balance;
      res
        .status(200)
        .send(
          "Sr." + req.body.name + " seu novo saldo é: " + users[result].balance
        );
    }

    res.status(200).send("seu saldo é: " + users[result].balance);
  } catch (error) {
    res.status(errorCode).send(error.message);
    res.status(errorCode).send(error.message);
  }
});

//pagamento de conta
app.post("/users/pay", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    if (req.body.value === undefined || !req.body.value) {
      errorCode = 402;
      throw new Error("não há valor definido para o pagamento");
      
    }

    //validando data
    if (req.body.date === undefined || !req.body.date) {
      const date = new Date();
      const dateFormat =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      req.body.date = dateFormat;
    } else {
      const date = new Date();
      if (
        req.body.date.split("/")[2] < date.getFullYear() ||
        req.body.date.split("/")[1] < date.getMonth() + 1 || 
        (req.body.date.split("/")[1] <= date.getMonth() + 1 && req.body.date.split("/")[0] < date.getDate())
      ) {
        errorCode = 403;
        throw new Error("não é permitido agendar para uma data passada");
      }
    }

    const pay: userExtract = {
      value: req.body.value,
      date: req.body.date,
      description: req.body.description,
    };

    if (pay.description === undefined || !pay.description) {
      pay.description = "sem descrição";
    }

    //procurar o usuário
    const result = users.findIndex((user) => {
      return req.body.CPF === user.CPF;
    });

    if (result === -1 || req.body.CPF === undefined) {
      errorCode = 404;
      throw new Error("Não há usuários ou usuário não encontrado");
    }

    if (users[result].balance > pay.value) {
      users[result].balance -= pay.value;
      users[result].transactions.push(pay)
    } else {
      errorCode = 406;
      throw new Error("Saldo insuficiente");
    }

    res
      .status(200)
      .send(
        "Pagamento efetuado com sucesso! " +
          " Valor: " +
          pay.value +
          " Agendamento: " +
          pay.date +
          " Descrição: " +
          pay.description
      );
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
