import { connection } from "..";



export  async function createTable(): Promise<void> {
    try {

     await connection.raw(`
        CREATE TABLE User (
            id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
        );
    `)
        console.log("create Table sucesss!")
    } catch (error) {
        console.log(error.sqlMessage || error.message)
    }
}
