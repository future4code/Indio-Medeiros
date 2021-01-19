import { connection } from "../../index";

//criar tabela de usuários
export default async function filterUserType(type: string): Promise<any> {
  const result = await connection.raw(`
    SELECT * 
    FROM aula48_exercicio
    WHERE type = "${type}"
    `);

  return result[0];
}
