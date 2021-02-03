import { response } from "express";
import { insertPostData } from "../data/postDatabase";
import { AuthenticationData } from "./entities/userType";
import { getTokenData } from "./services/authenticator";
import { generateId } from "./services/IdGenerator";

export const createPostBusiness = async (
  photo: string,
  description: string,
  type: string,
  token: string
) => {
  try {
    let message = "Success!";

    const tokenData: AuthenticationData = getTokenData(token);
    const id: string = generateId();
    console.log("test2",)
   const result = await insertPostData(
        id, 
        photo, 
        description, 
        type, 
        tokenData.id);
        console.log(result)
    return  message;
  } catch (error) {
    let message = error.sqlMessage || error.message;
    response.statusCode = 400;

    response.send({ message });
  }
};
