import { insertUserData, selectUserByEmail } from "../data/userDatabase";
import { generateId } from "./services/IdGenerator";
import { generateToken } from "./services/authenticator";
import { hashGenerator } from "./services/hashGenerator";
import { User } from "./entities/userType";
import { CheckUserBusiness} from "./errors/checkUserBusiness";

export const signupBusiness = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    let message = "Success!";
     const check = new CheckUserBusiness
     check.checkExistenceProperty(name, "name")
     check.checkEmailFormat(email)
     check.checkPasswordFormat(password)

    const id: string = generateId();

    const hash = new hashGenerator();
    const cypherPassword = await hash.hash(password);
    
    await insertUserData(id, name, email, cypherPassword);

    const token: string = generateToken({ id });

    return { message, token };
  } catch (error) {
    throw new Error (error.sqlMessage || error.message)
  }
};

export const loginBusiness = async (email: string, password: string) => {
  try {
    let message = "Success!";

    const check = new CheckUserBusiness
    check.checkEmailFormat(email)
    check.checkPasswordFormat(password)

    const queryResult: any = await selectUserByEmail(email);

    if (!queryResult[0]) {
      message = "Invalid credentials";
      throw new Error(message);
    }
    const user: User = {
      id: queryResult[0].id,
      name: queryResult[0].name,
      email: queryResult[0].email,
      password: queryResult[0].password,
    };

    const hash = new hashGenerator();
    const passwordIsCorrect: boolean = await hash.compare(
      password,
      user.password
    );

    if (!passwordIsCorrect) {
      message = "Invalid credentials";
      throw new Error(message);
    }

    const token: string = generateToken({
      id: user.id,
    });

    return { message, token };
  } catch (error) {
    throw new Error (error.sqlMessage || error.message)
  }
};
