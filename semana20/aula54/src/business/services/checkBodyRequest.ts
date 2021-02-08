import { Response } from "express"
import { USER_ROLES } from "../entities/userType"

export const checkEmailFormat = (
    email: string,
    res: Response
) => {
    if (!email.includes("@")) {
        res.statusCode = 406
        throw new Error("check the format of the 'email' property, @ is required")
    }
}

export const checkExistenceProperty = (
    reqPropety: string,
    propretyName: string,
    res: Response
) => {
    if (!reqPropety || reqPropety === undefined) {
        res.statusCode = 404
        throw new Error(`'${propretyName}' not found`)
    }
}

export const checkPasswordFormat = (
    password: string,
    res: Response
) => {
    if (password.length < 6) {
        res.statusCode = 406
        throw new Error(" is password required whith minimum 6 caracteres")
    }
}

