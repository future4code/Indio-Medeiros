import { connection } from "..";
import { tableUsers } from "../services/tablesName";
import { userProfile } from "../types/userProfile";

export async function selectUserById(userId: string): Promise<userProfile> {
  const result = await connection.raw(`
        SELECT * FROM ${tableUsers}
        WHERE  id = "${userId}";
    `);

  const { id, name, email } = result[0][0];
  
  const profile: userProfile = {
    id: id,
    name: name,
    email: email,
  };

  return profile;
}
