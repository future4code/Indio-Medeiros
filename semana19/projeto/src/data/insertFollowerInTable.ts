import { connection } from "..";
import { tableFollowers} from "../services/tablesName";
import { followersData } from "../types/followersData";

export async function insertFollowerInTable(followers:followersData): Promise<void> {
  await connection
    .insert(followers)
    .into(tableFollowers)
} 