import { executeQuery } from '../db/sqliteConnection';
import { routes } from '../utils/constants';

export const selectForms = async () => {
	let toReturn = [];
	await executeQuery('select * from Forms;', []).then(
		items => {
			toReturn = items;
		}
	);
	return toReturn;
}

export const newForm = async (stringJSON, route, createdForm) => {
	let toReturn = false;
	try {
		if(!createdForm) {
			await executeQuery('DELETE FROM Forms WHERE id=(SELECT id FROM Forms WHERE route = ? ORDER BY id DESC LIMIT 1);', [route]);
		}
		const persist = await executeQuery('INSERT INTO Forms (stringJSON, route) VALUES (?,?);', [stringJSON, route]);
		toReturn = true;
	} catch (error) {
		console.log(error);
    }
	return toReturn;
}

export const deleteForm = async (formId) => {
	await executeQuery('DELETE FROM Forms WHERE id = ?;', [formId]);
}

export const getFormByRoute = async (route) => {
	let toReturn = [];
	await executeQuery('select * from Forms where route = ? order by id desc;', [route]).then(
		items => {
			toReturn = items;
		}
	);
	return toReturn;
}

export const deleteFormByRoute = async (route) => {
	try {
		if(route == routes.dadosMecanica) {
			await executeQuery('DELETE FROM Forms WHERE id=(SELECT id FROM Forms WHERE route = ? ORDER BY id DESC LIMIT 1);', [route]);
		} else {			
			await executeQuery('DELETE FROM Forms WHERE route = ? ;', [route]);
		}
	} catch (error) {
		console.log(error);
	}
}

export const selectFormUsers = async (name) => {
	let toReturn = [];
	const queryName = '%' + name + '%';

	await executeQuery('select distinct * from FormUsers where name like ? ;', [queryName]).then(
		items => {
			toReturn = items;
		}
	);
	return toReturn;
}

export const selectLastFormUser = async () => {
	let toReturn = 0;
	await executeQuery('select max(id) from FormUsers;', []).then(
		items => {
			if (items[0]['max(id)']) {
				toReturn = items[0]['max(id)'];
			}
		}
	);
	return toReturn;
}

export const newFormUser = async (id, name) => {
	let toReturn = false;
	try {
		const persist = await executeQuery('INSERT INTO FormUsers (id, name) VALUES (?,?);', [id, name]);
		toReturn = true;
	} catch (error) {
		console.log(error);
    }
	return toReturn;
}

export const selectWeather = async () => {
	let toReturn = [];

	await executeQuery('select * from Weather;', []).then(
		items => {
			toReturn = items;
		}
	);
	return toReturn;
}

export const selectLastWeather = async () => {
	let toReturn = 0;
	await executeQuery('select max(id) from Weather;', []).then(
		items => {
			if (items[0]['max(id)']) {
				toReturn = items[0]['max(id)'];
			}
		}
	);
	return toReturn;
}

export const newWeather = async (id, name) => {
	let toReturn = false;
	try {
		const persist = await executeQuery('INSERT INTO Weather (id, name) VALUES (?,?);', [id, name]);
		toReturn = true;
	} catch (error) {
		console.log(error);
    }
	return toReturn;
}

export const selectRestrictionReason = async () => {
	let toReturn = [];

	await executeQuery('select * from RestrictionReason;', []).then(
		items => {
			toReturn = items;
		}
	);
	return toReturn;
}

export const selectLastRestrictionReason = async () => {
	let toReturn = 0;
	await executeQuery('select max(id) from RestrictionReason;', []).then(
		items => {
			if (items[0]['max(id)']) {
				toReturn = items[0]['max(id)'];
			}
		}
	);
	return toReturn;
}

export const newRestrictionReason = async (id, desc) => {
	let toReturn = false;
	try {
		const persist = await executeQuery('INSERT INTO RestrictionReason (id, desc) VALUES (?,?);', [id, desc]);
		toReturn = true;
	} catch (error) {
		console.log(error);
    }
	return toReturn;
}