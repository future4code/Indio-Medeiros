import { connection } from "..";
import { tableUsers } from "../services/tablesName";
import { userData } from "../types/userData";

export default async function insertUserInTable(user: userData): Promise<void> {
  await connection.insert(user).into(tableUsers);
}
