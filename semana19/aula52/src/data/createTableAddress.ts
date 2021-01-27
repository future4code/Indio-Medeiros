import { connection } from ".."


export default async function createTableAddress(): Promise<void> {
    try {
       await connection.raw(`
        CREATE TABLE address (
            Logradouro VARCHAR(255) NOT NULL,
            Número VARCHAR(255) NOT NULL,
            Complemento VARCHAR(255),
            Bairro VARCHAR(255) NOT NULL,
            Cidade VARCHAR(255) NOT NULL,
            Estado VARCHAR(255) NOT NULL
        );
       `)
       
        console.log("create Table Address sucess!")
    } catch (error) {
        console.log(error.sqlMessage || error.message)
    }
}