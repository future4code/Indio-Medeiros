import { authenticationData } from "../entities/userType"
import * as jwt from "jsonwebtoken"

export const generateToken = (payload: authenticationData): string => {
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {
            expiresIn: "1h"
        }
    )
}

export const getTokenData = (
    token: string
): authenticationData => {
    return jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as authenticationData
}