import { connection } from "./connection";


export const insertUserData = async (id: string, name: string, email:string, password:string): Promise<void> => {
    
    await connection("labook_users").insert({
    id,
    name,
    email,
    password
  });
}

export const selectUserByEmail = async (email:string) => {

    const queryResult: any = await connection("labook_users")
          .select("*")
          .where({ email })
          
    return queryResult
}