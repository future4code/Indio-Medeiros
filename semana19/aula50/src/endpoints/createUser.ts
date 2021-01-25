import {Request, Response} from 'express'
import { insertUser } from '../data/insertUser '

export default async function createUser(req: Request, res: Response):Promise<void> {
    
    try {
        const {id, email, password} = req.body
        
       const result = await insertUser(id, email, password)


        res.status(200).send(result)

    } catch (error) {
        res.send(error.sqlMessage || error.message)
    }
    
}