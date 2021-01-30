import { Request, Response } from "express";
import { selectRecipeById } from "../data/selectRecipeById";
import { getTokenData } from "../services/authenticator";
import { checkDataExisting } from "../services/checkDataExisting";
import { reFormatDate } from "../services/formatDate";
import { recipeData } from "../types/recipeData";

export async function getRecipe(req: Request, res: Response): Promise<void> {
  res.statusCode = 400;
  try {
    const recipeId = req.params.id;
    const { authorization } = req.headers;

    checkDataExisting(authorization as string, "authorization", res);
    checkDataExisting(recipeId, "id", res);

    getTokenData(authorization!);

    const result: recipeData = await selectRecipeById(recipeId);
    if (!result) {
      res.statusCode = 404;
      throw new Error("the id was not found");
    }

    result.createdAt = reFormatDate(result.createdAt);

    res.status(200).send(result);
  } catch (error) {
    res.send(error.sqlMessage || error.message);
  }
}
