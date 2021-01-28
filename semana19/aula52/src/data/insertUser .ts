import {connection} from '../index'
import { addressType } from '../type/addressType';

export const userTableName = "User";

	export default async function insertUser(
		id: string,
		email: string,
		password: string,
		role: string,
		complement: string,
		address: addressType,
		number: string): Promise<void> {
	  
		await connection.raw(`
		INSERT User (id, email, password, role)
			VALUES ('${id}', '${email}', '${password}', '${role}');
			
			INSERT address (street, number, complement, neighbourhood, city, state  )
			VALUES ('${address.street}', '${number}',  '${complement}', '${address.neighbourhood}', '${address.city}', '${address.state}' );
	  `)
	   
		
		
	};