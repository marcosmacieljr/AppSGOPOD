import NetInfo from "@react-native-community/netinfo";
import axios from "axios";
import * as constants from './constants';

export const httpRequest = async (json, route) => {
	
	let toReturn = false;

	try {		
		const netInfo = await NetInfo.fetch();						
		//if(netInfo.isInternetReachable) { //antes era essa ssinatura ai parou de funcionar, saber por que esta retornando undefined
		if(netInfo.isConnected) {						
			const params = await urlParser(json);						
			console.log(route); //mostrar a rota por onde esta passando no momento
			console.log(params + "PARAMETROS");	//mostra os parametros que estão sendo passados					
			await axios.get(constants.appAddress + route + params, {timeout: 30 * 1000}).then(res => {				
				toReturn = res.data;						
			}).catch(err => {
				if (err.code === 'ECONNABORTED' || err.code == undefined) {					
					toReturn = {message: constants.timeoutMessage};
				} else {					
					toReturn = {message: constants.errorMessage};
				}
			});
		} else {			
			toReturn = {message: constants.notConnectedMessage};
		}
    } catch (error) {
		console.log('Error no catch: ' + error);
		toReturn = {message: constants.errorMessage};
	}	
    return toReturn;
}

const urlParser = async (json) => {
	let toReturn = "";
	if(Object.getOwnPropertyNames(json).length > 0){
		toReturn = "?";
		for (key in json) {
			if (json.hasOwnProperty(key)) {								
				toReturn += encodeURI(key) + "=" + encodeURI(json[key]);
				console.log(encodeURI(key) + " : " + encodeURI(json[key])); //mostra no console as keys e valores passados pelo JSON
			}
			toReturn += "&";
		}
		toReturn = toReturn.slice(0, -1);
	}
	return toReturn;
}