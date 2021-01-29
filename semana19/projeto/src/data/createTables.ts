import { connection } from "../index";
import { tableRecipes, tableUsers } from "../services/tablesName";


async function createTables(): Promise<void> {

  try {
    await connection.raw(`

    CREATE TABLE ${tableUsers}(
     id VARCHAR(255) PRIMARY KEY,
     name varchar(255) NOT NULL,
     email varchar(255) NOT NULL,
     password varchar(64) NOT NULL
   );
 
   CREATE TABLE ${tableRecipes} (
     id VARCHAR(255) PRIMARY KEY,
     title varchar(255) NOT NULL,
     description varchar(255) NOT NULL,
     createdAt DATE NOT NULL
   );
     
     `);
    console.log("the tables were created!");
  } catch (error) {
    console.log(error.message);
  }
}

createTables();
