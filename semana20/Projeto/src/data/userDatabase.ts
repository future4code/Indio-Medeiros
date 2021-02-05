import { promises } from "fs";
import { User } from "../business/entities/userType";
import { connection } from "./connection";
import { UserInputDTO } from "./model/userModel";

export const insertUserData = async (
  inputUserData : User
): Promise<void> => {
  try {
    await connection("labook_users")
    .insert(inputUserData);

  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export const selectUserByEmail = async (userInputDTO:UserInputDTO): Promise<User> => {
  try {
    const queryResult: any = await connection("labook_users")
      .select("*")
      .where(userInputDTO);

    return queryResult[0];
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
