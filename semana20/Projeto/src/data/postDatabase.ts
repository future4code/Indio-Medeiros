import { InputPostByIdBusiness } from "../business/entities/postType";
import { connection } from "./connection";
import { PostInputDTO, PostOutputDTO } from "./model/postModel";

export const insertPostData = async (
  postInputDTO: PostInputDTO
): Promise<void> => {
  try {
    await connection("labook_posts")
    .insert(
      postInputDTO
    );
  } catch (error) {
    throw new Error (
      error.sqlMessage || 
      error.message
      );
  }
};

export const selectPostById = async (
  id:InputPostByIdBusiness
): Promise <PostOutputDTO>  => {
  try {
    const result = await connection("labook_posts")
    .select("*")
    .where( id );

    return result[0];
  } catch (error) {
    throw new Error(
      error.sqlMessage || 
      error.message
      );
  }
};
