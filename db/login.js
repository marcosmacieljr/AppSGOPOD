import { executeQuery } from '../db/sqliteConnection';

export const selectUsers = async () => {
	let toReturn = [];
	await executeQuery('select * from Users;', []).then(
		items => {
			toReturn = items;
		}
	);
	return toReturn;
}

export const newUser = async (userId, userCd) => {
	let toReturn = false;
	
	try {
		await executeQuery('DELETE FROM Users;');
		
		const persist = await executeQuery('INSERT INTO Users (userId, userCd) VALUES (?,?);', [userId, userCd]);
	
		toReturn = userId;
	} catch (error) {
		
		console.log(error);
    }
	return toReturn;
}

export const deleteUser = async () => {
	await executeQuery('DELETE FROM Users;');
}