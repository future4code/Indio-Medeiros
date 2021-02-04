import { connection } from "./connection";

export const insertPostData = async (
  id: string,
  photo: string,
  description: string,
  type: string,
  author_id: string
) => {
  try {
    await connection("labook_posts").insert({
      id,
      photo,
      description,
      type,
      author_id,
    });
  } catch (error) {
    console.log(error.sqlMessage || error.message);
  }
};

export const selectPostById = async (id: string) => {
  try {
    const result = await connection("labook_posts")
    .select("*")
    .where({ id });

    return result;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
