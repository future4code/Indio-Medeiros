import { Request, Response } from "express";
import {
  InputCreatePostBusiness,
  InputPostByIdBusiness,
} from "../business/entities/postType";
import {
  createPostBusiness,
  getPostByIdBusiness,
} from "../business/postBusiness";

export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { photo, description, type } = req.body;

    const token: string = req.headers.authorization as string;

    const inputCreatePostBusiness: InputCreatePostBusiness = {
      photo,
      description,
      type,
      token,
    };

    const result = await createPostBusiness(inputCreatePostBusiness);

    res.status(201).send(result);
  } catch (error) {
    res.status(error.statusCode || 400).send(error.sqlMessage || error.message);
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const id = req.params as InputPostByIdBusiness;
    const result = await getPostByIdBusiness(id);

    res.status(200).send(result);
  } catch (error) {
    res.status(error.statusCode || 400).send(error.sqlMessage || error.message);
  }
};
