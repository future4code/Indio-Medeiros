import { connection } from "./connection";

export const insertUserData = async (
  id: string,
  name: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    await connection("labook_users")
    .insert({
      id,
      name,
      email,
      password,
    });
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export const selectUserByEmail = async (email: string) => {
  try {
    const queryResult: any = await connection("labook_users")
      .select("*")
      .where({ email });

    return queryResult;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
