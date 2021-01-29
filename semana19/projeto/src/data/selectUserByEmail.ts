import { connection } from "..";
import { tableUsers } from "../services/tablesName";

export async function selectUserByEmail(userEmail: string) {
  const result = await connection.raw(`
        SELECT * FROM ${tableUsers}
        WHERE  email = "${userEmail}";
    `);

  return result[0][0];
}
