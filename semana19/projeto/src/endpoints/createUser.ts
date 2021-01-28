import {Request, Response} from "express"
import { userData } from "../types/userData"
import {v4} from 'uuid'
import { checkUserPropety } from "../services/checkUserData"
import { insertUserInTable } from "../data/insertUserInTable"

export default async function createUser(req: Request, res: Response): Promise<void> {
    try {
        //é preciso ajustar as verificações e criar o token
        const user:userData = {
            id:v4(),
            name: req.body.name, 
            password: req.body.password, 
            email: req.body.email
        }   
        checkUserPropety(user.name, "name", res)
        checkUserPropety(user.password, "name", res)
        checkUserPropety(user.email, "email", res)
        
        await insertUserInTable(user)

        res.status(200).send("{access_token: token}")
    } catch (error) {
        res.send(error.sqlMessage || error.message)
    }
}