import { connection } from "./connection";
import { EmailInputDTO, UserInputDTO, UserOutputDTO } from "./model/userModel";

export const insertUserData = async (
  inputUserData : UserInputDTO
): Promise<void> => {
  try {
    await connection("labook_users")
    .insert(inputUserData);

  } catch (error) {
    throw new Error (
      error.sqlMessage || 
      error.message
      );
  }
};

export const selectUserByEmail = async (
  emailInputDTO:EmailInputDTO
): Promise<UserOutputDTO> => {
  try {
    const queryResult: any = await connection("labook_users")
      .select("*")
      .where(emailInputDTO);

    return queryResult[0];
  } catch (error) {
    throw new Error(
      error.sqlMessage || 
      error.message
      );
  }
};
