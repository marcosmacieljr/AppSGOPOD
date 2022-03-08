export const appUUID = 'f438c56c-9305-4178-83f0-642786470c34';
//export const appAddress = 'http://ntf19:9080/sgo/';
//export const appAddress = 'https://sgo-ftl-hom.csn.com.br/sgo/';
export const appAddress = 'http://192.168.33.14:8080/sgo/';
//export const appAddress = 'https://sgo-ftl.csn.com.br/sgo/';
export const errorMessage = 'Erro ao realizar operação';
export const notConnectedMessage = 'Não conectado à internet';
export const timeoutMessage = 'Tempo limite de conexão esgotado';
export const syncErrorMessage = 'Erro ao sincronizar com servidor';
export const routes = {
	login : 'LoginWS.seam',
	formTerceiros : 'FormularioTerceirosWS.seam',
	dadosMecanica : 'DadosMecanicaWS.seam',
	consultaUsuarios : 'ConsultarUsuarioWS.seam',
	consultaTempo : 'ConsultarTempoWS.seam',
	consultaMotivoRestricao : 'ConsultarMotivoRestricaoWS.seam',
	dadosOperacao : 'DadosOperacaoWS.seam',
	dadosVia : 'DadosViaWS.seam'
};