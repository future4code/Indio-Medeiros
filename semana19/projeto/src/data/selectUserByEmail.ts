import { connection } from "..";
import { tableUsers } from "../services/tablesName";
import { userData } from "../types/userData";


export async function selectUserByEmail(userEmail: string):Promise<userData> {
  const result = await connection.raw(`
        SELECT * FROM ${tableUsers}
        WHERE  email = "${userEmail}";
    `);

  return result[0][0];
}
