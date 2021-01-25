import {Request, Response} from 'express'
import { insertUser } from '../data/insertUser '
import generateId from '../services/generateId'


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