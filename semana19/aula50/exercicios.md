Exercicio 1
============
A
-----
Sim, concordo que usar ids em string, pois torna o código mais complexo de ser identificado.

Exercicio 2
====
A
----
O código insere os dados: id, email e password em uma tabela chamada "user" no banco de dados.

B
-----
import { connection } from "..";

export async function createTable(): Promise<void> {
    try {

     await connection.raw(`
        CREATE TABLE User (
            id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
        );
    `)
        console.log("create Table sucesss!")
    } catch (error) {
        console.log(error.sqlMessage || error.message)
    }
}

C
-----
import {connection} from '../index'  
import {Request, Response} from 'express'
const userTableName = "User";

	export const insertUser = async (
		id: string, 
		email: string, 
		password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
	};

    


export default async function createUser(req: Request, res: Response):Promise<void> {
    
    try {
        const {email, password} = req.body
        const id = generateId() 
        const result = insertUser(id, email, password)
      


        res.status(200).send(result)

    } catch (error) {
        res.send(error.sqlMessage || error.message)
    }
    
}