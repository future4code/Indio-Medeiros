import {connection} from '../../index'

//criar tabela de usuários
export default async function createTableUsers():Promise<any> {
    const result = await connection.raw(`
    CREATE TABLE aula48_exercicio(
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        type VARCHAR(255) NOT NULL
        );
    `)
 
    return result[0]
 }

 