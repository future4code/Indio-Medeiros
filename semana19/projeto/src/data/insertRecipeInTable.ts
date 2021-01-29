import { connection } from "..";
import { tableRecipes } from "../services/tablesName";
import { recipeData } from "../types/recipeData"


export async function insertRecipeInTable(recipe:recipeData): Promise<void> {
  await connection
    .insert(recipe)
    .into(tableRecipes)
} 