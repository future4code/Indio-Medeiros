

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

 export type OutputUserBusiness = {
    message: string, 
    token: string
 }