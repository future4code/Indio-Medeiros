import { connection } from "../index";

async function createTables(): Promise<void> {
  const tableUsers: string = "Cookenu_users";
  const tableRecipes: string = "Cookenu_recipes";

  try {
    await connection.raw(`

    CREATE TABLE ${tableUsers}(
     id VARCHAR(255) PRIMARY KEY,
     name varchar(64) NOT NULL,
     email varchar(64) NOT NULL,
     password varchar(64) NOT NULL
   );
 
   CREATE TABLE ${tableRecipes} (
     id VARCHAR(255) PRIMARY KEY,
     title varchar(64) NOT NULL,
     description varchar(64) NOT NULL,
     createdAt DATE NOT NULL
   );
     
     `);
    console.log("the tables were created!");
  } catch (error) {
    console.log(error.message);
  }
}

createTables();
