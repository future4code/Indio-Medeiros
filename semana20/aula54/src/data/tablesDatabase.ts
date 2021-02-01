import { connection } from "./connection";
import { userTable } from "./tablesNames";

export const tablesDatabase = async (): Promise<void> => {
  try {
    await connection.raw(`
        CREATE TABLE ${userTable}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            role ENUM ("normal", "admin") DEFAULT "normal"
        )
    
    `);
    console.log("table created!");
  } catch (error) {
    console.log(error.sqlMessage || error.message);
  }
};

tablesDatabase()
