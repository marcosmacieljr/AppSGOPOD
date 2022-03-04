import CheckBox from 'react-native-check-box';
import React, { useState, useEffect, useRef } from 'react';
import NumericInput from '@wwdrew/react-native-numeric-textinput';
import { SendForm, queryFormUsers, updateForms, gravarLogLocal } from '../businessLayer/forms';
import { routes } from '../utils/constants';
import { Text, View, Button, Alert, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
import TimePicker from 'react-native-simple-time-picker';
import { styles } from '../styles/styles';
import Autocomplete from 'react-native-autocomplete-input';
import Moment from 'moment';
import { ButtonG } from '../components/Button';
import { deleteFormByRoute } from '../db/forms';
import { Picker } from '@react-native-picker/picker';

export default function DadosMecanica(props) {
	const [defaultForm, setDefaultForm] = useState(undefined);
	const [createdForm, setCreatedForm] = useState(undefined);
	const [resultQuery1, setResultQuery1] = useState([]);
	const [queryDados1, setQueryDados1] = useState('');
	const [resultQuery2, setResultQuery2] = useState([]);
	const [queryDados2, setQueryDados2] = useState('');

	const [dateSelect, setDateSelect] = useState({
		date1: Moment(new Date()).format('DD/MM/YYYY'),
		date2: Moment(new Date()).format('DD/MM/YYYY'),
		selectedHours2: 0,
		selectedMinutes2: 0
	});

	const [dadosForm, setDadosForm] = useState({
		idBoletim: '',
		investigador1: '',
		investigador2: '',
		idInvestigador1: 0,
		idInvestigador2: 0,
		dataInspecao: dateSelect.date2 + ' ' + dateSelect.selectedHours2 + ':' + dateSelect.selectedMinutes2,
		descricao: '',
		subidaFriso: false,
		aberturaBitola: false,
		objetosEstranhos: false,
		elevacaoRoda: false,
		fraturaTrilho: false,
		observacoesMecanicaDescarrilamento: '',
		pesoBruto: '0.00',
		pesoPorEixo: '0.00',
		vazioCarregadoMisto: 'V',
		latDesnivExcCarga: 'Lat.Desniveladas',
		cabDesnivNormal: 'Cab.Desniveladas',
		vagao: '',
		posicaoTrem: '',
		cabeceiraAFrente: 'A',
		ultimaRevisao: dateSelect.date1,
		vagaoReincidente: false,
		observacaoPVD: '',
		primeiroTruque: true,
		frente: false,
		primeiraRoda: 'RD1',
		primeiraRodaStatus: 'Nova',
		primeiraRodaStatusOutra: '',
		travessaTruque: 'Boa',
		travessaTruqueOutra: '',
		travessaPrato: 'Boa',
		travessaPratoOutra: '',
		rodasConcavas: false,
		tipoTruque: 'métrica',
		pesoAntecede: '0.00',
		lotacaoAntecede: '0.00',
		pesoBrutoAntecede: '0.00',
		alturaAntecede: '',
		pesoDescarrilou: '0.00',
		lotacaoDescarrilou: '0.00',
		pesoBrutoDescarrilou: '0.00',
		alturaDescarrilouCA: '',
		alturaDescarrilouCB: '',
		pesoPost: '0.00',
		lotacaoPost: '0.00',
		pesoBrutoPost: '0.00',
		alturaPost: '',
		contatoBatentes: false,
		contatoBatentesObs: '',
		diferencaAltura: false,
		diferencaAlturaObs: '',
		contatoIrregular: false,
		contatoIrregularObs: '',
		vagaoIsolado: false,
		torneiraAngular: false,
		irregularidadeTorneiraAngular: false,
		irregularidadePistao: false,
		vagoesIsolados: '',
		emBlocos: false,
		obsSisFreios: '',
		custosMateriais: '0.00',
		custosDeslocamentoEstadia: '0.00',
		custosPessoal: '0.00',
		custosTotal: '0.00',
		altFrisoAE4: '',
		espFrisoAE4: '',
		altBandAE4: '',
		altCunhaFricAE4: '',
		altCunhaFricAE4Tipo: '',
		concavidadeDaRodaE4: '',
		altFrisoAE3: '',
		espFrisoAE3: '',
		altBandAE3: '',
		altCunhaFricAE3: '',
		altCunhaFricAE3Tipo: '',
		concavidadeDaRodaE3: '',
		altFrisoAE2: '',
		espFrisoAE2: '',
		altBandAE2: '',
		altCunhaFricAE2: '',
		altCunhaFricAE2Tipo: '',
		concavidadeDaRodaE2: '',
		altFrisoAE1: '',
		espFrisoAE1: '',
		altBandAE1: '',
		altCunhaFricAE1: '',
		altCunhaFricAE1Tipo: '',
		concavidadeDaRodaE1: '',
		altFrisoAD4: '',
		espFrisoAD4: '',
		altBandAD4: '',
		altCunhaFricAD4: '',
		altCunhaFricAD4Tipo: '',
		concavidadeDaRodaD4: '',
		altFrisoAD3: '',
		espFrisoAD3: '',
		altBandAD3: '',
		altCunhaFricAD3: '',
		altCunhaFricAD3Tipo: '',
		concavidadeDaRodaD3: '',
		altFrisoAD2: '',
		espFrisoAD2: '',
		altBandAD2: '',
		altCunhaFricAD2: '',
		altCunhaFricAD2Tipo: '',
		concavidadeDaRodaD2: '',
		altFrisoAD1: '',
		espFrisoAD1: '',
		altBandAD1: '',
		altCunhaFricAD1: '',
		altCunhaFricAD1Tipo: '',
		concavidadeDaRodaD1: '',
		folgaAmparoAEB: '',
		tipoFolgaAmparoAEB: '',
		folgaAmparoAEA: '',
		tipoFolgaAmparoAEA: '',
		folgaAmparoADB: '',
		tipoFolgaAmparoADB: '',
		folgaAmparoADA: '',
		tipoFolgaAmparoADA: '',
		balanceamento4mm: '0',
		balanceamento19mmSumA: '0',
		balanceamento19mmSumB: '0',
		bitolaIntRod1: '',
		bitolaIntRod2: '',
		bitolaIntRod3: '',
		bitolaIntRod4: '',
		numBotoesBE: '',
		numBotoesAE: '',
		numBotoesBD: '',
		numBotoesAD: '',
		pratoPiaoB: '',
		pratoPiaoA: '',
		altEngCabB: '',
		altEngCabA: '',
		marcasAbrasAmpBalanco: false,
		cilindroFreio: ''
	});

	const radio_props = [
		{ label: 'Não	', value: false },
		{ label: 'Sim', value: true }
	];

	const radio_props2 = [
		{ label: 'Vazio       ', value: 'V' },
		{ label: 'Carregado   ', value: 'C' },
		{ label: 'Misto       ', value: 'M' }
	];

	const radio_props3 = [
		{ label: 'Lat.Desniveladas  ', value: 'Lat.Desniveladas' },
		{ label: 'Exc.Carga  ', value: 'Exc.Carga' }
	];

	const radio_props4 = [
		{ label: 'métrica      ', value: 'métrica' },
		{ label: 'Larga  ', value: 'Larga' }
	];

	const radio_props5 = [
		{ label: 'Cab.Desniveladas  ', value: 'Cab.Desniveladas' },
		{ label: 'Normal  ', value: 'Normal' }
	];

	const requiredFields = (obj) => {
		toReturn = "";
		if (obj.investigador1 == '' || obj.idInvestigador1 == 0) {
			toReturn += "Investigador deve ser preenchido\n"
		}
		if (obj.idInvestigador1 != 0 && obj.idInvestigador1 == obj.idInvestigador2) {
			toReturn += "Investigador 1 igual ao Investigador 2\n"
		}
		return toReturn;
	}

	const vazioCarregadoMisto = useRef(null);
	const latDesnivExcCarga = useRef(null);
	const cabDesnivNormal = useRef(null);
	const vagaoReincidente = useRef(null);
	const marcasAbrasAmpBalanco = useRef(null);
	const frente = useRef(null);
	const rodasConcavas = useRef(null);
	const tipoTruque = useRef(null);
	const contatoBatentes = useRef(null);
	const diferencaAltura = useRef(null);
	const contatoIrregular = useRef(null);
	const vagaoIsolado = useRef(null);
	const torneiraAngular = useRef(null);
	const irregularidadeTorneiraAngular = useRef(null);
	const irregularidadePistao = useRef(null);
	const emBlocos = useRef(null);
	const timeSelect1 = useRef(null);

	const exibirConfirmacaoLimpezaForm = () =>
	
		Alert.alert(
			"Confirmação",
			"Deseja realmente limpar o formulário?",
			[
				{
					text: "Não",
					onPress: () => console.log("Nada a fazer")
				},
				{ text: "Sim", onPress: () => (limpaRecarregaForm()) }


			]
		);

	const limpaRecarregaForm = async () => {
		await gravarLogLocal(getCurrentDate() + " - Limpando dados do formulário Dados da Mecânica.");
		await deleteFormByRoute(routes.dadosMecanica);
		await onStart();
		setQueryDados1('');
		setQueryDados2('');
		setResultQuery1([]);
	setResultQuery2([]);
		setDadosForm({
			...dadosForm, idBoletim: '',
			investigador1: '',
			investigador2: '',
			idInvestigador1: 0,
			idInvestigador2: 0,
			dataInspecao: dateSelect.date2 + ' ' + dateSelect.selectedHours2 + ':' + dateSelect.selectedMinutes2,
			descricao: '',
			subidaFriso: false,
			aberturaBitola: false,
			objetosEstranhos: false,
			elevacaoRoda: false,
			fraturaTrilho: false,
			observacoesMecanicaDescarrilamento: '',
			pesoBruto: '0.00',
			pesoPorEixo: '0.00',
			vazioCarregadoMisto: 'V',
			latDesnivExcCarga: 'Lat.Desniveladas',
			cabDesnivNormal: 'Cab.Desniveladas',
			vagao: '',
			posicaoTrem: '',
			cabeceiraAFrente: 'A',
			ultimaRevisao: dateSelect.date1,
			vagaoReincidente: false,
			observacaoPVD: '',
			primeiroTruque: true,
			frente: false,
			primeiraRoda: 'RD1',
			primeiraRodaStatus: 'Nova',
			primeiraRodaStatusOutra: '',
			travessaTruque: 'Boa',
			travessaTruqueOutra: '',
			travessaPrato: 'Boa',
			travessaPratoOutra: '',
			rodasConcavas: false,
			tipoTruque: 'métrica',
			pesoAntecede: '0.00',
			lotacaoAntecede: '0.00',
			pesoBrutoAntecede: '0.00',
			alturaAntecede: '',
			pesoDescarrilou: '0.00',
			lotacaoDescarrilou: '0.00',
			pesoBrutoDescarrilou: '0.00',
			alturaDescarrilouCA: '',
			alturaDescarrilouCB: '',
			pesoPost: '0.00',
			lotacaoPost: '0.00',
			pesoBrutoPost: '0.00',
			alturaPost: '',
			contatoBatentes: false,
			contatoBatentesObs: '',
			diferencaAltura: false,
			diferencaAlturaObs: '',
			contatoIrregular: false,
			contatoIrregularObs: '',
			vagaoIsolado: false,
			torneiraAngular: false,
			irregularidadeTorneiraAngular: false,
			irregularidadePistao: false,
			vagoesIsolados: '',
			emBlocos: false,
			obsSisFreios: '',
			custosMateriais: '0.00',
			custosDeslocamentoEstadia: '0.00',
			custosPessoal: '0.00',
			custosTotal: '0.00',
			altFrisoAE4: '',
			espFrisoAE4: '',
			altBandAE4: '',
			altCunhaFricAE4: '',
			altCunhaFricAE4Tipo: '',
			concavidadeDaRodaE4: '',
			altFrisoAE3: '',
			espFrisoAE3: '',
			altBandAE3: '',
			altCunhaFricAE3: '',
			altCunhaFricAE3Tipo: '',
			concavidadeDaRodaE3: '',
			altFrisoAE2: '',
			espFrisoAE2: '',
			altBandAE2: '',
			altCunhaFricAE2: '',
			altCunhaFricAE2Tipo: '',
			concavidadeDaRodaE2: '',
			altFrisoAE1: '',
			espFrisoAE1: '',
			altBandAE1: '',
			altCunhaFricAE1: '',
			altCunhaFricAE1Tipo: '',
			concavidadeDaRodaE1: '',
			altFrisoAD4: '',
			espFrisoAD4: '',
			altBandAD4: '',
			altCunhaFricAD4: '',
			altCunhaFricAD4Tipo: '',
			concavidadeDaRodaD4: '',
			altFrisoAD3: '',
			espFrisoAD3: '',
			altBandAD3: '',
			altCunhaFricAD3: '',
			altCunhaFricAD3Tipo: '',
			concavidadeDaRodaD3: '',
			altFrisoAD2: '',
			espFrisoAD2: '',
			altBandAD2: '',
			altCunhaFricAD2: '',
			altCunhaFricAD2Tipo: '',
			concavidadeDaRodaD2: '',
			altFrisoAD1: '',
			espFrisoAD1: '',
			altBandAD1: '',
			altCunhaFricAD1: '',
			altCunhaFricAD1Tipo: '',
			concavidadeDaRodaD1: '',
			folgaAmparoAEB: '',
			tipoFolgaAmparoAEB: '',
			folgaAmparoAEA: '',
			tipoFolgaAmparoAEA: '',
			folgaAmparoADB: '',
			tipoFolgaAmparoADB: '',
			folgaAmparoADA: '',
			tipoFolgaAmparoADA: '',
			balanceamento4mm: '0',
			balanceamento19mmSumA: '0',
			balanceamento19mmSumB: '0',
			bitolaIntRod1: '',
			bitolaIntRod2: '',
			bitolaIntRod3: '',
			bitolaIntRod4: '',
			numBotoesBE: '',
			numBotoesAE: '',
			numBotoesBD: '',
			numBotoesAD: '',
			pratoPiaoB: '',
			pratoPiaoA: '',
			altEngCabB: '',
			altEngCabA: '',
			marcasAbrasAmpBalanco: false,
			cilindroFreio: ''
		});
	}

	const onStart = async () => {
		const previousForm = await updateForms(routes.dadosMecanica);
		if (previousForm) {
			setDefaultForm(dadosForm);
			setDadosForm(previousForm);
			setQueryDados1(previousForm.investigador1);
			setQueryDados2(previousForm.investigador2);
			vazioCarregadoMisto.current.setState({ is_active_index: radio_props2.findIndex((e) => e.value == previousForm.vazioCarregadoMisto) });
			latDesnivExcCarga.current.setState({ is_active_index: radio_props3.findIndex((e) => e.value == previousForm.latDesnivExcCarga) });
			cabDesnivNormal.current.setState({ is_active_index: radio_props5.findIndex((e) => e.value == previousForm.cabDesnivNormal) });
			vagaoReincidente.current.setState({ is_active_index: previousForm.vagaoReincidente ? 1 : 0 });
			marcasAbrasAmpBalanco.current.setState({ is_active_index: previousForm.marcasAbrasAmpBalanco ? 1 : 0 });
			frente.current.setState({ is_active_index: previousForm.frente ? 1 : 0 });
			rodasConcavas.current.setState({ is_active_index: previousForm.rodasConcavas ? 1 : 0 });
			tipoTruque.current.setState({ is_active_index: radio_props4.findIndex((e) => e.value == previousForm.tipoTruque) });
			contatoBatentes.current.setState({ is_active_index: previousForm.contatoBatentes ? 1 : 0 });
			diferencaAltura.current.setState({ is_active_index: previousForm.diferencaAltura ? 1 : 0 });
			contatoIrregular.current.setState({ is_active_index: previousForm.contatoIrregular ? 1 : 0 });
			vagaoIsolado.current.setState({ is_active_index: previousForm.vagaoIsolado ? 1 : 0 });
			torneiraAngular.current.setState({ is_active_index: previousForm.torneiraAngular ? 1 : 0 });
			irregularidadeTorneiraAngular.current.setState({ is_active_index: previousForm.irregularidadeTorneiraAngular ? 1 : 0 });
			irregularidadePistao.current.setState({ is_active_index: previousForm.irregularidadePistao ? 1 : 0 });
			emBlocos.current.setState({ is_active_index: previousForm.emBlocos ? 1 : 0 });
			const dateHour = previousForm.dataInspecao.split(' ');
			const hourMinute = dateHour[1].split(':');
			timeSelect1.current.setState({ selectedHours: parseInt(hourMinute[0]), selectedMinutes: parseInt(hourMinute[1]) });
			setDateSelect({
				date1: previousForm.ultimaRevisao,
				date2: dateHour[0],
				selectedHours2: parseInt(hourMinute[0]),
				selectedMinutes2: parseInt(hourMinute[1])
			});
		}
	}

	const createNewForm = async () => {
		setDadosForm(defaultForm);
		setQueryDados1('');
		setQueryDados2('');
		vazioCarregadoMisto.current.setState({ is_active_index: 0 });
		latDesnivExcCarga.current.setState({ is_active_index: 0 });
		cabDesnivNormal.current.setState({ is_active_index: 0 });
		vagaoReincidente.current.setState({ is_active_index: 0 });
		marcasAbrasAmpBalanco.current.setState({ is_active_index: 0 });
		frente.current.setState({ is_active_index: 0 });
		rodasConcavas.current.setState({ is_active_index: 0 });
		tipoTruque.current.setState({ is_active_index: 0 });
		contatoBatentes.current.setState({ is_active_index: 0 });
		diferencaAltura.current.setState({ is_active_index: 0 });
		contatoIrregular.current.setState({ is_active_index: 0 });
		vagaoIsolado.current.setState({ is_active_index: 0 });
		torneiraAngular.current.setState({ is_active_index: 0 });
		irregularidadeTorneiraAngular.current.setState({ is_active_index: 0 });
		irregularidadePistao.current.setState({ is_active_index: 0 });
		emBlocos.current.setState({ is_active_index: 0 });
		timeSelect1.current.setState({ selectedHours: 0, selectedMinutes: 0 });
		setDateSelect({
			date1: Moment(new Date()).format('DD/MM/YYYY'),
			date2: Moment(new Date()).format('DD/MM/YYYY'),
			selectedHours2: 0,
			selectedMinutes2: 0
		});
		setDefaultForm(undefined);
		setCreatedForm(true);
	}

	const somenteInteiro = (val) => {
		const er = /[^-0-9]/g;
		er.lastIndex = 0;
		return val.replace(er, "");
	}

	useEffect(() => {
		onStart();
	}, []);

	const regex = /\+/gi;

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.backgroundDadosMecanica}>
			<ScrollView>
				{defaultForm ? <Button title={'Novo Formulário'} onPress={() => createNewForm()} /> : null}
				<View style={{ marginLeft: 8, marginRight: 8 }}>

					<Text style={styles.titulo2}>Número do Boletim</Text>
					<TextInput keyboardType={'decimal-pad'} onChangeText={(e) => setDadosForm({ ...dadosForm, idBoletim: e })} value={dadosForm.idBoletim} style={styles.shortInput} />

					<Text style={styles.titulo1}>1 - Investigação</Text>
					<Text style={styles.titulo2}>Investigador 1 *</Text>
					<View>
						<Autocomplete
							data={resultQuery1}
							defaultValue={queryDados1}
							onChangeText={async (e) => {
								const result = await queryFormUsers(e);
								setQueryDados1(e);
								setResultQuery1(result);
								if (dadosForm.investigador1 != '') {
									setDadosForm({ ...dadosForm, investigador1: '' })
								}
							}}
							keyExtractor={(item, index) => index.toString()}
							renderItem={({ item, index }) => {
								if (item && item.name != queryDados1 && dadosForm.investigador1 == '') {
									return (
										<TouchableOpacity onPress={() => {
											setQueryDados1(item.name);
											setDadosForm({ ...dadosForm, investigador1: item.name, idInvestigador1: item.id });
										}}>
											<Text>{item.name}</Text>
										</TouchableOpacity>
									)
								} else {
									return (<View />)
								}
							}} />
					</View>
					<Text style={styles.titulo2}>Investigador 2</Text>
					<View>
						<Autocomplete
							data={resultQuery2}
							defaultValue={queryDados2}
							onChangeText={async (e) => {
								const result = await queryFormUsers(e);
								setQueryDados2(e);
								setResultQuery2(result);
								if (dadosForm.investigador2 != '') {
									setDadosForm({ ...dadosForm, investigador2: '' })
								}
							}}
							keyExtractor={(item, index) => index.toString()}
							renderItem={({ item, index }) => {
								if (item && item.name != queryDados2 && dadosForm.investigador2 == '') {
									return (
										<TouchableOpacity onPress={() => {
											setQueryDados2(item.name);
											setDadosForm({ ...dadosForm, investigador2: item.name, idInvestigador2: item.id });
										}}>
											<Text>{item.name}</Text>
										</TouchableOpacity>
									)
								} else {
									return (<View style={styles.backgroundDadosMecanica} />)
								}
							}} />
					</View>

					<Text style={styles.titulo2}>Data</Text>
					<DatePicker 
						style={styles.ViewTime} 
						date={dateSelect.date2}
						mode="date" 
						placeholder="select date" 
						format="DD/MM/YYYY"
						confirmBtnText="Confirm" 
						cancelBtnText="Cancel" 
						customStyles={styles.datePicker}
						onDateChange={(e) => {
							setDateSelect({ ...dateSelect, date2: e });
							setDadosForm({ ...dadosForm, dataInspecao: e + ' ' + dateSelect.selectedHours2 + ':' + dateSelect.selectedMinutes2 });
						}} />
					<Text style={styles.titulo2}>Hora</Text>
					<View style={styles.ViewTime}>
						<TimePicker
							ref={timeSelect1}
							onChange={(h, m) => {
								setDateSelect({ ...dateSelect, selectedHours2: h, selectedMinutes2: m });
								setDadosForm({ ...dadosForm, dataInspecao: dateSelect.date2 + ' ' + h + ':' + m });
							}} />
					</View>
					<Text style={styles.titulo2}>Descrição *</Text>
					<TextInput multiline={true} style={styles.LongInput}
						onChangeText={(e) => setDadosForm({ ...dadosForm, descricao: e })}
						value={dadosForm.descricao}
					/>

					<Text style={styles.titulo1}>2 - Visão geral do acidente mecânica</Text>
					<Text style={styles.titulo2}>Mecanismo do Descarrilhamento</Text>
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<CheckBox
							styles={styles.checkBoxStyle}
							onClick={() => setDadosForm({ ...dadosForm, subidaFriso: !dadosForm.subidaFriso })}
							isChecked={dadosForm.subidaFriso}
							leftText={"Subida do friso no trilho"} />
						<CheckBox
							styles={styles.checkBoxStyle}
							onClick={() => setDadosForm({ ...dadosForm, elevacaoRoda: !dadosForm.elevacaoRoda })}
							isChecked={dadosForm.elevacaoRoda}
							leftText={"Elevacao da roda (sem marca no boleto)"} />
						<CheckBox
							styles={styles.checkBoxStyle}
							onClick={() => setDadosForm({ ...dadosForm, objetosEstranhos: !dadosForm.objetosEstranhos })}
							isChecked={dadosForm.objetosEstranhos}
							leftText={"Objetos estranhos colocados sobre os trilhos"} />
						<CheckBox
							styles={styles.checkBoxStyle}
							onClick={() => setDadosForm({ ...dadosForm, aberturaBitola: !dadosForm.aberturaBitola })}
							isChecked={dadosForm.aberturaBitola}
							leftText={"Abertura de bitola ou deseixamento"} />
						<CheckBox
							styles={styles.checkBoxStyle}
							onClick={() => setDadosForm({ ...dadosForm, fraturaTrilho: !dadosForm.fraturaTrilho })}
							isChecked={dadosForm.fraturaTrilho}
							leftText={"Fratura de trilhos/rodas"} />
					</View>
					<Text style={styles.titulo2}>Observação</Text>
					<TextInput multiline={true} style={styles.LongInput}
						onChangeText={(e) => setDadosForm({ ...dadosForm, observacoesMecanicaDescarrilamento: e })}
						value={dadosForm.observacoesMecanicaDescarrilamento} />

					<Text style={styles.titulo1}>Condição da Carga</Text>
					<Text style={styles.titulo2}>Peso Bruto</Text>
					<NumericInput type='decimal' style={styles.shortInput}
						value={dadosForm.pesoBruto}
						onUpdate={(e) => {
							setDadosForm({ ...dadosForm, pesoBruto: e });
						}}
						maxLength={14}
					/>
					<Text style={styles.titulo2}>Peso Por Eixo</Text>
					<NumericInput type='decimal' style={styles.shortInput}
						value={dadosForm.pesoPorEixo}
						onUpdate={(e) => {
							setDadosForm({ ...dadosForm, pesoPorEixo: e });
						}}
						maxLength={14}
					/>
					<View style={{ marginTop: 10 }}>
						<RadioForm ref={vazioCarregadoMisto} radio_props={radio_props2} initial={0} onPress={(e) => setDadosForm({ ...dadosForm, vazioCarregadoMisto: e })} buttonSize={10}
							buttonOuterSize={20} animation={false} />
					</View>
					<View style={{ marginTop: 10 }}>
						<RadioForm ref={latDesnivExcCarga} radio_props={radio_props3} initial={0} onPress={(e) => setDadosForm({ ...dadosForm, latDesnivExcCarga: e })} buttonSize={10}
							buttonOuterSize={20} animation={false} />
					</View>
					<View style={{ marginTop: 10 }}>
						<RadioForm ref={cabDesnivNormal} radio_props={radio_props5} initial={0} onPress={(e) => setDadosForm({ ...dadosForm, cabDesnivNormal: e })} buttonSize={10}
							buttonOuterSize={20} animation={false} />
					</View>

					<Text style={styles.titulo1}>3 - Identificação do primeiro vagão descarrilado</Text>
					<Text style={styles.titulo2}>Vagão</Text>
					<TextInput maxLength={7} multiline={false} onChangeText={(e) => setDadosForm({ ...dadosForm, vagao: e })} value={dadosForm.vagao} style={styles.shortInput} />
					<Text style={styles.titulo2}>Posição do Trem</Text>
					<TextInput maxLength={2} multiline={false} style={styles.shortInput}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, posicaoTrem: e })}
						value={dadosForm.posicaoTrem}
					/>
					<Text style={styles.titulo2}>Cabeceira a Frente</Text>
					<View style={{ width: 100, borderWidth: 0.5 }}>
						<Picker selectedValue={dadosForm.cabeceiraAFrente} onValueChange={(e) => setDadosForm({ ...dadosForm, cabeceiraAFrente: e })}>
							<Picker.Item label="A" value="A" />
							<Picker.Item label="B" value="B" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Data última Revisão</Text>
					<DatePicker
						style={styles.date}
						date={dateSelect.date1}
						mode="date"
						placeholder="select date"
						format="DD/MM/YYYY"
						confirmBtnText="Confirm"
						cancelBtnText="Cancel"
						customStyles={styles.datePicker}
						onDateChange={(e) => {
							setDateSelect({ ...dateSelect, date1: e });
							setDadosForm({ ...dadosForm, ultimaRevisao: e });
						}} />
					<Text style={styles.titulo2}>Vagão Reincidente</Text>
					<RadioForm ref={vagaoReincidente} radio_props={radio_props} initial={0} onPress={(e) => setDadosForm({ ...dadosForm, vagaoReincidente: e })} buttonSize={10}
						buttonOuterSize={20} formHorizontal={true} labelHorizontal={true} animation={false} />
					<Text style={styles.titulo2}>Observação</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, observacaoPVD: e })} value={dadosForm.observacaoPVD} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Primeiro Truque Descarrilado?</Text>
					<View style={{ width: 200, borderWidth: 0.5 }}>
						<Picker selectedValue={dadosForm.primeiroTruque} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, primeiroTruque: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="cabeceira A" value={true} />
							<Picker.Item label="cabeceira B" value={false} />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Frente</Text>
					<RadioForm ref={frente} radio_props={radio_props} initial={0} onPress={(e) => setDadosForm({ ...dadosForm, frente: e })} buttonSize={10}
						buttonOuterSize={20} formHorizontal={true} labelHorizontal={true} animation={false} />
					<Text style={styles.titulo2}>Primeira Roda Descarrilar?</Text>
					<View style={{ width: 100, borderWidth: 0.5 }}>
						<Picker selectedValue={dadosForm.primeiraRoda} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, primeiraRoda: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="R1D" value="R1D" />
							<Picker.Item label="R1E" value="R1E" />
							<Picker.Item label="R2D" value="R2D" />
							<Picker.Item label="R2E" value="R2E" />
							<Picker.Item label="R3D" value="R3D" />
							<Picker.Item label="R3E" value="R3E" />
							<Picker.Item label="R4D" value="R4D" />
							<Picker.Item label="R4E" value="R4E" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Status</Text>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.primeiraRodaStatus} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, primeiraRodaStatus: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="nova" value="Nova" />
							<Picker.Item label="usada" value="Usada" />
							<Picker.Item label="usinagem recente" value="UsinagemRecente" />
							<Picker.Item label="outra" value="Outra" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Outra</Text>
					<TextInput multiline={true} onChangeText={(e) => setDadosForm({ ...dadosForm, primeiraRodaStatusOutra: e })} value={dadosForm.primeiraRodaStatusOutra} style={styles.LongInput} />
					<Text style={styles.titulo2}>Travessa Truque</Text>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.travessaTruque} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, travessaTruque: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="boa" value="Boa" />
							<Picker.Item label="quebrada" value="Quebrada" />
							<Picker.Item label="torcida" value="Torcida" />
							<Picker.Item label="outra" value="Outra" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Outra</Text>
					<TextInput multiline={true} onChangeText={(e) => setDadosForm({ ...dadosForm, travessaTruqueOutra: e })} value={dadosForm.travessaTruqueOutra} style={styles.LongInput} />
					<Text style={styles.titulo2}>Travessa de Prato Pião Superior</Text>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.travessaPrato} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, travessaPrato: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="boa" value="Boa" />
							<Picker.Item label="quebrada" value="Quebrada" />
							<Picker.Item label="torcida" value="Torcida" />
							<Picker.Item label="outra" value="Outra" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Outra</Text>
					<TextInput multiline={true} onChangeText={(e) => setDadosForm({ ...dadosForm, travessaPratoOutra: e })} value={dadosForm.travessaPratoOutra} style={styles.LongInput} />
					<Text style={styles.titulo2}>Rodas Côncavas</Text>
					<RadioForm ref={rodasConcavas} radio_props={radio_props} initial={0} onPress={(e) => setDadosForm({ ...dadosForm, rodasConcavas: e })} buttonSize={10}
						buttonOuterSize={20} formHorizontal={true} labelHorizontal={true} animation={false} />
					<Text style={styles.titulo2}>Tipo de Truque</Text>
					<RadioForm ref={tipoTruque} radio_props={radio_props4} initial={0} onPress={(e) => setDadosForm({ ...dadosForm, tipoTruque: e })} buttonSize={10}
						buttonOuterSize={20} formHorizontal={true} labelHorizontal={true} animation={false} />

					<Text style={styles.titulo1}>4 - Dinâmica</Text>
					<Text style={styles.titulo2}>Vagão Antecede- 1º antes</Text>
					<Text style={styles.titulo2}> Peso (t)</Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						decimalPlaces={2} useGrouping={false} maxLength={14}
						value={dadosForm.pesoAntecede}
						onUpdate={(e) => {
							setDadosForm({
								...dadosForm, pesoAntecede: e,
								pesoBrutoAntecede: (parseFloat(e) + parseFloat(dadosForm.lotacaoAntecede)).toFixed(2)
							});
						}}
					/>
					<Text style={styles.titulo2}> TB Vagão</Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						decimalPlaces={2} useGrouping={false} maxLength={14}
						value={dadosForm.lotacaoAntecede}
						onUpdate={(e) => {
							setDadosForm({
								...dadosForm, lotacaoAntecede: e,
								pesoBrutoAntecede: (parseFloat(e) + parseFloat(dadosForm.pesoAntecede)).toFixed(2)
							});
						}}
					/>
					<Text style={styles.titulo2}> TB Máxima </Text>
					<TextInput style={styles.shortInput} editable={false}
						value={dadosForm.pesoBrutoAntecede}
					/>

					<Text style={styles.titulo2}> Altura Engate (mm) </Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						decimalPlaces={2} useGrouping={false} maxLength={14}
						value={dadosForm.alturaAntecede}
						onUpdate={(e) => {
							setDadosForm({ ...dadosForm, alturaAntecede: e });
						}}
					/>

					<Text style={styles.titulo2}>_______________________________</Text>
					<Text style={styles.titulo2}>1º Vagão que descarrilou</Text>
					<Text style={styles.titulo2}> Peso (t)</Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						decimalPlaces={2} useGrouping={false} maxLength={14}
						value={dadosForm.pesoDescarrilou}
						onUpdate={(e) => {
							setDadosForm({
								...dadosForm, pesoDescarrilou: e,
								pesoBrutoDescarrilou: (parseFloat(e) + parseFloat(dadosForm.lotacaoDescarrilou)).toFixed(2)
							});
						}}
					/>
					<Text style={styles.titulo2}> TB Vagão </Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						decimalPlaces={2} useGrouping={false} maxLength={14}
						value={dadosForm.lotacaoDescarrilou}
						onUpdate={(e) => {
							setDadosForm({
								...dadosForm, lotacaoDescarrilou: e,
								pesoBrutoDescarrilou: (parseFloat(e) + parseFloat(dadosForm.pesoDescarrilou)).toFixed(2)
							});
						}}
					/>
					<Text style={styles.titulo2}> TB Máxima </Text>
					<TextInput style={styles.shortInput} editable={false}
						value={dadosForm.pesoBrutoDescarrilou}
					/>
					<Text style={styles.titulo2}> CA </Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						useGrouping={false} decimalPlaces={2} maxLength={14}
						value={dadosForm.alturaDescarrilouCA}
						onUpdate={(e) => {
							setDadosForm({ ...dadosForm, alturaDescarrilouCA: e });
						}}
					/>
					<Text style={styles.titulo2}>CB</Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						useGrouping={false} decimalPlaces={2} maxLength={14}
						value={dadosForm.alturaDescarrilouCB}
						onUpdate={(e) => {
							setDadosForm({ ...dadosForm, alturaDescarrilouCB: e });
						}}
					/>

					<Text style={styles.titulo2}>_______________________________</Text>
					<Text style={styles.titulo2}>Vagão Posterior - 1º depois</Text>
					<Text style={styles.titulo2}> Peso (t) </Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						useGrouping={false} decimalPlaces={2} maxLength={14}
						value={dadosForm.pesoPost}
						onUpdate={(e) => {
							setDadosForm({
								...dadosForm, pesoPost: e,
								pesoBrutoPost: (parseFloat(e) + parseFloat(dadosForm.lotacaoPost)).toFixed(2)
							});
						}}
					/>
					<Text style={styles.titulo2}> TB Vagão </Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						useGrouping={false} decimalPlaces={2} maxLength={14}
						value={dadosForm.lotacaoPost}
						onUpdate={(e) => {
							setDadosForm({
								...dadosForm, lotacaoPost: e,
								pesoBrutoPost: (parseFloat(e) + parseFloat(dadosForm.pesoPost)).toFixed(2)
							});
						}}
					/>
					<Text style={styles.titulo2}> TB Máxima </Text>
					<TextInput style={styles.shortInput} editable={false}
						value={dadosForm.pesoBrutoPost}
					/>
					<Text style={styles.titulo2}> Altura Engate (mm) </Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						useGrouping={false} decimalPlaces={2} maxLength={14}
						value={dadosForm.alturaPost}
						onUpdate={(e) => {
							setDadosForm({ ...dadosForm, alturaPost: e });
						}}
					/>

					<Text style={styles.titulo1}>5 - Desempenho do truque</Text>
					<Text style={styles.titulo2}>Existe contato nos batentes da travessa central do truque?</Text>
					<RadioForm ref={contatoBatentes} radio_props={radio_props} initial={0} onPress={(e) => setDadosForm({ ...dadosForm, contatoBatentes: e })} buttonSize={10}
						buttonOuterSize={20} formHorizontal={true} labelHorizontal={true} animation={false} />

					<Text style={styles.titulo2}>Observação</Text>
					<TextInput multiline={true} style={styles.LongInput}
						onChangeText={(e) => setDadosForm({ ...dadosForm, contatoBatentesObs: e, contatoBatentesObs: (e) })}
						value={dadosForm.contatoBatentesObs}
					/>

					<Text style={styles.titulo2}>Existe diferença de altura das cunhas de fricção?</Text>
					<RadioForm ref={diferencaAltura} radio_props={radio_props} initial={0} onPress={(e) => setDadosForm({ ...dadosForm, diferencaAltura: e })} buttonSize={10}
						buttonOuterSize={20} formHorizontal={true} labelHorizontal={true} animation={false} />

					<Text style={styles.titulo2}>Observação</Text>
					<TextInput multiline={true} style={styles.LongInput}
						onChangeText={(e) => setDadosForm({ ...dadosForm, diferencaAlturaObs: e })}
						value={dadosForm.diferencaAlturaObs} />

					<Text style={styles.titulo2}>Existe contato irregular no prato de e no anel?</Text>
					<RadioForm ref={contatoIrregular} radio_props={radio_props} initial={0} onPress={(e) => setDadosForm({ ...dadosForm, contatoIrregular: e })} buttonSize={10}
						buttonOuterSize={20} formHorizontal={true} labelHorizontal={true} animation={false} />
					<Text style={styles.titulo2}>Observação</Text>
					<TextInput multiline={true} onChangeText={(e) => setDadosForm({ ...dadosForm, contatoIrregularObs: e })} value={dadosForm.contatoIrregularObs} style={styles.LongInput} />

					<Text style={styles.titulo1}>6 - Sistemas de freios</Text>
					<Text style={styles.titulo2}>Vagão descarrilhado está isolado?</Text>
					<RadioForm ref={vagaoIsolado} radio_props={radio_props} initial={0} onPress={(e) => setDadosForm({ ...dadosForm, vagaoIsolado: e })} buttonSize={10}
						buttonOuterSize={20} formHorizontal={true} labelHorizontal={true} animation={false} />
					<Text style={styles.titulo2}>Torneira Angular</Text>
					<RadioForm ref={torneiraAngular} radio_props={radio_props} initial={0} onPress={(e) => setDadosForm({ ...dadosForm, torneiraAngular: e })} buttonSize={10}
						buttonOuterSize={20} formHorizontal={true} labelHorizontal={true} animation={false} />
					<Text style={styles.titulo2}>Verificar todas as torneiras angulares do trem. Existe Irregularidade?</Text>
					<RadioForm ref={irregularidadeTorneiraAngular} radio_props={radio_props} initial={0} onPress={(e) => setDadosForm({ ...dadosForm, irregularidadeTorneiraAngular: e })} buttonSize={10}
						buttonOuterSize={20} formHorizontal={true} labelHorizontal={true} animation={false} />
					<Text style={styles.titulo2}>Verificar curso do pistão, as sapatas apertadas ou frouxas em todo o trem existem irregularidade?	</Text>
					<RadioForm ref={irregularidadePistao} radio_props={radio_props} initial={0} onPress={(e) => setDadosForm({ ...dadosForm, irregularidadePistao: e })} buttonSize={10}
						buttonOuterSize={20} formHorizontal={true} labelHorizontal={true} animation={false} />
					<Text style={styles.titulo2}>Quantidade de vagões isolados em todo o trem:</Text>
					<TextInput keyboardType='decimal-pad' multiline={false} onChangeText={(e) => setDadosForm({ ...dadosForm, vagoesIsolados: e })} value={dadosForm.vagoesIsolados} style={styles.shortInput} />
					<Text style={styles.titulo2}>Em blocos?</Text>
					<RadioForm ref={emBlocos} radio_props={radio_props} initial={0} onPress={(e) => setDadosForm({ ...dadosForm, emBlocos: e })} buttonSize={10}
						buttonOuterSize={20} formHorizontal={true} labelHorizontal={true} animation={false} />
					<Text style={styles.titulo2}>Observação</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, obsSisFreios: e })} value={dadosForm.obsSisFreios} multiline={true} style={styles.LongInput} />

					<Text style={styles.titulo1}>7 - Custos do Acidente</Text>
					<Text style={styles.titulo2}>Materiais: </Text>
					<NumericInput type='currency' locale='pt-BR' currency='BRL' style={styles.shortInput}
						value={dadosForm.custosMateriais}
						onUpdate={(e) => {
							setDadosForm({
								...dadosForm, custosMateriais: e, custosTotal: (
									parseFloat(e) +
									parseFloat(dadosForm.custosDeslocamentoEstadia) +
									parseFloat(dadosForm.custosPessoal)).toFixed(2)
							});
						}}
					/>
					<Text style={styles.titulo2}>Desloc/Estadia: </Text>
					<NumericInput type='currency' locale='pt-BR' currency='BRL' style={styles.shortInput}
						value={dadosForm.custosDeslocamentoEstadia}
						onUpdate={(e) => {
							setDadosForm({
								...dadosForm, custosDeslocamentoEstadia: e, custosTotal: (
									parseFloat(dadosForm.custosMateriais) +
									parseFloat(e) +
									parseFloat(dadosForm.custosPessoal)).toFixed(2)
							});
						}} />
					<Text style={styles.titulo2}>Pessoal: </Text>
					<NumericInput type='currency' locale='pt-BR' currency='BRL' style={styles.shortInput}
						value={dadosForm.custosPessoal}
						onUpdate={(e) => {
							setDadosForm({
								...dadosForm, custosPessoal: e, custosTotal: (
									parseFloat(dadosForm.custosMateriais) +
									parseFloat(dadosForm.custosDeslocamentoEstadia) +
									parseFloat(e)).toFixed(2)
							});
						}}
					/>
					<Text style={styles.titulo2}>Total: R$</Text>
					<Text style={styles.totalFilde}> {'R$' + dadosForm.custosTotal} </Text>

					<Text style={styles.titulo1}>8 - Medidas do Primeiro veículo descarrilado (mm)</Text>

					<Text style={styles.titulo2} >_________R4E__________</Text>
					<Text style={styles.titulo2}>Altura do Friso menor ou igual à 38,1mm</Text>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altFrisoAE4} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, altFrisoAE4: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione altura" value="" />
							<Picker.Item label="Menor" value="0" />
							<Picker.Item label="Maior" value="1" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Espessura do Friso de 17mm a 31,5 mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, espFrisoAE4: e })}
						value={dadosForm.espFrisoAE4}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura da Bandagem  {'>'}  19mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altBandAE4: e })}
						value={dadosForm.altBandAE4}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura de Cunha de Fricção (Barber = max.44 mm, Ride Control = max.38 mm)</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altCunhaFricAE4: e })}
						value={dadosForm.altCunhaFricAE4}
						multiline={false}
						style={styles.shortInput}
					/>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altCunhaFricAE4Tipo} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, altCunhaFricAE4Tipo: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione o tipo" value="" />
							<Picker.Item label="Barder" value="1" />
							<Picker.Item label="Control" value="2" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Concavidade da roda menor ou igual 26,25 mm</Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						value={dadosForm.concavidadeDaRodaE4}
						decimalPlaces={2}
						useGrouping={false}
						onUpdate={(e) => {
							setDadosForm({ ...dadosForm, concavidadeDaRodaE4: e });
						}}
						maxLength={14}
					/>

					<Text style={styles.titulo2} > </Text>
					<Text style={styles.titulo2} >_________R3E__________</Text>
					<Text style={styles.titulo2}>Altura do Friso menor ou igual à 38,1mm</Text>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altFrisoAE3} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, altFrisoAE3: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione altura" value="" />
							<Picker.Item label="Menor" value="0" />
							<Picker.Item label="Maior" value="1" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Espessura do Friso de 17mm a 31,5 mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, espFrisoAE3: e })}
						value={dadosForm.espFrisoAE3}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura da Bandagem {'>'} 19mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altBandAE3: e })}
						value={dadosForm.altBandAE3}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura de Cunha de Fricção (Barber = max.44 mm, Ride Control = max.38 mm)</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altCunhaFricAE3: e })}
						value={dadosForm.altCunhaFricAE3}
						multiline={false}
						style={styles.shortInput}
					/>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altCunhaFricAE3Tipo} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, altCunhaFricAE3Tipo: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione o tipo" value="" />
							<Picker.Item label="Barder" value="1" />
							<Picker.Item label="Control" value="2" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Concavidade da roda menor ou igual 26,25 mm</Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						value={dadosForm.concavidadeDaRodaE3}
						decimalPlaces={2}
						useGrouping={false}
						onUpdate={(e) => {
							setDadosForm({ ...dadosForm, concavidadeDaRodaE3: e });
						}}
						maxLength={14}
					/>

					<Text style={styles.titulo2} > </Text>
					<Text style={styles.titulo2} >_________R2E__________</Text>
					<Text style={styles.titulo2}>Altura do Friso menor ou igual à 38,1mm</Text>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altFrisoAE2} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, altFrisoAE2: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione altura" value="" />
							<Picker.Item label="Menor" value="0" />
							<Picker.Item label="Maior" value="1" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Espessura do Friso de 17mm a 31,5 mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, espFrisoAE2: e })}
						value={dadosForm.espFrisoAE2}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura da Bandagem {'>'} 19mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altBandAE2: e })}
						value={dadosForm.altBandAE2}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura de Cunha de Fricção (Barber = max.44 mm, Ride Control = max.38 mm)</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altCunhaFricAE2: e })}
						value={dadosForm.altCunhaFricAE2}
						multiline={false}
						style={styles.shortInput}
					/>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altCunhaFricAE2Tipo} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, altCunhaFricAE2Tipo: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione o tipo" value="" />
							<Picker.Item label="Barder" value="1" />
							<Picker.Item label="Control" value="2" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Concavidade da roda menor ou igual 26,25 mm</Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						value={dadosForm.concavidadeDaRodaE2}
						decimalPlaces={2}
						useGrouping={false}
						onUpdate={(e) => {
							setDadosForm({ ...dadosForm, concavidadeDaRodaE2: e });
						}}
						maxLength={14}
					/>

					<Text style={styles.titulo2} > </Text>
					<Text style={styles.titulo2} >_________R1E__________</Text>
					<Text style={styles.titulo2}>Altura do Friso menor ou igual à 38,1mm</Text>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altFrisoAE1} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, altFrisoAE1: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione altura" value="" />
							<Picker.Item label="Menor" value="0" />
							<Picker.Item label="Maior" value="1" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Espessura do Friso de 17mm a 31,5 mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, espFrisoAE1: e })}
						value={dadosForm.espFrisoAE1}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura da Bandagem {'>'} 19mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altBandAE1: e })}
						value={dadosForm.altBandAE1}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura de Cunha de Fricção (Barber = max.44 mm, Ride Control = max.38 mm)</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altCunhaFricAE1: e })}
						value={dadosForm.altCunhaFricAE1}
						multiline={false}
						style={styles.shortInput}
					/>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altCunhaFricAE1Tipo} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, altCunhaFricAE1Tipo: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione o tipo" value="" />
							<Picker.Item label="Barder" value="1" />
							<Picker.Item label="Control" value="2" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Concavidade da roda menor ou igual 26,25 mm</Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						value={dadosForm.concavidadeDaRodaE1}
						decimalPlaces={2}
						useGrouping={false}
						onUpdate={(e) => {
							setDadosForm({ ...dadosForm, concavidadeDaRodaE1: e });
						}}
						maxLength={14}
					/>

					<Text style={styles.titulo2} > </Text>
					<Text style={styles.titulo2}>_________R4D__________</Text>
					<Text style={styles.titulo2}>Altura do Friso menor ou igual à 38,1mm</Text>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altFrisoAD4} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, altFrisoAD4: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione altura" value="" />
							<Picker.Item label="Menor" value="0" />
							<Picker.Item label="Maior" value="1" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Espessura do Friso de 17mm a 31,5 mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, espFrisoAD4: e })}
						value={dadosForm.espFrisoAD4}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura da Bandagem {'>'} 19mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altBandAD4: e })}
						value={dadosForm.altBandAD4}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura de Cunha de Fricção (Barber = max.44 mm, Ride Control = max.38 mm)</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altCunhaFricAD4: e })}
						value={dadosForm.altCunhaFricAD4}
						multiline={false}
						style={styles.shortInput}
					/>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altCunhaFricAD4Tipo} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, altCunhaFricAD4Tipo: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione o tipo" value="" />
							<Picker.Item label="Barder" value="1" />
							<Picker.Item label="Control" value="2" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Concavidade da roda menor ou igual 26,25 mm</Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						value={dadosForm.concavidadeDaRodaD4}
						decimalPlaces={2}
						useGrouping={false}
						onUpdate={(e) => {
							setDadosForm({ ...dadosForm, concavidadeDaRodaD4: e });
						}}
						maxLength={14}
					/>

					<Text style={styles.titulo2} > </Text>
					<Text style={styles.titulo2}>_________R3D__________</Text>
					<Text style={styles.titulo2}>Altura do Friso menor ou igual à 38,1mm</Text>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altFrisoAD3} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, altFrisoAD3: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione altura" value="" />
							<Picker.Item label="Menor" value="0" />
							<Picker.Item label="Maior" value="1" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Espessura do Friso de 17mm a 31,5 mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, espFrisoAD3: e })}
						value={dadosForm.espFrisoAD3}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura da Bandagem {'>'} 19mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altBandAD3: e })}
						value={dadosForm.altBandAD3}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura de Cunha de Fricção (Barber = max.44 mm, Ride Control = max.38 mm)</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altCunhaFricAD3: e })}
						value={dadosForm.altCunhaFricAD3}
						multiline={false}
						style={styles.shortInput}
					/>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altCunhaFricAD3Tipo} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, altCunhaFricAD3Tipo: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione o tipo" value="" />
							<Picker.Item label="Barder" value="1" />
							<Picker.Item label="Control" value="2" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Concavidade da roda menor ou igual 26,25 mm</Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						value={dadosForm.concavidadeDaRodaD3}
						decimalPlaces={2}
						useGrouping={false}
						onUpdate={(e) => {
							setDadosForm({ ...dadosForm, concavidadeDaRodaD3: e });
						}}
						maxLength={14}
					/>

					<Text style={styles.titulo2} > </Text>
					<Text style={styles.titulo2}>_________R2D__________</Text>
					<Text style={styles.titulo2}>Altura do Friso menor ou igual à 38,1mm</Text>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altFrisoAD2} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, altFrisoAD2: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione altura" value="" />
							<Picker.Item label="Menor" value="0" />
							<Picker.Item label="Maior" value="1" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Espessura do Friso de 17mm a 31,5 mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, espFrisoAD2: e })}
						value={dadosForm.espFrisoAD2}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura da Bandagem {'>'} 19mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altBandAD2: e })}
						value={dadosForm.altBandAD2}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura de Cunha de Fricção (Barber = max.44 mm, Ride Control = max.38 mm)</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altCunhaFricAD2: e })}
						value={dadosForm.altCunhaFricAD2}
						multiline={false}
						style={styles.shortInput}
					/>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altCunhaFricAD2Tipo} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, altCunhaFricAD2Tipo: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione o tipo" value="" />
							<Picker.Item label="Barder" value="1" />
							<Picker.Item label="Control" value="2" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Concavidade da roda menor ou igual 26,25 mm</Text>
					<NumericInput type='decimal' locale='de-DE' style={styles.shortInput}
						value={dadosForm.concavidadeDaRodaD2}
						decimalPlaces={2}
						useGrouping={false}
						onUpdate={(e) => {
							setDadosForm({ ...dadosForm, concavidadeDaRodaD2: e });
						}}
						maxLength={14}
					/>

					<Text style={styles.titulo2} > </Text>
					<Text style={styles.titulo2}>_________R1D__________</Text>
					<Text style={styles.titulo2}>Altura do Friso menor ou igual à 38,1mm</Text>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altFrisoAD1} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, altFrisoAD1: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione altura" value="" />
							<Picker.Item label="Menor" value="0" />
							<Picker.Item label="Maior" value="1" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Espessura do Friso de 17mm a 31,5 mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, espFrisoAD1: e })}
						value={dadosForm.espFrisoAD1}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura da Bandagem {'>'} 19mm</Text>
					<TextInput
						maxLength={14}
						keyboardType={'decimal-pad'}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altBandAD1: e })}
						value={dadosForm.altBandAD1}
						multiline={false}
						style={styles.shortInput}
					/>
					<Text style={styles.titulo2}>Altura de Cunha de Fricção (Barber = max.44 mm, Ride Control = max.38 mm)</Text>
					<TextInput maxLength={14} keyboardType={'decimal-pad'} multiline={false} style={styles.shortInput}
						onChangeText={(e) => setDadosForm({ ...dadosForm, altCunhaFricAD1: e })}
						value={dadosForm.altCunhaFricAD1}
					/>
					<View style={styles.ViewPicker}>
						<Picker selectedValue={dadosForm.altCunhaFricAD1Tipo} style={styles.picker}
							onValueChange={(e) => setDadosForm({ ...dadosForm, altCunhaFricAD1Tipo: e })}>
							<Picker.Item style={{ borderColor: 'gray', borderWidth: 1 }} label="Selecione o tipo" value="" />
							<Picker.Item label="Barder" value="1" />
							<Picker.Item label="Control" value="2" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Concavidade da roda menor ou igual 26,25 mm</Text>
					<NumericInput type='decimal' locale='de-DE' decimalPlaces={2} style={styles.shortInput}
						value={dadosForm.concavidadeDaRodaD1}
						useGrouping={false}
						onUpdate={(e) => {
							setDadosForm({ ...dadosForm, concavidadeDaRodaD1: e });
						}}
						maxLength={14}
					/>

					<Text style={styles.titulo1}> </Text>

					<Text style={styles.titulo2}>Folga de Amparo Balanço BE</Text>
					<TextInput type='decimal' useGrouping={false} style={styles.shortInput}
						value={dadosForm.folgaAmparoAEB}
						onChangeText={(e) => {
							setDadosForm({
								...dadosForm, folgaAmparoAEB: somenteInteiro(e),
								balanceamento19mmSumB: (parseInt(e) + parseInt(dadosForm.folgaAmparoADB)),
								balanceamento4mm: (parseInt(dadosForm.folgaAmparoADA) + parseInt(e))
									- (parseInt(dadosForm.folgaAmparoAEA) + parseInt(dadosForm.folgaAmparoADB))
							});
						}}
					/>
					<Text style={styles.titulo2}>Tipo</Text>
					<TextInput maxLength={20} multiline={false}
						onChangeText={(e) => setDadosForm({ ...dadosForm, tipoFolgaAmparoAEB: e })}
						value={dadosForm.tipoFolgaAmparoAEB} style={styles.shortInput}
					/>

					<Text style={styles.titulo2}>_______________________________________________</Text>

					<Text style={styles.titulo2}>Folga de Amparo Balanço AE</Text>
					<TextInput type='decimal' useGrouping={false} style={styles.shortInput}
						value={dadosForm.folgaAmparoAEA}
						onChangeText={(e) => {
							setDadosForm({
								...dadosForm, folgaAmparoAEA: somenteInteiro(e),
								balanceamento19mmSumA: (parseInt(e) + parseInt(dadosForm.folgaAmparoADA)),
								balanceamento4mm: (parseInt(dadosForm.folgaAmparoADA) + parseInt(dadosForm.folgaAmparoAEB))
									- (parseInt(e) + parseInt(dadosForm.folgaAmparoADB))
							});
						}}
					/>
					<Text style={styles.titulo2}>Tipo</Text>
					<TextInput maxLength={20} multiline={false}
						onChangeText={(e) => setDadosForm({ ...dadosForm, tipoFolgaAmparoAEA: e })}
						value={dadosForm.tipoFolgaAmparoAEA} style={styles.shortInput}
					/>

					<Text style={styles.titulo2}>_______________________________________________</Text>

					<Text style={styles.titulo2}>Folga de Amparo Balanço BD</Text>
					<TextInput type='decimal' useGrouping={false} style={styles.shortInput}
						value={dadosForm.folgaAmparoADB}
						onChangeText={(e) => {
							setDadosForm({
								...dadosForm, folgaAmparoADB: somenteInteiro(e),
								balanceamento19mmSumB: (parseInt(dadosForm.folgaAmparoAEB) + parseInt(e)),
								balanceamento4mm: (parseInt(dadosForm.folgaAmparoADA) + parseInt(dadosForm.folgaAmparoAEB))
									- (parseInt(dadosForm.folgaAmparoAEA) + parseInt(e))
							});
						}}
					/>
					<Text style={styles.titulo2}>Tipo</Text>
					<TextInput maxLength={20} multiline={false}
						onChangeText={(e) => setDadosForm({ ...dadosForm, tipoFolgaAmparoADB: e })}
						value={dadosForm.tipoFolgaAmparoADB} style={styles.shortInput}
					/>

					<Text style={styles.titulo2}>_______________________________________________</Text>

					<Text style={styles.titulo2}>Folga de Amparo Balanço AD</Text>
					<TextInput type='decimal' useGrouping={false} style={styles.shortInput}
						value={dadosForm.folgaAmparoADA}
						onChangeText={(e) => {
							setDadosForm({
								...dadosForm, folgaAmparoADA: somenteInteiro(e),
								balanceamento19mmSumA: (parseInt(dadosForm.folgaAmparoAEA) + parseInt(e)),
								balanceamento4mm: (parseInt(e) + parseInt(dadosForm.folgaAmparoAEB))
									- (parseInt(dadosForm.folgaAmparoAEA) + parseInt(dadosForm.folgaAmparoADB))
							});
						}}
					/>
					<Text style={styles.titulo2}>Tipo</Text>
					<TextInput maxLength={20} multiline={false}
						onChangeText={(e) => setDadosForm({ ...dadosForm, tipoFolgaAmparoADA: e })}
						value={dadosForm.tipoFolgaAmparoADA} style={styles.shortInput}
					/>

					<Text style={styles.titulo2}>_______________________________________________</Text>

					<Text style={styles.titulo2}>   Balanceamento   </Text>
					<Text style={styles.titulo2}>(AD + BE) - (AE + BD) menor ou = 4mm: {dadosForm.balanceamento4mm}</Text>
					<Text style={styles.titulo2}>(AE + AD) menor ou = 19mm: {dadosForm.balanceamento19mmSumA}</Text>
					<Text style={styles.titulo2}>(BE + BD) menor ou = 19mm: {dadosForm.balanceamento19mmSumB}</Text>

					<Text style={styles.titulo1}> </Text>

					<Text style={styles.titulo2}>Bitola Interna do Rodeiro 1</Text>
					<TextInput type='decimal' useGrouping={false} style={styles.shortInput}
						value={dadosForm.bitolaIntRod1}
						onChangeText={(e) => { setDadosForm({ ...dadosForm, bitolaIntRod1: somenteInteiro(e) }) }}
					/>
					<Text style={styles.titulo2}>Bitola Interna do Rodeiro 2</Text>
					<TextInput type='decimal' useGrouping={false} style={styles.shortInput}
						value={dadosForm.bitolaIntRod2}
						onChangeText={(e) => { setDadosForm({ ...dadosForm, bitolaIntRod2: somenteInteiro(e) }) }}
					/>
					<Text style={styles.titulo2}>Bitola Interna do Rodeiro 3</Text>
					<TextInput type='decimal' useGrouping={false} style={styles.shortInput}
						value={dadosForm.bitolaIntRod3}
						onChangeText={(e) => { setDadosForm({ ...dadosForm, bitolaIntRod3: somenteInteiro(e) }) }}
					/>
					<Text style={styles.titulo2}>Bitola Interna do Rodeiro 4</Text>
					<TextInput type='decimal' useGrouping={false} decimalPlaces={0} style={styles.shortInput}
						value={dadosForm.bitolaIntRod4}
						onChangeText={(e) => { setDadosForm({ ...dadosForm, bitolaIntRod4: somenteInteiro(e) }) }}
					/>

					<Text style={styles.titulo2}>_______________________________________________</Text>

					<Text style={styles.titulo2}>Nº botões BE</Text>
					<TextInput type='decimal' useGrouping={false} style={styles.shortInput}
						value={dadosForm.numBotoesBE}
						onChangeText={(e) => { setDadosForm({ ...dadosForm, numBotoesBE: somenteInteiro(e) }) }}
					/>
					<Text style={styles.titulo2}>Nº botões AE</Text>
					<TextInput type='decimal' useGrouping={false} style={styles.shortInput}
						value={dadosForm.numBotoesAE}
						onChangeText={(e) => { setDadosForm({ ...dadosForm, numBotoesAE: somenteInteiro(e) }) }}
					/>
					<Text style={styles.titulo2}>Nº botões BD</Text>
					<TextInput type='decimal' useGrouping={false} style={styles.shortInput}
						value={dadosForm.numBotoesBD}
						onChangeText={(e) => { setDadosForm({ ...dadosForm, numBotoesBD: somenteInteiro(e) }) }}
					/>
					<Text style={styles.titulo2}>Nº botões AD</Text>
					<TextInput type='decimal' useGrouping={false} style={styles.shortInput}
						value={dadosForm.numBotoesAD}
						onChangeText={(e) => { setDadosForm({ ...dadosForm, numBotoesAD: somenteInteiro(e) }) }}
					/>

					<Text style={styles.titulo2}>_______________________________________________</Text>
					<Text style={styles.titulo2}>Prato pião B</Text>
					<TextInput type='decimal' useGrouping={false} style={styles.shortInput}
						value={dadosForm.pratoPiaoB}
						onChangeText={(e) => { setDadosForm({ ...dadosForm, pratoPiaoB: somenteInteiro(e) }) }}
					/>
					<Text style={styles.titulo2}>Prato pião A</Text>
					<TextInput type='decimal' style={styles.shortInput}
						value={dadosForm.pratoPiaoA}
						onChangeText={(e) => { setDadosForm({ ...dadosForm, pratoPiaoA: somenteInteiro(e) }) }}
					/>

					<Text style={styles.titulo2}>_______________________________________________</Text>
					<Text style={styles.titulo2}>Altura do Engate - B</Text>
					<TextInput type='decimal' useGrouping={false} style={styles.shortInput}
						value={dadosForm.altEngCabB}
						onChangeText={(e) => { setDadosForm({ ...dadosForm, altEngCabB: somenteInteiro(e) }) }}
					/>
					<Text style={styles.titulo2}>Altura do Engate - A</Text>
					<TextInput type='decimal' useGrouping={false} style={styles.shortInput}
						value={dadosForm.altEngCabA}
						onChangeText={(e) => { setDadosForm({ ...dadosForm, altEngCabA: somenteInteiro(e) }) }}
					/>

					<Text style={styles.titulo2}>_______________________________________________</Text>
					<Text style={styles.titulo2}>Marcas abrasivas(de polimento) no amparo balanço</Text>
					<RadioForm ref={marcasAbrasAmpBalanco} radio_props={radio_props} initial={0}
						onPress={(e) => setDadosForm({ ...dadosForm, marcasAbrasAmpBalanco: e })} buttonSize={10}
						buttonOuterSize={20} formHorizontal={true} labelHorizontal={true} animation={false} />
					<Text style={styles.titulo2}>Cilindro Freio (7,5 p a 8 p)</Text>
					<TextInput type='decimal' useGrouping={false} style={styles.shortInput}
						value={dadosForm.cilindroFreio}
						onChangeText={(e) => { setDadosForm({ ...dadosForm, cilindroFreio: somenteInteiro(e) }) }}
					/>

					<View>
						<SendForm json={JSON.parse(JSON.stringify(dadosForm).replace(regex, "**"))}
							req={requiredFields}
							callback={props.navigation.goBack}
							route={routes.dadosMecanica}
							createdForm={createdForm} title='Salvar' />
					</View>
				</View>
				<View style={styles.mainViewLimpaFormulario}>
					<View style={styles.container}>
						<ButtonG title="Limpar Formulário" onPress={() => exibirConfirmacaoLimpezaForm()} />

					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}