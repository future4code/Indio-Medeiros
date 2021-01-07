//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
  id: number;
  name: string;
  email: string;
  type: string;
  age: number;
};

let users: user[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60,
  },
];
//exercicio 1
app.get("/users", (req: Request, res: Response) => {
  const result: user[] = users;

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(400).send("not found");
  }
});

//exercicio 2
//a) passei parâmetro via entidade (path parameters), pois o dado não precisava de proteção
//b) Utilizei o filtro e condições para garantir que só os types válidos fossem enviados

app.get("/user/:type", (req: Request, res: Response) => {
  let errorCode = 400;
 
  try {
    const result = users.filter((user: user) => user.type === req.params.type.toUpperCase());

    if (result.length === 0 || !result) {
      errorCode = 404;
      throw new Error("Nenhum dado foi achado, insira um type válido");
    }

    res.status(200).send(result);
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
