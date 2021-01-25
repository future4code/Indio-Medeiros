import {Request, Response} from 'express'
import { insertUser } from '../data/insertUser '
import generateId from '../services/generateId'
import {generateToken} from '../services/generateToken'
import { userTokenType } from '../type/userTokenType'

export default async function createUser(req: Request, res: Response):Promise<void> {
    
    try {
        const {email, password} = req.body
        const id = generateId() 
        const result = insertUser(id, email, password)
        
        const idToken: userTokenType = {id: id}
        const token = generateToken(idToken)


        res.status(200).send(result)

    } catch (error) {
        res.send(error.sqlMessage || error.message)
    }
    
}