import {connection} from '../index'

export const userTableName = "User";

	export default async function insertUser(
		id: string, 
		email: string, 
		password: string): Promise<void> {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
	};