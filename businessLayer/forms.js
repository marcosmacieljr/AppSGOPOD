import React, { useState } from 'react';
import { View } from 'react-native';
import { httpRequest } from '../utils/apiUtils';
import * as constants from '../utils/constants';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { getAssetId, setAssetId, getAlbumId, setAlbumId } from '../db/sqliteConnection';
import {
	newForm,
	deleteForm,
	selectForms,
	selectLastFormUser,
	newFormUser,
	selectFormUsers,
	getFormByRoute,
	deleteFormByRoute,
	selectLastWeather,
	newWeather,
	selectWeather,
	selectLastRestrictionReason,
	newRestrictionReason,
	selectRestrictionReason
} from '../db/forms';
import { UserContext } from './login';
import { ButtonP } from '../components/Button';
import { Message } from '../components/AnimatedMessage';

export function SendForm(props) {
	const context = React.useContext(UserContext);
	const [message, setMessage] = useState(undefined);
	const sendFormApp = async (callback) => {

		const requiredField = props.req(props.json);
		console.log("JSON de Retorno do RequiredField")
		console.log(requiredField)
		if (requiredField == "") {
			const response = await send(props.json, props.route, context.userId, props.createdForm);
			//Mensagem retornada em string
			var responseDataString = response.data;
			console.log("1:" + responseDataString);
			//Mensagem padrão
			var msgRetornoSincronizacao = "Formulário salvo, porém, não sincronizado.";

			//Caso obtenha sucesso na comunicação
			if (response.message == constants.timeoutMessage ||
				response.message == constants.notConnectedMessage ||
				response.data) {
					console.log("2:" + responseDataString);
					console.log(typeof responseDataString.includes === "undefined");

					if(responseDataString != true && responseDataString != false){
						if (responseDataString.includes('sucesso')) {
							await deleteFormByRoute(props.route);
							msgRetornoSincronizacao = responseDataString + " Boletim sincronizado com sucesso!";
							await gravarLogLocal(getCurrentDate() + " - " + msgRetornoSincronizacao);
						}
					}

				

				props.callback();
			} else {

		
				//Não houve sucesso ao sincronizar por conta de alguma crítica da API
				msgRetornoSincronizacao = "";
				await gravarLogLocal(getCurrentDate() + " - " +  response.message);
				setMessage(response.message);
				


			}
		} else {
			
			setMessage(requiredField);
		}

		if (msgRetornoSincronizacao != "" && msgRetornoSincronizacao != undefined) {
			await gravarLogLocal(getCurrentDate() + " - " + msgRetornoSincronizacao);
			alert(msgRetornoSincronizacao);
		}
		callback();
	}

	return (
		<View>
			<View style={{ width: 400, marginVertical: 20, marginTop: 20, alignItems: 'center', width: '100%' }}>
				<ButtonP title={props.title} onPress={sendFormApp} />
			</View>
			<Message message={message} callback={() => setMessage(undefined)} />
		</View>
	);
}

export const send = async (json, route, userId, createdForm) => {
	try {
		console.log("entrou no send")
		if (userId && json.idBoletim != '') {

			json.userId = userId;
			const response = await httpRequest(json, route);
			if (response.data && !createdForm) {
				//await deleteFormByRoute(route);

			}
			if (response.message == constants.timeoutMessage ||
				response.message == constants.notConnectedMessage) {
				const stringJSON = await JSON.stringify(json);
				const persistForm = await newForm(stringJSON, route, createdForm);
			}
			console.warn(response);
			return response;
		} else {
			const stringJSON = await JSON.stringify(json);
			const persistForm = await newForm(stringJSON, route, createdForm);
			return { data: persistForm };
		}
	} catch (error) {
		console.log(error);
		return { message: constants.errorMessage };
	}
}

export const syncApp = async (userId) => {
	try {
		let totalForms = 0;
		let syncForms = 0;
		if (userId) {
			const dbForms = await selectForms();
			await Promise.all(dbForms.map(async (item) => {
				const jsonObject = await JSON.parse(item.stringJSON);
				if (jsonObject.idBoletim != '') {
					jsonObject.userId = userId;
					const response = await httpRequest(jsonObject, item.route);
					if (response.data) {
						deleteForm(item.id);
						syncForms += 1;
					}
				}
				totalForms += 1;
			}));
			return { message: syncForms + " de " + totalForms + " formulários sincronizados" }

		}
	} catch (error) {
		console.log(error);
		return { message: constants.syncErrorMessage };
	}
}



export const updateForms = async (route) => {
	let toReturn = null;

	const forms = await getFormByRoute(route);
	if (forms.length > 0) {
		toReturn = JSON.parse(forms[0].stringJSON);
	}

	return toReturn;
}

export const syncFormUsers = async () => {
	const idLastUserApi = await selectLastFormUser();
	const requestJSON = {
		idLastUserApi: idLastUserApi
	}
	try {
		const response = await httpRequest(requestJSON, constants.routes.consultaUsuarios);
		if (response.data) {
			await Promise.all(response.data.map(async (item) => {
				await newFormUser(item.id, item.nome);
			}));
		}
	} catch (error) {
		console.log(error);
		return { message: constants.syncErrorMessage };
	}

	return {};
}

export const queryFormUsers = async (text) => {
	let toReturn = [];
	try {
		if (text && text.length > 2) {
			const query = await selectFormUsers(text);
			toReturn = query.slice(0, 5);
		}
	} catch (error) {
		console.log(error);
	}
	return toReturn;
}

export const syncWeather = async () => {
	const idLastWeatherApi = await selectLastWeather();
	const requestJSON = {
		idLastWeatherApi: idLastWeatherApi
	}

	try {
		const response = await httpRequest(requestJSON, constants.routes.consultaTempo);
		if (response.data) {
			await Promise.all(response.data.map(async (item) => {
				await newWeather(item.id, item.nome);
			}));
		}
	} catch (error) {
		console.log(error);
		return { message: constants.syncErrorMessage };
	}

	return {};
}

export const getWeather = async () => {
	let toReturn = [];
	try {
		toReturn = await selectWeather();
	} catch (error) {
		console.log(error);
	}
	return toReturn;
}

export const syncRestrictionReason = async () => {
	const idLastRestrictionReasonApi = await selectLastRestrictionReason();
	const requestJSON = {
		idLastRestrictionReasonApi: idLastRestrictionReasonApi
	}

	try {
		const response = await httpRequest(requestJSON, constants.routes.consultaMotivoRestricao);
		if (response.data) {
			await Promise.all(response.data.map(async (item) => {
				await newRestrictionReason(item.id, item.desc);
			}));
		}
	} catch (error) {
		console.log(error);
		return { message: constants.syncErrorMessage };
	}

	return {};
}

export const getRestrictionReason = async () => {
	let toReturn = [];
	try {
		toReturn = await selectRestrictionReason();
	} catch (error) {
		console.log(error);
	}
	return toReturn;
}




const albumName = 'LOGS_APP_SGO';
const assetList = [];
const albumList = [];




export const gravarLogLocal = async (text) => {
    //Pode ser substituida pela permission, minha versão deu deprecated então usei o do medialibrary
	console.log('Passou aqui');
    const permission = await MediaLibrary.requestPermissionsAsync();
	console.log('Passou aqui depois do permission');
	console.log('checking access');

	try {
		console.log('Passou aqui2');
		const { status } = await MediaLibrary.requestPermissionsAsync();
		if (status !== 'granted') {
		  console.log('no access')
		  return;
		}
		console.log('status ok')
	  }
	  catch (ex) {
		console.log('no access: exception')
	  }


  
    if (permission.granted) {
        const fileUri = FileSystem.documentDirectory + 'Log_SGO.txt';
        const fileText = await readFile(fileUri);
        if(fileText){
            text += '\n' + fileText;
            await deleteFile(fileUri);
        }
        await writeFile(fileUri, text);
    }
  }



const readFile = async (uri) => {
  let toReturn = null;
  try {
    toReturn = await FileSystem.readAsStringAsync(uri, FileSystem.UTF8);
    const assetId = await getAssetId();
    if (assetId) {
      assetList.push(assetId);
    }
    const albumId = await getAlbumId();
    if(albumId){
        albumList.push(albumId);
    }
  } catch (error) {
    console.log(error);
  }
  return toReturn;
}

const writeFile = async (uri, text) => {
  try {
    await FileSystem.writeAsStringAsync(uri, text, { encoding: FileSystem.EncodingType.UTF8 });
    const asset = await MediaLibrary.createAssetAsync(uri);
    const album = await MediaLibrary.createAlbumAsync(albumName, asset, true);
    assetList.push(asset.id);
    albumList.push(album.id);
    await setAssetId(asset.id);
    await setAlbumId(album.id);
  } catch (error) {
    console.log(error);
  }
}

const deleteFile = async (uri) => {
    try {
      await FileSystem.deleteAsync(uri);
      await MediaLibrary.deleteAssetsAsync(assetList);
      await MediaLibrary.deleteAlbumsAsync(albumList, true);
      assetList.length = 0;
      albumList.length = 0;
    } catch (error) {
      console.log(error);
    }
  }

export const getCurrentDate=()=>{

	
// Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;

//  o resultado
return str_data + ' às ' + str_hora;
}