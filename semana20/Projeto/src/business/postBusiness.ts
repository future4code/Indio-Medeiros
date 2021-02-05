import { response } from "express";
import { insertPostData, selectPostById } from "../data/postDatabase";
import { InputCreatePostBusiness, Post } from "./entities/postType";
import { AuthenticationData } from "./entities/userType";
import { CheckData } from "./errors/CheckData";
import { getTokenData } from "./services/authenticator";
import { generateId } from "./services/IdGenerator";

export const createPostBusiness = async (
  inputCreatePostBusiness: InputCreatePostBusiness
) => {
  try {
    let message = "Success!";
    const {
      photo,
      description,
      type,
      token
    } = inputCreatePostBusiness

    

    const check = new CheckData();
    check.checkExistenceProperty(photo, "photo");
    check.checkExistenceProperty(description, "description");
    check.checkExistenceProperty(type, "type");
    check.checkExistenceProperty(token, "token");

    const tokenData: AuthenticationData = getTokenData(token);
    const id: string = generateId();

    await insertPostData(id, photo, description, type, tokenData.id);

    return message;
  } catch (error) {
    let message = error.sqlMessage || error.message;
    response.statusCode = 400;

    response.send({ message });
  }
};

export const getPostByIdBusiness = async (id: string) => {
  try {
    let message = "Success!";

    const check = new CheckData();
    check.checkExistenceProperty(id, "id");

    const queryResult: any = await selectPostById(id);

    if (!queryResult[0]) {
      response.statusCode = 404;
      message = "Post not found";
      throw new Error(message);
    }

    const post: Post = {
      id: queryResult[0].id,
      photo: queryResult[0].photo,
      description: queryResult[0].description,
      type: queryResult[0].type,
      createdAt: queryResult[0].created_at,
      authorId: queryResult[0].author_id,
    };

    return { message, post };
  } catch (error) {
    let message = error.sqlMessage || error.message;
    response.statusCode = 400;

    response.send({ message });
  }
};
