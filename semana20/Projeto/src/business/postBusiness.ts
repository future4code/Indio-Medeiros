import { PostInputDTO } from "../data/model/postModel";
import { insertPostData, selectPostById } from "../data/postDatabase";
import {
  InputCreatePostBusiness,
  InputPostByIdBusiness,
  OuputPostByIdBusiness,
} from "./entities/postType";
import { AuthenticationData } from "./entities/userType";
import { CheckData, CustomError } from "./errors/CheckData";
import { getTokenData } from "./services/authenticator";
import { convertStringToUserRole } from "./services/convertRoles";
import { generateId } from "./services/IdGenerator";

export const createPostBusiness = async (
  inputCreatePostBusiness: InputCreatePostBusiness
): Promise<string> => {
  try {
    let message = "Success!";
    const { photo, description, type, token } = inputCreatePostBusiness;

    const check = new CheckData();
    check.checkExistenceProperty(photo, "photo");
    check.checkExistenceProperty(description, "description");
    check.checkExistenceProperty(type, "type");
    check.checkExistenceProperty(token, "token");
    check.checkRole(type);

    const tokenData: AuthenticationData = getTokenData(token);
    const id: string = generateId();

    const postInputDTO: PostInputDTO = {
      id,
      photo,
      description,
      type: convertStringToUserRole(type),
      author_id: tokenData.id,
    };

    await insertPostData(postInputDTO);

    return message;
  } catch (error) {
    throw new CustomError(error.statusCode, error.sqlMessage || error.message);
  }
};

export const getPostByIdBusiness = async (
  id: InputPostByIdBusiness
): Promise<OuputPostByIdBusiness> => {
  try {
    let message = "Success!";

    const check = new CheckData();
    check.checkExistenceProperty(id, "id");

    const post = await selectPostById(id);

    check.checkExistenceProperty(post, "post");

    post.type = convertStringToUserRole(post.type);

    return { message, post };
  } catch (error) {
    throw new CustomError(error.statusCode, error.sqlMessage || error.message);
  }
};
