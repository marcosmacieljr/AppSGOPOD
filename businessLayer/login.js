import React from 'react';
import { httpRequest } from '../utils/apiUtils';
import * as constants from '../utils/constants';
import { newUser, deleteUser, selectUsers } from '../db/login';

export const UserContext = React.createContext({userId: undefined, userCd: undefined});

export const checkLogin = async () => {
    try {
    	const response = await selectUsers();
    	if(response.length > 0) {
			return response[0];
		}
	} catch (error) {
		console.log(error);
    }
}

export const userCode = async () => {
    let toReturn;
    try {
        const response = await selectUsers();
        if(response.length > 0) {
            toReturn = response[0].userCd;
        }
        return toReturn;
    } catch (error) {
        console.log(error);
    }
}

export const logIn = async (username, password) => {
    const requestJSON = {
        userApi: username,
        passwordApi: password,
        appUUID: constants.appUUID
    }
  try {
      console.log(requestJSON);
        const response = await httpRequest(requestJSON, constants.routes.login);
    	if(response.userId) {
            const persistUser = await newUser(response.userId, response.userCd);
           if(!persistUser) {
                console.log("ERRO")
    			return {message: constants.errorMessage};
    		}
    	}
        
        return response;
	} catch (error) {
		console.log(error);
        return {message: constants.errorMessage};
    }

}

export const logOut = async () => {
    await deleteUser();
    return undefined;
}