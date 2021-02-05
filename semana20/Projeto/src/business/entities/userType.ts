export type User = {
    id: string,
    name: string,
    email: string,
    password: string
 }

export  type AuthenticationData = {
    id: string
 }

export type InputSignupBusiness = {
    name: string,
    email: string,
    password: string
}

export type InputLoginBusiness = {
    email: string,
    password: string
 }

 export type outputUserBusiness = {
    message: string, 
    token: string
 }