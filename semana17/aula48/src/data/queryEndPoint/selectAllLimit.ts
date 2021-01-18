import { connection } from "../../index";

export default async function selectAllLimit(page: number): Promise<any> {
  const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio
       LIMIT 5 OFFSET ${page}
    `);
  console.log(page)
  return result[0];
}
