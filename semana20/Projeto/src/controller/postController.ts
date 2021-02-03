import { createPostBusiness } from "../business/postBusiness";
import { Request, Response } from "express";

export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { photo, description, type } = req.body;
    const token: string = req.headers.authorization as string;

    const result = await createPostBusiness(photo, description, type, token);
    console.log("teste", result)
    res.status(201).send(result);
  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
};
