import dotenv from "dotenv";
import express, { Response, Request, Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from "knex";
import {users, user} from './database'

const app: Express = express();
app.use(express.json());
app.use(cors());

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

//criar usuário
app.put("/user", (req: Request, res: Response) => {
    let errorCode: number = 400;
    let errorMessage: string = `(verifique o body) ausência da propriedade  `
  
    try {
      //validação-------
      if (!req.body.name || req.body.name === undefined) {
          errorCode = 404
          throw new Error(errorMessage + "*name")
      }
  
      if (!req.body.nickname || req.body.nickname === undefined ) {
          errorCode = 404
          throw new Error(errorMessage + "*nickname")
      }
  
      if (!req.body.email ||req.body.email === undefined) {
          errorCode = 404
          throw new Error(errorMessage + "*email")    
      }
      //------------------
      
      //criação de usuário
      const userCreate: user = {
          id: Date.now(),
          name: req.body.name,
          nickname: req.body.nickname,
          email: req.body.email
      }
      
      users.push(userCreate)
  
      res.status(200).send('usuário criado com sucesso!')
  
    } catch (error) {
        res.status(errorCode).send(error.message)
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
