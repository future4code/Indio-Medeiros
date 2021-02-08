import { compare, hash } from "./services/hashManager";
import { insertUser, selectUserByEmail, selectUserById } from "../data/userDatabase";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { user } from "./entities/user";
import { task } from "./entities/task";
import {
  convertTextToRole,
  loginInputDTO,
  signupInputDTO,
} from "../data/model/user";
import { selectTaskById } from "../data/taskDatabase";
import { getTaskInputDTO } from "../data/model/task";

export const businessSignup = async (
  signupData: signupInputDTO
): Promise<string> => {
  if (
    !signupData.name ||
    !signupData.nickname ||
    !signupData.email ||
    !signupData.password ||
    !signupData.role
  ) {
    throw new Error(
      'Preencha os campos "name","nickname", "email" e "password"'
    );
  }

  const id: string = generateId();

  const cypherPassword = await hash(signupData.password);
  signupData.password = cypherPassword;

  await insertUser(signupData);

  const token: string = generateToken({
    id,
    role: convertTextToRole(signupData.role),
  });

  return token;
};

export const businessLogin = async (
  loginInput: loginInputDTO
): Promise<string> => {
  if (!loginInput.email || !loginInput.password) {
    throw new Error("'email' e 'senha' são obrigatórios");
  }

  const user: user = await selectUserByEmail(loginInput.email);

  if (!user) {
    throw new Error("Usuário não encontrado ou senha incorreta");
  }

  const passwordIsCorrect: boolean = await compare(
    loginInput.password,
    user.password
  );

  if (!passwordIsCorrect) {
    throw new Error("Usuário não encontrado ou senha incorreta");
  }

  const token: string = generateToken({
    id: user.id,
    role: user.role,
  });

  return token;
};

export const businessGetUserWhithTask = async (
   id: string, 
   taskRquest: getTaskInputDTO
): Promise<[user, task]>=> {
   
   const user: user = await selectUserById(id)
   const task: task = await selectTaskById(taskRquest)


   return [user, task]
}