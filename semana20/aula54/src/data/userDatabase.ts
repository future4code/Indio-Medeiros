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

export async function selectUserByEmail(userEmail: string) {
  const result = await connection.raw(`
        SELECT * FROM ${userTable}
        WHERE  email = "${userEmail}";
    `);

  return result[0][0];
}

export const selecAllUsers = async (): Promise<any> => {
  try {
    const result = await connection.raw(`
      SELECT * FROM ${userTable};
    
    `)
    return result[0]

  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}