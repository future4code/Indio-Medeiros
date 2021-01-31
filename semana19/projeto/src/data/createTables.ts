import { connection } from "../index";
import {
  tableFollowers,
  tableRecipes,
  tableUsers,
} from "../services/tablesName";

async function createTables(): Promise<void> {
  try {
    await connection.raw(`
 
    CREATE TABLE ${tableUsers}(
     id VARCHAR(255) PRIMARY KEY,
     name varchar(255) NOT NULL,
     email varchar(255) NOT NULL UNIQUE,
     password varchar(64) NOT NULL
   );
 
   CREATE TABLE ${tableRecipes} (
      id VARCHAR(255) PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      createdAt DATE NOT NULL,
      creatorId  VARCHAR(255) NOT NULL,
      FOREIGN KEY (creatorId) REFERENCES Cookenu_users(id)
   );

   CREATE TABLE ${tableFollowers} (
    followerId VARCHAR(255) NOT NULL,
    idFollowed VARCHAR(255) NOT NULL,
    FOREIGN KEY (followerId) REFERENCES Cookenu_users(id),
    FOREIGN KEY (idFollowed) REFERENCES Cookenu_users(id)
  );
     
     `);
    console.log("the tables were created!");
  } catch (error) {
    console.log(error.message);
  }
}

createTables();
