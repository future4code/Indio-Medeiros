import { connection } from "..";
import { tableRecipes } from "../services/tablesName";
import { recipeData } from "../types/recipeData";



export async function selectRecipeById(recipeId: string):Promise<recipeData> {
  const result = await connection.raw(`
        SELECT * FROM ${tableRecipes}
        WHERE  id = ${recipeId};
    `);

  return result[0][0];
}
