import { response } from "express";
import { connection } from "..";
import checkDataExisting from "../services/checkDataExisting";
import { tableUsers } from "../services/tablesName";
import { userProfile } from "../types/userProfile";

export default async function selectUserById(
  userId: string
): Promise<userProfile> {
  const result = await connection.raw(`
        SELECT * FROM ${tableUsers}
        WHERE  id = "${userId}";
    `);

  checkDataExisting(result[0][0], "Id", response);
  const { id, name, email } = result[0][0];

  const profile: userProfile = {
    id: id,
    name: name,
    email: email,
  };

  return profile;
}
