import { connection } from "../../index";

//criar tabela de usuários
export default async function filterUserName(name: string): Promise<any> {
  const result = await connection.raw(`
    SELECT * 
    FROM aula48_exercicio
    WHERE name LIKE '%${name}%'
    `);

  return result[0];
}
