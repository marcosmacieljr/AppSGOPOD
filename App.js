import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Text, Button, Alert, View, TextInput, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { startApp } from './db/sqliteConnection';
import { logIn, checkLogin, UserContext, logOut } from './businessLayer/login';
import { syncApp, syncFormUsers, syncWeather, syncRestrictionReason, gravarLogLocal, getCurrentDate } from './businessLayer/forms';
import FormularioTerceiros from './src/FormularioTerceiros';
import DadosOperacao from './src/DadosOperacao';
import DadosVia from './src/DadosVia';
import DadosMecanica from './src/DadosMecanica';
import { styles } from './styles/styles';
import { ButtonP, ButtonG } from './components/Button';
import { Message } from './components/AnimatedMessage';
import { LogBox } from "react-native";
import { logger } from "react-native-logs";

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications



var log = logger.createLogger();

function App(props) {
    const context = React.useContext(UserContext);
    const [message, setMessage] = useState(undefined);
    const [loginUserId, setLoginUserId] = useState(undefined);
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    const [loginScreen, setLoginScreen] = useState(false);
    const [loginForm, setLoginForm] = useState({ username: '', password: '' });

    const [hidePass, setHidePass] = useState(true);

    const startAsync = async () => {
        console.log('Entrou no startAsync')
        await startApp();
        
        //await gravarLogLocal(getCurrentDate() + " - Aplicação iniciada.");

        const syncUsers = await syncFormUsers();
        if (syncUsers?.message) {
            setMessage(syncUsers.message);
        }

        const syncW = await syncWeather();
        if (syncW?.message) {
            setMessage(syncW.message);
        }

        const syncRR = await syncRestrictionReason();
        if (syncRR?.message) {
            setMessage(syncRR.message);
        }

        const userData = await checkLogin();
        if (userData?.userId) {
            context.userId = userData.userId;
            context.userCd = userData.userCd;
            setLoginUserId(context.userId);
            const syncResponse = await syncApp(context.userId);
            if (syncResponse?.message) {
                setMessage(syncResponse.message);
            }
        }
    }

    const loginApp = async (callback) => {
             
        if (loginForm.username != "" && loginForm.password != "") {
            
            const loginResponse = await logIn(loginForm.username, loginForm.password);
            
            if (loginResponse.userId != undefined) {
                context.userId = loginResponse.userId;
                context.userCd = loginResponse.userCd;
                setLoginUserId(context.userId);
                setLoadingComplete(false);
                setLoginScreen(false);
                // Gravar log com login de sucesso log = data + hora loginResponse.message 
               await gravarLogLocal(getCurrentDate() + " - Login efetuado com sucesso!");
               console.log('passougravar')

               callback();
            } else {
                callback();
                await gravarLogLocal(getCurrentDate() + " - Login não efetuado - " + loginResponse.message);
                setMessage(loginResponse.message);
                
            }

        } else {
            callback();
            await gravarLogLocal(getCurrentDate() + " - Login não efetuado - Usuário ou Senha inválidos.");
            setMessage("Usuário ou Senha inválidos");

        }

    }



//Exemplo de download a partir de uma URL da web
 
    const download = async () => {
    var FileSystem = require("expo-file-system");
    FileSystem.downloadAsync(
    'http://techslides.com/demos/sample-videos/small.mp4',
    FileSystem.documentDirectory + 'small.mp4'
  )
  .then(({ uri }) => {
    console.log('FILE WRITTEN!');
    console.log(uri);
    saveFile(uri);
    //Alert.alert(
     // "App",
    //  uri
   // );
  //this.setState({uri: uri});
})
.catch(error => {
//Alert.alert(
 // "App",
  //error
//);
console.error(error);
});
}



   exibirConfirmacao = () =>
	Alert.alert(
		"Confirmação",
		"Caso não tenha salvo, você irá perder o que preencheu, tem certeza que deseja voltar?",
		[
			{
				text: "Não",
				onPress: () => console.log("Nada a fazer")
			},
			{ text: "Sim", onPress: () => props.navigation.navigate('App', { userCd: context.userCd }) }


		]
	);




    const logoutApp = async (callback) => {
        context.userId = await logOut();
        context.userCd = undefined;
        loginForm.username = "";
        loginForm.password = "";
        callback();
        setLoginUserId(undefined);
        await gravarLogLocal(getCurrentDate() + " - Logout efetuado com sucesso.");
        setLoginScreen(true);
        
    }



    if (isLoadingComplete) {
        if (loginScreen) {
           
            return (
                
                <View style={styles.background}>
                    <KeyboardAvoidingView behavior='position' >
                        <View style={styles.title}>
                            <Text style={styles.titleText}>SGO</Text>
                            <Text style={styles.title1}>1.0.2</Text>
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.label}>Usuário</Text>
                            <TextInput placeholder='' style={styles.textInput}
                                onChangeText={(e) => setLoginForm({ ...loginForm, username: e })}>
                            </TextInput>
                            <Text style={styles.label}>Senha</Text>
                            <View>
                                <View style={styles.inputArea}>
                                    <TextInput 
                                        style={styles.inputSenha}
                                        placeholder='Digite a sua Senha'
                                        placeholderTextColor='#222'
                                        autoCorrect={false}
                                        onChangeText={(e) => setLoginForm({ ...loginForm, password: e })}
                                        secureTextEntry={hidePass}
                                    />
                                    <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass) }>
                                        { hidePass ? 
                                        <Ionicons name="eye" color="gray" size={25} />
                                        :
                                        <Ionicons name="eye-off" color="gray" size={25} />                     
                                    }
                                    </TouchableOpacity>
                                </View>
                            </View>                            
                        </View>
                    </KeyboardAvoidingView>
                    <View style={{ width: 200, marginTop: 20 }}>
                        <ButtonP title="Login" onPress={loginApp} />
                    </View>
                    <View style={{ width: 200, marginTop: 20 }}>
                        <ButtonP title="Voltar" onPress={() => setLoginScreen(false)}/> 
                    </View>
                    <Message message={message} callback={() => setMessage(undefined)} />
                </View>
            );
        } else {            
            return (
                <View style={styles.mainView}>
                   <View style={styles.containerLogo}>
                        <Image
                            source={require('./src/assets/icon_CPIA.png')}
                        />
                        <View>
                            {loginUserId ? <ButtonP title="Logout" onPress={logoutApp} /> : <ButtonP title="Login" onPress={() => setLoginScreen(true)} />}
                        </View>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.sgoTitle}>SGO</Text>
                        <Text style={styles.title1}>1.0.2</Text>
                        <ButtonG title="Formulário de Terceiros"
                            onPress={() => props.navigation.navigate('FormularioTerceiros', { userCd: context.userCd })} />
                        <ButtonG title="Tomada de dados da Operação"
                            onPress={() => props.navigation.navigate('DadosOperacao', { userCd: context.userCd })} />
                        <ButtonG title="Tomada de dados da Mecânica"
                            onPress={() => props.navigation.navigate('DadosMecanica', { userCd: context.userCd })} />
                        <ButtonG title="Tomada de dados da Via"
                            onPress={() => props.navigation.navigate('DadosVia', { userCd: context.userCd })} />
                        
                        <Message message={message} callback={() => setMessage(undefined)} />
                    </View>
                </View>
            );
        }
    } else {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0174DF" />
                <Text style={styles.loadingText}>Carregando</Text>
                <AppLoading startAsync={startAsync} onFinish={() => { setLoadingComplete(true) }} onError={console.warn} />
            </View>
        );
    }
}



const AppNavigator = createStackNavigator({
    App: {
        screen: App,
        navigationOptions: {
            headerShown: false,
        }
    },
    FormularioTerceiros: {
        screen: FormularioTerceiros,
        navigationOptions: ({ navigation }) => ({
            title: '     Dados de Terceiros',

            headerLeft: () => <Button
                  onPress={() => exibirConfirmacao()}
                  title="VOLTAR"
                  color="#0174DF"
               />,  

            headerRight: () => 
                <Text style={styles.headerText}>{navigation.state.params.userCd ? navigation.state.params.userCd : ''}</Text>,                
            headerStyle: {
                backgroundColor: '#0174DF',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        })
    },
    DadosOperacao: {

        screen: DadosOperacao,
        navigationOptions: ({ navigation }) => ({
            title: '      Dados da Operação',

            headerLeft: () => <Button
                  onPress={() => exibirConfirmacao()}
                  title="VOLTAR"
                  color="#0174DF"
               />,  


            headerRight: () => <Text style={styles.headerText}>{navigation.state.params.userCd ? navigation.state.params.userCd : ''}</Text>,
            headerStyle: {
                backgroundColor: '#0174DF',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            }

        }
        )

    },
    DadosVia: {
        screen: DadosVia,
        navigationOptions: ({ navigation }) => ({
            title: '      Dados da Via',
            headerLeft: () => <Button
                  onPress={() => exibirConfirmacao()}
                  title="VOLTAR"
                  color="#0174DF"
               />,       
     

            headerRight: () => <Text style={styles.headerText}>{navigation.state.params.userCd ? navigation.state.params.userCd : ''}</Text>,
            headerStyle: {
                backgroundColor: '#0174DF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        })
    },
    DadosMecanica: {
        screen: DadosMecanica,
        navigationOptions: ({ navigation }) => ({
            title: '    Dados da Mecânica',
            headerLeft: () => <Button
                  onPress={() => exibirConfirmacao()}
                  title="VOLTAR"
                  color="#0174DF"
               />,  
            headerRight: () => <Text style={styles.headerText}>{navigation.state.params.userCd ? navigation.state.params.userCd : ''}</Text>,
            headerStyle: {
                backgroundColor: '#0174DF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        })
    }
});   

export default createAppContainer(AppNavigator);