import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {userAccount, userExtract, users} from "./database"

const app = express();
app.use(express.json);
app.use(cors());

//cadastrar usuário
app.post("/users/register", (req: Request, res: Response) => {
    let errorCode: number = 400

    try{

    if(req.body.birth.year < 2003){
        throw new Error ("Só é possível cadastrar pessoas com ou acimade 18 anos.")
    }

    }catch(error){
        res.status(errorCode).send(error.message)
    }
})

//pegar todos usuários existentes
app.get("/users/all", (req: Request, res: Response) => {

})



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error("Failure upon starting server");
  }
});
