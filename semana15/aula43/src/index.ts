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

app.get("/user/tipo/:type", (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const result = users.filter(
      (user: user) => user.type === req.params.type.toUpperCase()
    );

    if (result.length === 0 || !result) {
      errorCode = 404;
      throw new Error("Nenhum dado foi achado, insira um type válido");
    }

    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//exercicio 3
//a) tipo query

app.get("/user/nome", (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const result = users.filter(
      (user: user) => user.name === (req.query.nome as string)
    );

    if (result.length === 0 || !result) {
      errorCode = 404;
      throw new Error("Nenhum nome foi achado, insira um nome válido");
    }

    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//exercicio 4
//a) não há diferenças visiveis na mudança para o PUT
//b) pelos resultados que consegui eu considero apropriado, porém e seguindo o conselho da comunidade
//é preferivel utilizar o Post, por ter uma funcionalidade além de só atualizar/inserir dados

app.post("/user/createUser", (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const novoUsuario = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      age: req.body.age,
    };
    if(req.body === undefined){
      throw new Error ("Algo errado no envio de dados (Body)")
    }
    users.push(novoUsuario);

    res.status(200).send("usuário adicionado com sucesso!");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//exercicio 5

app.put("/user/editUser/:id", (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const result = users.findIndex((user: user) => {
      return user.id === Number(req.params.id)
    } )
    
    users[result] = {
      id: users[result].id,
      name: req.body.name +  "-ALTERADO",
      email: users[result].email,
      type: users[result].type,
      age: users[result].age,
    };
    
    if(req.body.name === undefined){
      throw new Error ("Algo deu errado na sua requisição")
    }
    

    res.status(200).send("usuário atualizado com sucesso!");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//EXERCICIO 6
app.patch("/user/reeditUser/:id", (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const result = users.findIndex((user: user) => {
      return user.id === Number(req.params.id)
    } )
    
    users[result] = {
      id: users[result].id,
      name: req.body.name +  "-REALTERADO",
      email: users[result].email,
      type: users[result].type,
      age: users[result].age,
    };
    
    if(req.body.name === undefined){
      throw new Error ("Algo deu errado na sua requisição")
    }
    

    res.status(200).send("usuário re-atualizado com sucesso!");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});


app.delete("/user/deleteUser/:id", (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const result = users.findIndex((user: user) => {
      return user.id === Number(req.params.id)
    } )
    users.splice(result, 1)
    
    if(!result || req.params.id === undefined){
      throw new Error ("Algo deu errado na sua requisição")
    }

    res.status(200).send("usuário  deletado com sucesso!");
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
