export type userType = {
    id: string,
    name: string,
    password: string,
    email: string,
    role: USER_ROLES 
}

export type authenticationData = {
    id: string,
    role: USER_ROLES
 }

export enum USER_ROLES  {
    ADMIN = "admin",
    NORMAL = "normal"
}
