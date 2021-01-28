import { connection } from "..";
import {userTableName} from "./insertUser "


export default async function deleteUserData (id: string): Promise<any> {
    await connection
    .delete()
    .from(userTableName)
    .where({ id });
}