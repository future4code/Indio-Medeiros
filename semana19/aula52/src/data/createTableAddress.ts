import { connection } from ".."


export default async function createTableAddress(): Promise<void> {
    try {
       await connection.raw(`
        CREATE TABLE address (
            street VARCHAR(255) NOT NULL,
            number VARCHAR(255) NOT NULL,
            complement VARCHAR(255),
            neighbourhood VARCHAR(255) NOT NULL,
            city VARCHAR(255) NOT NULL,
            state VARCHAR(255) NOT NULL
        );
       `)
        console.log("create Table Address sucess!")
    } catch (error) {
        console.log(error.sqlMessage || error.message)
    }
}