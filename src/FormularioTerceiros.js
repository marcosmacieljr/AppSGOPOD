import React, { useState, useEffect, useRef } from 'react';
import NumericInput from '@wwdrew/react-native-numeric-textinput'
import { SendForm, updateForms, gravarLogLocal } from '../businessLayer/forms';
import { Text, Alert, View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { Picker } from '@react-native-picker/picker';
import { routes } from '../utils/constants';
import { styles } from '../styles/styles';
import { ButtonG } from '../components/Button';
import { deleteFormByRoute } from '../db/forms';

export default function FormularioTerceiros(props) {
	const [createdForm, setCreatedForm] = useState(undefined);
	const [dadosForm, setDadosForm] = useState({
		idBoletim: '',
		ufRelatorio: 'AC',
		numero: '',
		assunto: '',
		local: '',
		preliminares: '',
		ocorrencia: '', medidas: '', avarias: '', usoRebCarroTer: false, houveVitima: false, vitimas: '', testemunhas: '', outrasObeservacoes: '', fiscalSegurancaPatrimonial: '', custosMateriais: '0.00', custosDeslocamentoEstadia: '0.00', custosPessoal: '0.00', custosTotal: '0.00'
	});

	let radio_props = [
		{ label: 'Não	', value: false },
		{ label: 'Sim', value: true }
	];

	const requiredFields = (obj) => {

		toReturn = "";

		if (obj.preliminares == '') {
			toReturn += "Preliminares deve ser preenchida.\n"
		}

		if (obj.ocorrencia == '') {
			toReturn += "Ocorrência deve ser preenchida.\n"
		}

		if (obj.medidas == '') {
			toReturn += "Medidas deve ser preenchida.\n"
		}

		if (obj.avarias == '') {
			toReturn += "Avarias deve ser preenchida.\n"
		}

		if (obj.vitimas == '') {
			toReturn += "Vítimas deve ser preenchida.\n"
		}

		if (obj.testemunhas == '') {
			toReturn += "Testemunhas deve ser preenchida.\n"
		}

		if (obj.outrasObeservacoes == '') {
			toReturn += "Outras Observações deve ser preenchida.\n"
		}

		if (obj.fiscalSegurancaPatrimonial == '') {
			toReturn += "Fiscal de Segurança Patrimonial deve ser preenchido.\n"
		}

		if (obj.custosMateriais == '') {
			toReturn += "Custos Materiais deve ser preenchido.\n"
		}

		if (obj.custosDeslocamentoEstadia == '') {
			toReturn += "Custos Deslocamento e Estadia deve ser preenchido.\n"
		}

		if (obj.custosPessoal == '') {
			toReturn += "Custo Pessoal deve ser preenchido.\n"
		}
		return toReturn;
	}

	const exibirConfirmacaoLimpezaForm = () =>
		Alert.alert(
			"Confirmação",
			"Deseja realmente limpar o formulário?",
			[
				{
					text: "Não",
					onPress: () => console.log("Nada a fazer")
				},
				{ text: "Sim", onPress: () => (limpaRecarregaFrom()) }
			]
		);

	const limpaRecarregaFrom = async () => {

		await gravarLogLocal(getCurrentDate() + " - Limpando dados do Formulário de Terceiros.");
		await deleteFormByRoute(routes.formTerceiros);
		await onStart();
		setDadosForm({
			...dadosForm, idBoletim: '',
			ufRelatorio: 'AC',
			numero: '',
			assunto: '',
			local: '',
			preliminares: '',
			ocorrencia: '', medidas: '', avarias: '', usoRebCarroTer: false, houveVitima: false, vitimas: '', testemunhas: '', outrasObeservacoes: '', fiscalSegurancaPatrimonial: '', custosMateriais: '0.00', custosDeslocamentoEstadia: '0.00', custosPessoal: '0.00', custosTotal: '0.00'
		});
	}

	const usoRebCarroTer = useRef(null);
	const houveVitima = useRef(null);

	const onStart = async () => {
		const previousForm = await updateForms(routes.formTerceiros);
		console.log("previous: " + previousForm)
		if (previousForm) {
			setDadosForm(previousForm);
			usoRebCarroTer.current.setState({ is_active_index: previousForm.usoRebCarroTer ? 1 : 0 });
			houveVitima.current.setState({ is_active_index: previousForm.houveVitima ? 1 : 0 });
		} else {
			setCreatedForm(true);
		}
	}

	useEffect(() => {
		onStart();
	}, []);

	const regex = /\+/gi;

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.backgroundDadosMecanica}>
			<ScrollView >
				<View style={{ marginLeft: 8, marginRight: 8, backgroundColor: '#f0f0f0' }}>
					<Text style={styles.titulo1}>Dados Relatorios de Terceiros</Text>
					<Text style={styles.titulo2}>Número do Boletim</Text>
					<TextInput keyboardType={'decimal-pad'} onChangeText={(e) => setDadosForm({ ...dadosForm, idBoletim: e })} value={dadosForm.idBoletim} style={styles.shortInput} />
					<Text style={styles.titulo2}>UF do Relatório</Text>
					<View style={{ borderBottomWidth: 1, borderColor: '', width: "11%" }}>
						<Picker selectedValue={dadosForm.ufRelatorio} style={{ width: 100, textDecorationLine: 'line-through', backgroundColor: '#f0f0f0' }}
							onValueChange={(e) => setDadosForm({ ...dadosForm, ufRelatorio: e })}>
							<Picker.Item label="AC" value="AC" />
							<Picker.Item label="AL" value="AL" />
							<Picker.Item label="AP" value="AP" />
							<Picker.Item label="AM" value="AM" />
							<Picker.Item label="BA" value="BA" />
							<Picker.Item label="CE" value="CE" />
							<Picker.Item label="DF" value="DF" />
							<Picker.Item label="ES" value="ES" />
							<Picker.Item label="GO" value="GO" />
							<Picker.Item label="MA" value="MA" />
							<Picker.Item label="MT" value="MT" />
							<Picker.Item label="MS" value="MS" />
							<Picker.Item label="MG" value="MG" />
							<Picker.Item label="PA" value="PA" />
							<Picker.Item label="PB" value="PB" />
							<Picker.Item label="PR" value="PR" />
							<Picker.Item label="PE" value="PE" />
							<Picker.Item label="PI" value="PI" />
							<Picker.Item label="RJ" value="RJ" />
							<Picker.Item label="RN" value="RN" />
							<Picker.Item label="RS" value="RS" />
							<Picker.Item label="RO" value="RO" />
							<Picker.Item label="RR" value="RR" />
							<Picker.Item label="SC" value="SC" />
							<Picker.Item label="SP" value="SP" />
							<Picker.Item label="SE" value="SE" />
							<Picker.Item label="TO" value="TO" />
						</Picker>
					</View>
					<Text style={styles.titulo2}>Nº Relatório</Text>
					<TextInput keyboardType={'decimal-pad'} maxLength={20}
						onChangeText={(e) => setDadosForm({ ...dadosForm, numero: e })} value={dadosForm.numero} multiline={true} style={styles.shortInput} />
					<Text style={styles.titulo2} >Assunto</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, assunto: e })} value={dadosForm.assunto} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Local</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, local: e })} value={dadosForm.local} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Preliminares *</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, preliminares: e })} value={dadosForm.preliminares} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Ocorrência * </Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, ocorrencia: e })} value={dadosForm.ocorrencia} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Medidas *</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, medidas: e })} value={dadosForm.medidas} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Avarias *</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, avarias: e })} value={dadosForm.avarias} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Uso de Reboque para Carro de Terceiros </Text>
					<View style={{ flexDirection: 'row' }}>
						<RadioForm
							ref={usoRebCarroTer}
							radio_props={radio_props}
							initial={0}
							onPress={(e) => setDadosForm({ ...dadosForm, usoRebCarroTer: e })}
							buttonSize={10}
							buttonOuterSize={20}
							formHorizontal={true} />
					</View>
					<Text style={styles.titulo2}>Houve Vítima </Text>
					<View style={{ flexDirection: 'row' }}>
						<RadioForm
							ref={houveVitima}
							radio_props={radio_props}
							initial={0}
							onPress={(e) => setDadosForm({ ...dadosForm, houveVitima: e })}
							buttonSize={10}
							buttonOuterSize={20}
							formHorizontal={true} />
					</View>
					<Text style={styles.titulo2}>Vítimas *</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, vitimas: e })} value={dadosForm.vitimas} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Testemunhas *</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, testemunhas: e })} value={dadosForm.testemunhas} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Outras Observações *</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, outrasObeservacoes: e })} value={dadosForm.outrasObeservacoes} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Fiscal da Segurança Patrimonial *</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, fiscalSegurancaPatrimonial: e })} value={dadosForm.fiscalSegurancaPatrimonial} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo1}>Custos do Acidente</Text>
					<Text style={styles.titulo2}>Materiais: R$ *</Text>
					<NumericInput
						type='currency'
						locale='pt-BR'
						currency='BRL'
						style={styles.shortInput}
						value={dadosForm.custosMateriais}
						onUpdate={(e) => {
							setDadosForm({
								...dadosForm, custosMateriais: e, custosTotal: (
									parseFloat(e) +
									parseFloat(dadosForm.custosDeslocamentoEstadia) +
									parseFloat(dadosForm.custosPessoal)
								).toFixed(2)
							});
						}} />
					<Text style={styles.titulo2}>Desloc/Estadia: R$ *</Text>
					<NumericInput
						type='currency'
						locale='pt-BR'
						currency='BRL'
						style={styles.shortInput}
						value={dadosForm.custosDeslocamentoEstadia}
						onUpdate={(e) => {
							setDadosForm({
								...dadosForm, custosDeslocamentoEstadia: e, custosTotal: (
									parseFloat(dadosForm.custosMateriais) +
									parseFloat(e) +
									parseFloat(dadosForm.custosPessoal)
								).toFixed(2)
							});
						}} />
					<Text style={styles.titulo2}>Pessoal: R$ *</Text>
					<NumericInput
						type='currency'
						locale='pt-BR'
						currency='BRL'
						style={styles.shortInput}
						value={dadosForm.custosPessoal}
						onUpdate={(e) => {
							setDadosForm({
								...dadosForm, custosPessoal: e, custosTotal: (
									parseFloat(dadosForm.custosMateriais) +
									parseFloat(dadosForm.custosDeslocamentoEstadia) +
									parseFloat(e)
								).toFixed(2)
							});
						}} />
					<Text style={styles.titulo2}>Total: R$</Text>
					<Text style={styles.totalFilde}> {'R$' + dadosForm.custosTotal} </Text>
					<View>
						<SendForm json={JSON.parse(JSON.stringify(dadosForm).replace(regex, "**"))}
							req={requiredFields}
							callback={props.navigation.goBack}
							route={routes.formTerceiros} createdForm={createdForm}
							title='Salvar' />
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