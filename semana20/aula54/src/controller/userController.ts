import { Request, Response } from "express"
import { businessSignup } from "../business/userBusiness"

export const signup = async (
    req: Request,
    res: Response
): Promise<void> => {
    res.statusCode = 404
    try {
        const {
            name,
            password,
            email,
            role
        } = req.body

        const token = await businessSignup(
            name,
            password,
            email,
            role,
            res
        )

        res.status(200).send({ token: token })
    } catch (error) {
        res.send(error.sqlMessage || error.message)
    }
}