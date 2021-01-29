import { connection } from "..";
import { tableUsers } from "../services/tablesName";
import { userData } from "../types/userData";


export async function insertUserInTable(user:userData) {
  await connection
    .insert(user)
    .into(tableUsers)
} 