import { Request, Response } from "express";
import { createPostBusiness, getPostByIdBusiness } from "../business/postBusiness";
export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { photo, description, type } = req.body;
    const token: string = req.headers.authorization as string;

    const result = await createPostBusiness(photo, description, type, token);
    console.log("teste", result);
    res.status(201).send(result);
  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await getPostByIdBusiness(id);

    res.status(200).send(result);
  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
};
