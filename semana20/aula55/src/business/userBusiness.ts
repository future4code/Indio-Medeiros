import { compare, hash } from "./services/hashManager";
import { insertUser, selectUserByEmail } from "../data/userDatabase";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { user } from "./entities/user";
import { convertTextToRole, loginInputDTO, signupInputDTO } from "../data/model/user";

export const businessSignup = async (
   signupData:signupInputDTO 
) => {

   if (
      !signupData.name ||
      !signupData.nickname ||
      !signupData.email ||
      !signupData.password ||
      !signupData.role
   ) {
      throw new Error('Preencha os campos "name","nickname", "email" e "password"')
   }

   const id: string = generateId()

   const cypherPassword = await hash(signupData.password);
   signupData.password = cypherPassword

   await insertUser(signupData)

   const token: string = generateToken({
      id,
      role: convertTextToRole(signupData.role) 
   })

   return token
}

export const businessLogin = async (
   loginInput:loginInputDTO
) => {
   if (!loginInput.email || !loginInput.password) {
      throw new Error("'email' e 'senha' são obrigatórios")
   }

   const user: user = await selectUserByEmail(loginInput.email)

   if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const passwordIsCorrect: boolean = await compare(loginInput.password, user.password)

   if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const token: string = generateToken({
      id: user.id,
      role: user.role
   })

   return token
}