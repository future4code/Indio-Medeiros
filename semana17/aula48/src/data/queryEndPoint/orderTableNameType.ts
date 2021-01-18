import { connection } from "../../index";
import { user } from "../../types/user";

export default async function orderTableNameType(
  orderBy: string,
  ordeType: string
): Promise<any> {
  const result = await connection.raw(`
    SELECT *
    FROM aula48_exercicio
    ORDER BY ${orderBy} ${ordeType};
    `);

  return result[0];
}
