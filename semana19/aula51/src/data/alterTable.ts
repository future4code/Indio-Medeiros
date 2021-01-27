import { connection } from "..";



export async function alterTable(): Promise<void> {
    try {

     await connection.raw(`
     ALTER TABLE User
     ADD role ENUM("normal", "admin") DEFAULT "normal";
    `)
        console.log("Alter Table sucesss!")
    } catch (error) {
        console.log(error.sqlMessage || error.message)
    }
}