import { connection } from "..";
import { userTableName } from "./insertUser ";




export async function selectUserById(id: string): Promise<any> {
    
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ id });

    return result[0];
  }
