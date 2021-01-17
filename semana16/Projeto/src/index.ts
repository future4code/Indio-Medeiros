import dotenv from "dotenv";
import express, { Response, Request, Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {createToDoListTable, createTodoListTask, TodoListResponsibleUserTaskRelation } from "./functionsSql"
import { users, user, checkBody, checkID, tasks, task } from "./database";
import knex from "knex";
import Knex from "knex";

const app: Express = express();
app.use(express.json());
app.use(cors());

dotenv.config();

export const connection: Knex = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});


createToDoListTable()
createTodoListTask()
TodoListResponsibleUserTaskRelation()

//criar usuário
app.put("/user", (req: Request, res: Response) => {
  let errorCode: number = 404;
  try {
    //validação-------
    checkBody(req.body.name, "*name");
    checkBody(req.body.nickname, "*nickname");
    checkBody(req.body.email, "*email");

    const result = users.findIndex((user) => {
      return req.body.name === user.name;
    });

    if (result !== -1) {
      throw new Error("nome de usuário já existe na base dados");
    }

    const result2 = users.findIndex((user) => {
      return req.body.nickname === user.nickname;
    });

    if (result2 !== -1) {
      throw new Error("nickname já existe na base dados");
    }
    //------------------

    //criação de usuário
    const userCreate: user = {
      id: Date.now(),
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
    };

    users.push(userCreate);

    res
      .status(200)
      .send("usuário criado com sucesso! seu id é: " + userCreate.id);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//pegar usuário por id/parametro
app.get("/user/:id", (req: Request, res: Response) => {
  let errorCode: number = 404;

  try {
    const result = users.findIndex((user) => user.id === Number(req.params.id));

    //validação -------------
    checkID(req.params.id, result);

    const response = {
      id: String(users[result].id),
      nickname: users[result].nickname,
    };
    //----------------------
    res.status(200).send(response);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//Editar usuário
app.post("/user/edit/:id", (req: Request, res: Response) => {
  let errorCode: number = 404;

  try {
    const result = users.findIndex((user) => user.id === Number(req.params.id));

    //validação -------------
    checkID(req.params.id, result);
    checkBody(req.body.name, "*name");
    checkBody(req.body.nickname, "*nickname");

    if (
      users[result].name === req.body.name &&
      users[result].nickname === req.body.nickname
    ) {
      errorCode = 409;
      throw new Error("(verificque o Body) os dados são identicos");
    }
    //--------------------------------
    if (users[result].name !== req.body.name) {
      users[result].name = req.body.name;
    }
    if (users[result].nickname !== req.body.nickname) {
      users[result].nickname = req.body.nickname;
    }

    res.status(200).send("dados alterados com sucesso!");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.put("/task", (req: Request, res: Response) => {
  let errorCode: number = 404;

  try {
    const result = users.findIndex(
      (user) => user.id === Number(req.body.creatorUserId)
    );
    //validação
    checkBody(req.body.title, "title");
    checkBody(req.body.description, "description");
    checkBody(req.body.limitDate, "limitDate");
    checkID(req.body.creatorUserId, result);

    const taskCreate: task = {
      title: req.body.title,
      description: req.body.description,
      limitDate: req.body.limitDate,
      creatorUserId: req.body.creatorUserId,
    };

    tasks.push(taskCreate);

    res.status(200).send("Tarefa criada com sucesso!");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.log(`Failure upon starting server.`);
  }
});
