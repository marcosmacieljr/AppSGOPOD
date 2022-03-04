import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.db');
export const executeQuery = async (sql, params = []) => {
	return new Promise((resolve, reject) => db.transaction(tx => {
		tx.executeSql(sql, params, (_, { rows }) => resolve(rows._array), reject)
	}))
};

export const startApp = async () => {
	
	// DESCOMENTAR para quando quiser apagar as tabelas para recriar novamente
	// SE FOR NECESSÁRIO atualizar o expo não deixar comentada pois é um dos motivos para novos erros
	
	await executeQuery('DROP TABLE Forms;'); 
	await executeQuery('DROP TABLE Users;'); 
	
	await executeQuery('CREATE TABLE IF NOT EXISTS Users (userId, userCd);');
	await executeQuery('CREATE TABLE IF NOT EXISTS Forms (id integer primary key not null, stringJSON, route);');
	await executeQuery('CREATE TABLE IF NOT EXISTS FormUsers (id, name);');
	await executeQuery('CREATE TABLE IF NOT EXISTS Weather (id integer, name);');
	await executeQuery('CREATE TABLE IF NOT EXISTS RestrictionReason (id integer, desc);');
	await executeQuery('CREATE TABLE IF NOT EXISTS Logfile (id TEXT);');
	await executeQuery('CREATE TABLE IF NOT EXISTS Logfolder (id TEXT);');
    await executeQuery('INSERT INTO Logfile (id) SELECT NULL WHERE NOT EXISTS( SELECT 1 FROM Logfile );');
	await executeQuery('INSERT INTO Logfolder (id) SELECT NULL WHERE NOT EXISTS( SELECT 1 FROM Logfolder );');
}

//Arquivo novo na camada de acesso ao db
export const setAssetId = async (id) => {
	try {
	  await executeQuery('UPDATE Logfile set id=?;', [id]);
	} catch (error) {
	  console.log(error);
	}
  }
  
  export const getAssetId = async () => {
	let toReturn = null;
	try {
	  const logFile = await executeQuery('SELECT * FROM Logfile;');
	  toReturn = logFile[0].id;
	} catch (error) {
	  console.log(error);
	}
	return toReturn;
  }
  
  export const setAlbumId = async (id) => {
	try {
	  await executeQuery('UPDATE Logfolder set id=?;', [id]);
	} catch (error) {
	  console.log(error);
	}
  }
  
  export const getAlbumId = async () => {
	let toReturn = null;
	try {
	  const LogFolder = await executeQuery('SELECT * FROM Logfolder;');
	  toReturn = LogFolder[0].id;
	} catch (error) {
	  console.log(error);
	}
	return toReturn;
  }