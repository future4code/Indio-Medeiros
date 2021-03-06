import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";
import getUserProfile from "./endpoints/getUserProfile";
import createRecipes from "./endpoints/createRecipes";
import getRecipe from "./endpoints/getRecipe";
import createFollower from "./endpoints/createFollower";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true,
  },
});

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/signup", createUser);
app.post("/login", login);
app.get("/user/profile", getUserProfile);
app.get("/recipe/:id", getRecipe);
app.post("/recipe", createRecipes);
app.post("/user/follow", createFollower);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

console.log(
  "create the project tables with the command 'npm run createTables'"
);
