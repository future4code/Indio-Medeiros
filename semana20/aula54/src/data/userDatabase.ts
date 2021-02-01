import { userType } from "../business/entities/userType";
import { connection } from "./connection";
import { userTable } from "./tablesNames";

export const insertUserInTable  = async (
    user: userType
  ): Promise<void> => {
    try {
      await connection
        .insert(user)
        .into(userTable);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }