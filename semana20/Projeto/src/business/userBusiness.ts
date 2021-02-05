import { insertUserData, selectUserByEmail } from "../data/userDatabase";
import { generateId } from "./services/IdGenerator";
import { generateToken } from "./services/authenticator";
import { hashGenerator } from "./services/hashGenerator";
import {
  InputLoginBusiness,
  InputSignupBusiness,
  outputUserBusiness,
  User,
} from "./entities/userType";
import { CheckData } from "./errors/CheckData";
import { UserInputDTO } from "../data/model/userModel";

export const signupBusiness = async (
  inputSignupBusiness: InputSignupBusiness
): Promise<outputUserBusiness> => {
  try {
    const { name, email, password } = inputSignupBusiness;

    let message = "Success!";

    const check = new CheckData();
    check.checkExistenceProperty(name, "name");
    check.checkEmailFormat(email);
    check.checkPasswordFormat(password);

    const id: string = generateId();

    const hash = new hashGenerator();
    const cypherPassword = await hash.hash(password);

    const inputUserData: User = {
      id,
      name,
      email,
      password: cypherPassword,
    };

    await insertUserData(inputUserData);

    const token: string = generateToken({ id });

    return { message, token };
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export const loginBusiness = async (
  inputLoginBusiness: InputLoginBusiness
): Promise<outputUserBusiness> => {
  try {
    const { email, password } = inputLoginBusiness;
    let message = "Success!";

    const check = new CheckData();
    check.checkEmailFormat(email);
    check.checkPasswordFormat(password);

    const userInputDTO: UserInputDTO = {
      email,
    };

    const user = await selectUserByEmail(userInputDTO);

    if (!user) {
      message = "Invalid credentials";
      throw new Error(message);
    }

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
    throw new Error(error.sqlMessage || error.message);
  }
};
