import dotenv from "dotenv";
import express, { Response, Request, Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {
  checkBody,
  createToDoListTable,
  createTodoListTask,
  TodoListResponsibleUserTaskRelation,
  creatUser,
  getUser,
  updateUser,
  createTask,
  getTask,
} from "./functions";
import { user, task } from "./types";
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

//criar tabelas
createToDoListTable();
createTodoListTask();
TodoListResponsibleUserTaskRelation();

//criar usuário
app.put("/user", async (req: Request, res: Response) => {
  let errorCode: number = 404;
  try {
    const { name, nickname, email } = req.body;

    //validação-------
    checkBody(name, "*name");
    checkBody(nickname, "*nickname");
    checkBody(email, "*email");
    //------------------

    //criação de usuário
    const userCreate: user = {
      id: String(Date.now()),
      name: name,
      nickname: nickname,
      email: email,
    };

    await creatUser(userCreate);

    res
      .status(200)
      .send("usuário criado com sucesso! seu id é: " + userCreate.id);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//pegar usuário por id/parametro
app.get("/user/:id", async (req: Request, res: Response) => {
  let errorCode: number = 404;

  try {
    const result = await getUser(req.params.id);
    //----------------------
    if (Number(result) === 0) {
      throw new Error("usuário não existe");
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//Editar usuário
app.post("/user/edit/:id", async (req: Request, res: Response) => {
  let errorCode: number = 404;

  try {
    const { name, nickname } = req.body;
    //validação -------------
    checkBody(name, "*name");
    checkBody(nickname, "*nickname");

    const result = await updateUser(name, nickname, String(req.params.id));

    if (result === 0) {
      throw new Error("usuário não existe");
    }
    res.status(200).send("dados alterados com sucesso!");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//criar tarefa
app.put("/task", async (req: Request, res: Response) => {
  let errorCode: number = 404;

  try {
    const { title, description, limite_date, creator_user_id } = req.body;

    //validação
    checkBody(title, "title");
    checkBody(description, "description");
    checkBody(limite_date, "limite_date");
    checkBody(creator_user_id, "creator_user_id");

    //formatando data
    const dateArraySplit = limite_date.split("/");
    const dateFormat = new Date(
      dateArraySplit[1] + "-" + dateArraySplit[0] + "-" + dateArraySplit[2]
    );

    const taskCreate: task = {
      id: String(Date.now()),
      title: title,
      description: description,
      limite_date: dateFormat,
      creator_user_id: creator_user_id,
    };

    await createTask(taskCreate);

    res.status(200).send("Tarefa criada com sucesso!");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//pegar tarefa por id
app.get("/task/:id", async (req: Request, res: Response) => {
  let errorCode: number = 404;

  try {
    const result = await getTask(String(req.params.id));
    if (Number(result) === 0) {
      errorCode = 400;
      throw new Error("Tarefa não existe!");
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
    console.log(`Failure upon starting server.`);
  }
});
