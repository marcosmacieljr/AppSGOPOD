import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Alert, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
import TimePicker from 'react-native-simple-time-picker';
import { styles } from '../styles/styles';
import CheckBox from 'react-native-check-box';
import Autocomplete from 'react-native-autocomplete-input';
import NumericInput from '@wwdrew/react-native-numeric-textinput';
import { SendForm, queryFormUsers, updateForms, gravarLogLocal } from '../businessLayer/forms';
import { routes } from '../utils/constants';
import Moment from 'moment';
import { deleteFormByRoute } from '../db/forms';

import { ButtonG } from '../components/Button';
import TableGrid from '../components/TableGrid';
import TableGridPOD from '../components/TableGridPOD';

export default function DadosVia(props) {
	const [resultQuery1, setResultQuery1] = useState([]);
	const [createdForm, setCreatedForm] = useState(undefined);
	const [queryDados1, setQueryDados1] = useState('');
	const [resultQuery2, setResultQuery2] = useState([]);
	const [queryDados2, setQueryDados2] = useState('');
	const [dateSelect, setDateSelect] = useState({
		selectedHours1: 0,
		selectedMinutes1: 0,
		date1:Moment(new Date()).format('DD/MM/YYYY'),
		date2:Moment(new Date()).format('DD/MM/YYYY'),
		date3:Moment(new Date()).format('DD/MM/YYYY'),
		date4:Moment(new Date()).format('DD/MM/YYYY')
	})
	const [dadosForm, setDadosForm] = useState({
		idBoletim: '',
		dataInspecao: dateSelect.date1+' '+dateSelect.selectedHours1+':'+dateSelect.selectedMinutes1,
		investigador1: '',
		investigador2: '',
		descricao: '',
		kmH: '',
		restricaoVelocidade: '',
		motivoRestricao: '',
		classeVia: '',
		locoComandante: '',
		primeiroVeiculo: '',
		ultimoVeiculo: '',
		kmPOD: '',
		percursoDescarrilado: '',
		subidaFriso: false,
		aberturaBitola: false,
		elevacaoRoda: false,
		fraturaTrilhos: false,
		objetosEstranhos: false,
		observacao: '',
		marcasCurtas: '',
		marcasLongas: '',
		marcasAbrasao: false,
		marcasQueda: false,
		semMarcas: false,
		marcasRegulares: false,
		marcasAlma: false,
		curvaOuTangente: 'curva',
		curva: '',
		raio: '',
		tangente: '',
		rampa: '',
		tipoRampa: '',
		inspecaoCarro: dateSelect.date3,
		obsCarro: '',
		inspecaoLinha: dateSelect.date2,
		obsLinha: '',
		inspecaoCruzadaTrens: dateSelect.date4,
		juntaSolta: false,
		desnivelada: false,
		desencontrada: false,
		faltandoParafuso: false,
		madeira: false,
		concreto: false,
		plastico: false,
		aco: false,
		sequenciasDormentes: '',
		bom: false,
		ruim: false,
		laqueado: false,
		foraEixo: false,
		inexistente: false,
		domentesObs: '',
		tipoFixacao: '',
		outrosFixacao: '',
		estadoFixacao: '',
		observacaoFixacao: '',
		sinaisInclinacao: '',
		ladoExterno: false,
		ladoInterno: false,
		existePlacaApoio: '',
		brita: false,
		terra: false,
		lastroOutros: false,
		lastroNormal: false,
		fracoOmbro: false,
		fracoCentro: false,
		contaminado: false,
		lastroObs: '',
		drenagemBom: false,
		drenagemRuim: false,
		drenagemDesnecessario: false,
		drenagemPresencaLaqueado: false,
		drenagemObs: '',
		trilhosTipo: '',
		trilhosPerfil: '',
		trilhosOutro: '',
		trilhosLubrificacao: '',
		comprimentoBarra: '',
		trilhoFraturado: '',
		tipoFratura: '',
		trilhosOxidacao: '',
		trilhosDesgasteHorizontal: '',
		trilhosDesgasteVertical: '',
		estadoPod: '',
		idInvestigador1: 0,
		idInvestigador2: 0,
		custosMateriais: '0.00',
    	custosDeslocamento: '0.00',
    	custosPessoal: '0.00',
    	custosTotal: '0.00',
		limiteSegClassePOD: 1,
		


// DADOS DO POD

		estacaCadaMetro: '-70',
        bitolaPasseioPOD: '0',
        variacaoBitolaBase5POD: '0',
        superelevacaoRecalquePOD: '0',
        empenoBase2POD: '0',
        empenoBase10POD: '',
        flechaMedidaPOD: '0',
        variacaoFlechaBase3POD: '0',
        
        estacaCadaMetro1: '-69',
        bitolaPasseioPOD1: '0',
        variacaoBitolaBase5POD1: '0',
        superelevacaoRecalquePOD1: '0',
        empenoBase2POD1: '0',
        empenoBase10POD1: '',
        flechaMedidaPOD1: '0',
        variacaoFlechaBase3POD1: '0',

        estacaCadaMetro2: '-68',
        bitolaPasseioPOD2: '0',
        variacaoBitolaBase5POD2: '0',
        superelevacaoRecalquePOD2: '0',
        empenoBase2POD2: '0',
        empenoBase10POD2: '',
        flechaMedidaPOD2: '0',
        variacaoFlechaBase3POD2: '0',

        estacaCadaMetro3: '-67',
        bitolaPasseioPOD3: '0',
        variacaoBitolaBase5POD3: '0',
        superelevacaoRecalquePOD3: '0',
        empenoBase2POD3: '0',
        empenoBase10POD3: '',
        flechaMedidaPOD3: '0',
        variacaoFlechaBase3POD3: '0',

        estacaCadaMetro4: '-66',
        bitolaPasseioPOD4: '0',
        variacaoBitolaBase5POD4: '0',
        superelevacaoRecalquePOD4: '0',
        empenoBase2POD4: '0',
        empenoBase10POD4: '',
        flechaMedidaPOD4: '0',
        variacaoFlechaBase3POD4: '0',
        
        estacaCadaMetro5: '-65',
        bitolaPasseioPOD5: '0',
        variacaoBitolaBase5POD5: '0',
        superelevacaoRecalquePOD5: '0',
        empenoBase2POD5: '0',
        empenoBase10POD5: '',
        flechaMedidaPOD5: '0',
        variacaoFlechaBase3POD5: '0',

        estacaCadaMetro6: '-64',
        bitolaPasseioPOD6: '0',
        variacaoBitolaBase5POD6: '0',
        superelevacaoRecalquePOD6: '0',
        empenoBase2POD6: '0',
        empenoBase10POD6: '',
        flechaMedidaPOD6: '0',
        variacaoFlechaBase3POD6: '0',

        estacaCadaMetro7: '-63',
        bitolaPasseioPOD7: '0',
        variacaoBitolaBase5POD7: '0',
        superelevacaoRecalquePOD7: '0',
        empenoBase2POD7: '0',
        empenoBase10POD7: '',
        flechaMedidaPOD7: '0',
        variacaoFlechaBase3POD7: '0',

        estacaCadaMetro8: '-62',
        bitolaPasseioPOD8: '0',
        variacaoBitolaBase5POD8: '0',
        superelevacaoRecalquePOD8: '0',
        empenoBase2POD8: '0',
        empenoBase10POD8: '',
        flechaMedidaPOD8: '0',
        variacaoFlechaBase3POD8: '0',

        estacaCadaMetro9: '-61',
        bitolaPasseioPOD9: '0',
        variacaoBitolaBase5POD9: '0',
        superelevacaoRecalquePOD9: '0',
        empenoBase2POD9: '0',
        empenoBase10POD9: '',
        flechaMedidaPOD9: '0',
        variacaoFlechaBase3POD9: '0',

        estacaCadaMetro10: '-60',
        bitolaPasseioPOD10: '0',
        variacaoBitolaBase5POD10: '0',
        superelevacaoRecalquePOD10: '0',
        empenoBase2POD10: '0',
        empenoBase10POD10: '',
        flechaMedidaPOD10: '0',
        variacaoFlechaBase3POD10: '0',

        estacaCadaMetro11: '-59',
        bitolaPasseioPOD11: '0',
        variacaoBitolaBase5POD11: '0',
        superelevacaoRecalquePOD11: '0',
        empenoBase2POD11: '0',
        empenoBase10POD11: '',
        flechaMedidaPOD11: '0',
        variacaoFlechaBase3POD11: '0',
        
        estacaCadaMetro12: '-58',
        bitolaPasseioPOD12: '0',
        variacaoBitolaBase5POD12: '0',
        superelevacaoRecalquePOD12: '0',
        empenoBase2POD12: '0',
        empenoBase10POD12: '',
        flechaMedidaPOD12: '0',
        variacaoFlechaBase3POD12: '0',
        
        estacaCadaMetro13: '-57',
        bitolaPasseioPOD13: '0',
        variacaoBitolaBase5POD13: '0',
        superelevacaoRecalquePOD13: '0',
        empenoBase2POD13: '0',
        empenoBase10POD13: '',
        flechaMedidaPOD13: '0',
        variacaoFlechaBase3POD13: '0',

        estacaCadaMetro14: '-56',
        bitolaPasseioPOD14: '0',
        variacaoBitolaBase5POD14: '0',
        superelevacaoRecalquePOD14: '0',
        empenoBase2POD14: '0',
        empenoBase10POD14: '',
        flechaMedidaPOD14: '0',
        variacaoFlechaBase3POD14: '0',

        estacaCadaMetro15: '-55',
        bitolaPasseioPOD15: '0',
        variacaoBitolaBase5POD15: '0',
        superelevacaoRecalquePOD15: '0',
        empenoBase2POD15: '0',
        empenoBase10POD15: '',
        flechaMedidaPOD15: '0',
        variacaoFlechaBase3POD15: '0',

        estacaCadaMetro16: '-54',
        bitolaPasseioPOD16: '0',
        variacaoBitolaBase5POD16: '0',
        superelevacaoRecalquePOD16: '0',
        empenoBase2POD16: '0',
        empenoBase10POD16: '',
        flechaMedidaPOD16: '0',
        variacaoFlechaBase3POD16: '0',

        estacaCadaMetro17: '-53',
        bitolaPasseioPOD17: '0',
        variacaoBitolaBase5POD17: '0',
        superelevacaoRecalquePOD17: '0',
        empenoBase2POD17: '0',
        empenoBase10POD17: '',
        flechaMedidaPOD17: '0',
        variacaoFlechaBase3POD17: '0',

        estacaCadaMetro18: '-52',
        bitolaPasseioPOD18: '0',
        variacaoBitolaBase5POD18: '0',
        superelevacaoRecalquePOD18: '0',
        empenoBase2POD18: '0',
        empenoBase10POD18: '',
        flechaMedidaPOD18: '0',
        variacaoFlechaBase3POD18: '0',

        estacaCadaMetro19: '-51',
        bitolaPasseioPOD19: '0',
        variacaoBitolaBase5POD19: '0',
        superelevacaoRecalquePOD19: '0',
        empenoBase2POD19: '0',
        empenoBase10POD19: '',
        flechaMedidaPOD19: '0',
        variacaoFlechaBase3POD19: '0',

        estacaCadaMetro20: '-50',
        bitolaPasseioPOD20: '0',
        variacaoBitolaBase5POD20: '0',
        superelevacaoRecalquePOD20: '0',
        empenoBase2POD20: '0',
        empenoBase10POD20: '',
        flechaMedidaPOD20: '0',
        variacaoFlechaBase3POD20: '0',

        estacaCadaMetro21: '-49',
        bitolaPasseioPOD21: '0',
        variacaoBitolaBase5POD21: '0',
        superelevacaoRecalquePOD21: '0',
        empenoBase2POD21: '0',
        empenoBase10POD21: '',
        flechaMedidaPOD21: '0',
        variacaoFlechaBase3POD21: '0',

        estacaCadaMetro22: '-48',
        bitolaPasseioPOD22: '0',
        variacaoBitolaBase5POD22: '0',
        superelevacaoRecalquePOD22: '0',
        empenoBase2POD22: '0',
        empenoBase10POD22: '',
        flechaMedidaPOD22: '0',
        variacaoFlechaBase3POD22: '0',

        estacaCadaMetro23: '-47',
        bitolaPasseioPOD23: '0',
        variacaoBitolaBase5POD23: '0',
        superelevacaoRecalquePOD23: '0',
        empenoBase2POD23: '0',
        empenoBase10POD23: '',
        flechaMedidaPOD23: '0',
        variacaoFlechaBase3POD23: '0',

        estacaCadaMetro24: '-46',
        bitolaPasseioPOD24: '0',
        variacaoBitolaBase5POD24: '0',
        superelevacaoRecalquePOD24: '0',
        empenoBase2POD24: '0',
        empenoBase10POD24: '',
        flechaMedidaPOD24: '0',
        variacaoFlechaBase3POD24: '0',

        estacaCadaMetro25: '-45',
        bitolaPasseioPOD25: '0',
        variacaoBitolaBase5POD25: '0',
        superelevacaoRecalquePOD25: '0',
        empenoBase2POD25: '0',
        empenoBase10POD25: '',
        flechaMedidaPOD25: '0',
        variacaoFlechaBase3POD25: '0',

        estacaCadaMetro26: '-44',
        bitolaPasseioPOD26: '0',
        variacaoBitolaBase5POD26: '0',
        superelevacaoRecalquePOD26: '0',
        empenoBase2POD26: '0',
        empenoBase10POD26: '',
        flechaMedidaPOD26: '0',
        variacaoFlechaBase3POD26: '0',

        estacaCadaMetro27: '-43',
        bitolaPasseioPOD27: '0',
        variacaoBitolaBase5POD27: '0',
        superelevacaoRecalquePOD27: '0',
        empenoBase2POD27: '0',
        empenoBase10POD27: '',
        flechaMedidaPOD27: '0',
        variacaoFlechaBase3POD27: '0',

        estacaCadaMetro28: '-42',
        bitolaPasseioPOD28: '0',
        variacaoBitolaBase5POD28: '0',
        superelevacaoRecalquePOD28: '0',
        empenoBase2POD28: '0',
        empenoBase10POD28: '',
        flechaMedidaPOD28: '0',
        variacaoFlechaBase3POD28: '0',

        estacaCadaMetro29: '-41',
        bitolaPasseioPOD29: '0',
        variacaoBitolaBase5POD29: '0',
        superelevacaoRecalquePOD29: '0',
        empenoBase2POD29: '0',
        empenoBase10POD29: '',
        flechaMedidaPOD29: '0',
        variacaoFlechaBase3POD29: '0',

        estacaCadaMetro30: '-40',
        bitolaPasseioPOD30: '0',
        variacaoBitolaBase5POD30: '0',
        superelevacaoRecalquePOD30: '0',
        empenoBase2POD30: '0',
        empenoBase10POD30: '',
        flechaMedidaPOD30: '0',
        variacaoFlechaBase3POD30: '0',

        estacaCadaMetro31: '-39',
        bitolaPasseioPOD31: '0',
        variacaoBitolaBase5POD31: '0',
        superelevacaoRecalquePOD31: '0',
        empenoBase2POD31: '0',
        empenoBase10POD31: '',
        flechaMedidaPOD31: '0',
        variacaoFlechaBase3POD31: '0',

        estacaCadaMetro32: '-38',
        bitolaPasseioPOD32: '0',
        variacaoBitolaBase5POD32: '0',
        superelevacaoRecalquePOD32: '0',
        empenoBase2POD32: '0',
        empenoBase10POD32: '',
        flechaMedidaPOD32: '0',
        variacaoFlechaBase3POD32: '0',

        estacaCadaMetro33: '-37',
        bitolaPasseioPOD33: '0',
        variacaoBitolaBase5POD33: '0',
        superelevacaoRecalquePOD33: '0',
        empenoBase2POD33: '0',
        empenoBase10POD33: '',
        flechaMedidaPOD33: '0',
        variacaoFlechaBase3POD33: '0',

        estacaCadaMetro34: '-36',
        bitolaPasseioPOD34: '0',
        variacaoBitolaBase5POD34: '0',
        superelevacaoRecalquePOD34: '0',
        empenoBase2POD34: '0',
        empenoBase10POD34: '',
        flechaMedidaPOD34: '0',
        variacaoFlechaBase3POD34: '0',

        estacaCadaMetro35: '-35',
        bitolaPasseioPOD35: '0',
        variacaoBitolaBase5POD35: '0',
        superelevacaoRecalquePOD35: '0',
        empenoBase2POD35: '0',
        empenoBase10POD35: '',
        flechaMedidaPOD35: '0',
        variacaoFlechaBase3POD35: '0',

        estacaCadaMetro36: '-34',
        bitolaPasseioPOD36: '0',
        variacaoBitolaBase5POD36: '0',
        superelevacaoRecalquePOD36: '0',
        empenoBase2POD36: '0',
        empenoBase10POD36: '',
        flechaMedidaPOD36: '0',
        variacaoFlechaBase3POD36: '0',

        estacaCadaMetro37: '-33',
        bitolaPasseioPOD37: '0',
        variacaoBitolaBase5POD37: '0',
        superelevacaoRecalquePOD37: '0',
        empenoBase2POD37: '0',
        empenoBase10POD37: '',
        flechaMedidaPOD37: '0',
        variacaoFlechaBase3POD37: '0',

        estacaCadaMetro38: '-32',
        bitolaPasseioPOD38: '0',
        variacaoBitolaBase5POD38: '0',
        superelevacaoRecalquePOD38: '0',
        empenoBase2POD38: '0',
        empenoBase10POD38: '',
        flechaMedidaPOD38: '0',
        variacaoFlechaBase3POD38: '0',

        estacaCadaMetro39: '-31',
        bitolaPasseioPOD39: '0',
        variacaoBitolaBase5POD39: '0',
        superelevacaoRecalquePOD39: '0',
        empenoBase2POD39: '0',
        empenoBase10POD39: '',
        flechaMedidaPOD39: '0',
        variacaoFlechaBase3POD39: '0',

        estacaCadaMetro40: '-30',
        bitolaPasseioPOD40: '0',
        variacaoBitolaBase5POD40: '0',
        superelevacaoRecalquePOD40: '0',
        empenoBase2POD40: '0',
        empenoBase10POD40: '',
        flechaMedidaPOD40: '0',
        variacaoFlechaBase3POD40: '0',

        estacaCadaMetro41: '-29',
        bitolaPasseioPOD41: '0',
        variacaoBitolaBase5POD41: '0',
        superelevacaoRecalquePOD41: '0',
        empenoBase2POD41: '0',
        empenoBase10POD41: '',
        flechaMedidaPOD41: '0',
        variacaoFlechaBase3POD41: '0',

        estacaCadaMetro42: '-28',
        bitolaPasseioPOD42: '0',
        variacaoBitolaBase5POD42: '0',
        superelevacaoRecalquePOD42: '0',
        empenoBase2POD42: '0',
        empenoBase10POD42: '',
        flechaMedidaPOD42: '0',
        variacaoFlechaBase3POD42: '0',

        estacaCadaMetro43: '-27',
        bitolaPasseioPOD43: '0',
        variacaoBitolaBase5POD43: '0',
        superelevacaoRecalquePOD43: '0',
        empenoBase2POD43: '0',
        empenoBase10POD43: '',
        flechaMedidaPOD43: '0',
        variacaoFlechaBase3POD43: '0',

        estacaCadaMetro44: '-26',
        bitolaPasseioPOD44: '0',
        variacaoBitolaBase5POD44: '0',
        superelevacaoRecalquePOD44: '0',
        empenoBase2POD44: '0',
        empenoBase10POD44: '',
        flechaMedidaPOD44: '0',
        variacaoFlechaBase3POD44: '0',

        estacaCadaMetro45: '-25',
        bitolaPasseioPOD45: '0',
        variacaoBitolaBase5POD45: '0',
        superelevacaoRecalquePOD45: '0',
        empenoBase2POD45: '0',
        empenoBase10POD45: '',
        flechaMedidaPOD45: '0',
        variacaoFlechaBase3POD45: '0',

        estacaCadaMetro46: '-24',
        bitolaPasseioPOD46: '0',
        variacaoBitolaBase5POD46: '0',
        superelevacaoRecalquePOD46: '0',
        empenoBase2POD46: '0',
        empenoBase10POD46: '',
        flechaMedidaPOD46: '0',
        variacaoFlechaBase3POD46: '0',

        estacaCadaMetro47: '-23',
        bitolaPasseioPOD47: '0',
        variacaoBitolaBase5POD47: '0',
        superelevacaoRecalquePOD47: '0',
        empenoBase2POD47: '0',
        empenoBase10POD47: '',
        flechaMedidaPOD47: '0',
        variacaoFlechaBase3POD47: '0',

        estacaCadaMetro48: '-22',
        bitolaPasseioPOD48: '0',
        variacaoBitolaBase5POD48: '0',
        superelevacaoRecalquePOD48: '0',
        empenoBase2POD48: '0',
        empenoBase10POD48: '',
        flechaMedidaPOD48: '0',
        variacaoFlechaBase3POD48: '0',

        estacaCadaMetro49: '-21',
        bitolaPasseioPOD49: '0',
        variacaoBitolaBase5POD49: '0',
        superelevacaoRecalquePOD49: '0',
        empenoBase2POD49: '0',
        empenoBase10POD49: '',
        flechaMedidaPOD49: '0',
        variacaoFlechaBase3POD49: '0',

        estacaCadaMetro50: '-20',
        bitolaPasseioPOD50: '0',
        variacaoBitolaBase5POD50: '0',
        superelevacaoRecalquePOD50: '0',
        empenoBase2POD50: '0',
        empenoBase10POD50: '',
        flechaMedidaPOD50: '0',
        variacaoFlechaBase3POD50: '0',

        estacaCadaMetro51: '-19',
        bitolaPasseioPOD51: '0',
        variacaoBitolaBase5POD51: '0',
        superelevacaoRecalquePOD51: '0',
        empenoBase2POD51: '0',
        empenoBase10POD51: '',
        flechaMedidaPOD51: '0',
        variacaoFlechaBase3POD51: '0',

        estacaCadaMetro52: '-18',
        bitolaPasseioPOD52: '0',
        variacaoBitolaBase5POD52: '0',
        superelevacaoRecalquePOD52: '0',
        empenoBase2POD52: '0',
        empenoBase10POD52: '',
        flechaMedidaPOD52: '0',
        variacaoFlechaBase3POD52: '0',

        estacaCadaMetro53: '-17',
        bitolaPasseioPOD53: '0',
        variacaoBitolaBase5POD53: '0',
        superelevacaoRecalquePOD53: '0',
        empenoBase2POD53: '0',
        empenoBase10POD53: '',
        flechaMedidaPOD53: '0',
        variacaoFlechaBase3POD53: '0',

        estacaCadaMetro54: '-16',
        bitolaPasseioPOD54: '0',
        variacaoBitolaBase5POD54: '0',
        superelevacaoRecalquePOD54: '0',
        empenoBase2POD54: '0',
        empenoBase10POD54: '',
        flechaMedidaPOD54: '0',
        variacaoFlechaBase3POD54: '0',

        estacaCadaMetro55: '-15',
        bitolaPasseioPOD55: '0',
        variacaoBitolaBase5POD55: '0',
        superelevacaoRecalquePOD55: '0',
        empenoBase2POD55: '0',
        empenoBase10POD55: '',
        flechaMedidaPOD55: '0',
        variacaoFlechaBase3POD55: '0',

        estacaCadaMetro56: '-14',
        bitolaPasseioPOD56: '0',
        variacaoBitolaBase5POD56: '0',
        superelevacaoRecalquePOD56: '0',
        empenoBase2POD56: '0',
        empenoBase10POD56: '',
        flechaMedidaPOD56: '0',
        variacaoFlechaBase3POD56: '0',

        estacaCadaMetro57: '-13',
        bitolaPasseioPOD57: '0',
        variacaoBitolaBase5POD57: '0',
        superelevacaoRecalquePOD57: '0',
        empenoBase2POD57: '0',
        empenoBase10POD57: '',
        flechaMedidaPOD57: '0',
        variacaoFlechaBase3POD57: '0',

        estacaCadaMetro58: '-12',
        bitolaPasseioPOD58: '0',
        variacaoBitolaBase5POD58: '0',
        superelevacaoRecalquePOD58: '0',
        empenoBase2POD58: '0',
        empenoBase10POD58: '',
        flechaMedidaPOD58: '0',
        variacaoFlechaBase3POD58: '0',

        estacaCadaMetro59: '-11',
        bitolaPasseioPOD59: '0',
        variacaoBitolaBase5POD59: '0',
        superelevacaoRecalquePOD59: '0',
        empenoBase2POD59: '0',
        empenoBase10POD59: '',
        flechaMedidaPOD59: '0',
        variacaoFlechaBase3POD59: '0',

        estacaCadaMetro60: '-10',
        bitolaPasseioPOD60: '0',
        variacaoBitolaBase5POD60: '0',
        superelevacaoRecalquePOD60: '0',
        empenoBase2POD60: '0',
        empenoBase10POD60: '',
        flechaMedidaPOD60: '0',
        variacaoFlechaBase3POD60: '0',

        estacaCadaMetro61: '-9',
        bitolaPasseioPOD61: '0',
        variacaoBitolaBase5POD61: '0',
        superelevacaoRecalquePOD61: '0',
        empenoBase2POD61: '0',
        empenoBase10POD61: '',
        flechaMedidaPOD61: '0',
        variacaoFlechaBase3POD61: '0',

        estacaCadaMetro62: '-8',
        bitolaPasseioPOD62: '0',
        variacaoBitolaBase5POD62: '0',
        superelevacaoRecalquePOD62: '0',
        empenoBase2POD62: '0',
        empenoBase10POD62: '',
        flechaMedidaPOD62: '0',
        variacaoFlechaBase3POD62: '0',

        estacaCadaMetro63: '-7',
        bitolaPasseioPOD63: '0',
        variacaoBitolaBase5POD63: '0',
        superelevacaoRecalquePOD63: '0',
        empenoBase2POD63: '0',
        empenoBase10POD63: '',
        flechaMedidaPOD63: '0',
        variacaoFlechaBase3POD63: '0',

        estacaCadaMetro64: '-6',
        bitolaPasseioPOD64: '0',
        variacaoBitolaBase5POD64: '0',
        superelevacaoRecalquePOD64: '0',
        empenoBase2POD64: '0',
        empenoBase10POD64: '',
        flechaMedidaPOD64: '0',
        variacaoFlechaBase3POD64: '0',

        estacaCadaMetro65: '-5',
        bitolaPasseioPOD65: '0',
        variacaoBitolaBase5POD65: '0',
        superelevacaoRecalquePOD65: '0',
        empenoBase2POD65: '0',
        empenoBase10POD65: '',
        flechaMedidaPOD65: '0',
        variacaoFlechaBase3POD65: '0',

        estacaCadaMetro66: '-4',
        bitolaPasseioPOD66: '0',
        variacaoBitolaBase5POD66: '0',
        superelevacaoRecalquePOD66: '0',
        empenoBase2POD66: '0',
        empenoBase10POD66: '',
        flechaMedidaPOD66: '0',
        variacaoFlechaBase3POD66: '0',

        estacaCadaMetro67: '-3',
        bitolaPasseioPOD67: '0',
        variacaoBitolaBase5POD67: '0',
        superelevacaoRecalquePOD67: '0',
        empenoBase2POD67: '0',
        empenoBase10POD67: '',
        flechaMedidaPOD67: '0',
        variacaoFlechaBase3POD67: '0',

        estacaCadaMetro68: '-2',
        bitolaPasseioPOD68: '0',
        variacaoBitolaBase5POD68: '0',
        superelevacaoRecalquePOD68: '0',
        empenoBase2POD68: '0',
        empenoBase10POD68: '',
        flechaMedidaPOD68: '0',
        variacaoFlechaBase3POD68: '0',

        estacaCadaMetro69: '-1',
        bitolaPasseioPOD69: '0',
        variacaoBitolaBase5POD69: '0',
        superelevacaoRecalquePOD69: '0',
        empenoBase2POD69: '0',
        empenoBase10POD69: '',
        flechaMedidaPOD69: '0',
        variacaoFlechaBase3POD69: '0',

        estacaCadaMetro70: '0',
        bitolaPasseioPOD70: '0',
        variacaoBitolaBase5POD70: '0',
        superelevacaoRecalquePOD70: '0',
        empenoBase2POD70: '0',
        empenoBase10POD70: '',
        flechaMedidaPOD70: '0',
        variacaoFlechaBase3POD70: '0',

        estacaCadaMetro71: '1',
        bitolaPasseioPOD71: '0',
        variacaoBitolaBase5POD71: '0',
        superelevacaoRecalquePOD71: '0',
        empenoBase2POD71: '0',
        empenoBase10POD71: '0',
        flechaMedidaPOD71: '0',
        variacaoFlechaBase3POD71: '0',

        estacaCadaMetro72: '2',
        bitolaPasseioPOD72: '0',
        variacaoBitolaBase5POD72: '0',
        superelevacaoRecalquePOD72: '0',
        empenoBase2POD72: '0',
        empenoBase10POD72: '',
        flechaMedidaPOD72: '0',
        variacaoFlechaBase3POD72: '0',

        estacaCadaMetro73: '3',
        bitolaPasseioPOD73: '0',
        variacaoBitolaBase5POD73: '0',
        superelevacaoRecalquePOD73: '0',
        empenoBase2POD73: '0',
        empenoBase10POD73: '',
        flechaMedidaPOD73: '0',
        variacaoFlechaBase3POD73: '0',

        estacaCadaMetro74: '4',
        bitolaPasseioPOD74: '0',
        variacaoBitolaBase5POD74: '0',
        superelevacaoRecalquePOD74: '0',
        empenoBase2POD74: '0',
        empenoBase10POD74: '',
        flechaMedidaPOD74: '0',
        variacaoFlechaBase3POD74: '0',

        estacaCadaMetro75: '5',
        bitolaPasseioPOD75: '0',
        variacaoBitolaBase5POD75: '0',
        superelevacaoRecalquePOD75: '0',
        empenoBase2POD75: '0',
        empenoBase10POD75: '',
        flechaMedidaPOD75: '0',
        variacaoFlechaBase3POD75: '0',

        estacaCadaMetro76: '6',
        bitolaPasseioPOD76: '0',
        variacaoBitolaBase5POD76: '0',
        superelevacaoRecalquePOD76: '0',
        empenoBase2POD76: '0',
        empenoBase10POD76: '',
        flechaMedidaPOD76: '0',
        variacaoFlechaBase3POD76: '0',

        estacaCadaMetro77: '7',
        bitolaPasseioPOD77: '0',
        variacaoBitolaBase5POD77: '0',
        superelevacaoRecalquePOD77: '0',
        empenoBase2POD77: '0',
        empenoBase10POD77: '',
        flechaMedidaPOD77: '0',
        variacaoFlechaBase3POD77: '0',

        estacaCadaMetro78: '8',
        bitolaPasseioPOD78: '0',
        variacaoBitolaBase5POD78: '0',
        superelevacaoRecalquePOD78: '0',
        empenoBase2POD78: '0',
        empenoBase10POD78: '',
        flechaMedidaPOD78: '0',
        variacaoFlechaBase3POD78: '0',

        estacaCadaMetro79: '9',
        bitolaPasseioPOD79: '0',
        variacaoBitolaBase5POD79: '0',
        superelevacaoRecalquePOD79: '0',
        empenoBase2POD79: '0',
        empenoBase10POD79: '',
        flechaMedidaPOD79: '0',
        variacaoFlechaBase3POD79: '0',

        estacaCadaMetro80: '10',
        bitolaPasseioPOD80: '0',
        variacaoBitolaBase5POD80: '0',
        superelevacaoRecalquePOD80: '0',
        empenoBase2POD80: '0',
        empenoBase10POD80: '',
        flechaMedidaPOD80: '0',
        variacaoFlechaBase3POD80: '0',

        estacaCadaMetro81: '11',
        bitolaPasseioPOD81: '0',
        variacaoBitolaBase5POD81: '0',
        superelevacaoRecalquePOD81: '0',
        empenoBase2POD81: '0',
        empenoBase10POD81: '',
        flechaMedidaPOD81: '0',
        variacaoFlechaBase3POD81: '0',

        estacaCadaMetro82: '12',
        bitolaPasseioPOD82: '0',
        variacaoBitolaBase5POD82: '0',
        superelevacaoRecalquePOD82: '0',
        empenoBase2POD82: '0',
        empenoBase10POD82: '',
        flechaMedidaPOD82: '0',
        variacaoFlechaBase3POD82: '0',

        estacaCadaMetro83: '13',
        bitolaPasseioPOD83: '0',
        variacaoBitolaBase5POD83: '0',
        superelevacaoRecalquePOD83: '0',
        empenoBase2POD83: '0',
        empenoBase10POD83: '',
        flechaMedidaPOD83: '0',
        variacaoFlechaBase3POD83: '0',

        estacaCadaMetro84: '14',
        bitolaPasseioPOD84: '0',
        variacaoBitolaBase5POD84: '0',
        superelevacaoRecalquePOD84: '0',
        empenoBase2POD84: '0',
        empenoBase10POD84: '',
        flechaMedidaPOD84: '0',
        variacaoFlechaBase3POD84: '0',

        estacaCadaMetro85: '15',
        bitolaPasseioPOD85: '0',
        variacaoBitolaBase5POD85: '0',
        superelevacaoRecalquePOD85: '0',
        empenoBase2POD85: '0',
        empenoBase10POD85: '',
        flechaMedidaPOD85: '0',
        variacaoFlechaBase3POD85: '0',

        estacaCadaMetro86: '16',
        bitolaPasseioPOD86: '0',
        variacaoBitolaBase5POD86: '0',
        superelevacaoRecalquePOD86: '0',
        empenoBase2POD86: '0',
        empenoBase10POD86: '',
        flechaMedidaPOD86: '0',
        variacaoFlechaBase3POD86: '0',

        estacaCadaMetro87: '17',
        bitolaPasseioPOD87: '0',
        variacaoBitolaBase5POD87: '0',
        superelevacaoRecalquePOD87: '0',
        empenoBase2POD87: '0',
        empenoBase10POD87: '',
        flechaMedidaPOD87: '0',
        variacaoFlechaBase3POD87: '0',

        estacaCadaMetro88: '18',
        bitolaPasseioPOD88: '0',
        variacaoBitolaBase5POD88: '0',
        superelevacaoRecalquePOD88: '0',
        empenoBase2POD88: '0',
        empenoBase10POD88: '',
        flechaMedidaPOD88: '0',
        variacaoFlechaBase3POD88: '0',

        estacaCadaMetro89: '19',
        bitolaPasseioPOD89: '0',
        variacaoBitolaBase5POD89: '0',
        superelevacaoRecalquePOD89: '0',
        empenoBase2POD89: '0',
        empenoBase10POD89: '',
        flechaMedidaPOD89: '0',
        variacaoFlechaBase3POD89: '0',

        estacaCadaMetro90: '20',
        bitolaPasseioPOD90: '0',
        variacaoBitolaBase5POD90: '0',
        superelevacaoRecalquePOD90: '0',
        empenoBase2POD90: '0',
        empenoBase10POD90: '',
        flechaMedidaPOD90: '0',
        variacaoFlechaBase3POD90: '0',

        estacaCadaMetro91: '21',
        bitolaPasseioPOD91: '0',
        variacaoBitolaBase5POD91: '0',
        superelevacaoRecalquePOD91: '0',
        empenoBase2POD91: '0',
        empenoBase10POD91: '',
        flechaMedidaPOD91: '0',
        variacaoFlechaBase3POD91: '0',

        estacaCadaMetro92: '22',
        bitolaPasseioPOD92: '0',
        variacaoBitolaBase5POD92: '0',
        superelevacaoRecalquePOD92: '0',
        empenoBase2POD92: '0',
        empenoBase10POD92: '',
        flechaMedidaPOD92: '0',
        variacaoFlechaBase3POD92: '0',

        estacaCadaMetro93: '23',
        bitolaPasseioPOD93: '0',
        variacaoBitolaBase5POD93: '0',
        superelevacaoRecalquePOD93: '0',
        empenoBase2POD93: '0',
        empenoBase10POD93: '',
        flechaMedidaPOD93: '0',
        variacaoFlechaBase3POD93: '0',

        estacaCadaMetro94: '24',
        bitolaPasseioPOD94: '0',
        variacaoBitolaBase5POD94: '0',
        superelevacaoRecalquePOD94: '0',
        empenoBase2POD94: '0',
        empenoBase10POD94: '',
        flechaMedidaPOD94: '0',
        variacaoFlechaBase3POD94: '0',

        estacaCadaMetro95: '25',
        bitolaPasseioPOD95: '0',
        variacaoBitolaBase5POD95: '0',
        superelevacaoRecalquePOD95: '0',
        empenoBase2POD95: '0',
        empenoBase10POD95: '',
        flechaMedidaPOD95: '0',
        variacaoFlechaBase3POD95: '0',

        estacaCadaMetro96: '26',
        bitolaPasseioPOD96: '0',
        variacaoBitolaBase5POD96: '0',
        superelevacaoRecalquePOD96: '0',
        empenoBase2POD96: '0',
        empenoBase10POD96: '',
        flechaMedidaPOD96: '0',
        variacaoFlechaBase3POD96: '0',

        estacaCadaMetro97: '27',
        bitolaPasseioPOD97: '0',
        variacaoBitolaBase5POD97: '0',
        superelevacaoRecalquePOD97: '0',
        empenoBase2POD97: '0',
        empenoBase10POD97: '',
        flechaMedidaPOD97: '0',
        variacaoFlechaBase3POD97: '0',

        estacaCadaMetro98: '28',
        bitolaPasseioPOD98: '0',
        variacaoBitolaBase5POD98: '0',
        superelevacaoRecalquePOD98: '0',
        empenoBase2POD98: '0',
        empenoBase10POD98: '',
        flechaMedidaPOD98: '0',
        variacaoFlechaBase3POD98: '0',

        estacaCadaMetro99: '29',
        bitolaPasseioPOD99: '0',
        variacaoBitolaBase5POD99: '0',
        superelevacaoRecalquePOD99: '0',
        empenoBase2POD99: '0',
        empenoBase10POD99: '',
        flechaMedidaPOD99: '0',
        variacaoFlechaBase3POD99: '0',

        estacaCadaMetro100: '30',
        bitolaPasseioPOD100: '0',
        variacaoBitolaBase5POD100: '0',
        superelevacaoRecalquePOD100: '0',
        empenoBase2POD100: '0',
        empenoBase10POD100: '',
        flechaMedidaPOD100: '0',
        variacaoFlechaBase3POD100: '0'


	});	

	const radio_props = [
		{ label: 'Não	', value: false },
		{ label: 'Sim', value: true }
	];
	const radio_props2 = [
		{ label: '1 ', value: 1 },
		{ label: '2 ', value: 2 },
		{ label: '3 ', value: 3 },
		{ label: '4 ', value: 4 },
		{ label: '5 ', value: 5 }
	];
	const radio_props3 = [
		{ label: 'Curva No. ', value: 'curva' },
		{ label: 'Tangente ', value: 'tangente' }
	];
	const radio_props4 = [
		{ label: 'Aclive ', value: 1 },
		{ label: 'Declive ', value: 2 }
	];
	const radio_props5 = [
		{ label: 'Prego  ', value: 1 },
		{ label: 'Tirefond ', value: 2 },
		{ label: 'Pandrol  ', value: 3 },
		{ label: 'Deenik ', value: 4 },
		{ label: 'SKL ', value: 5 }
	];
	const radio_props6 = [
		{ label: 'Firme  ', value: 1 },
		{ label: 'Frouxo ', value: 2 },
		{ label: 'Faltando fixação  ', value: 3 },
		{ label: 'Movimentação (Passeio do Trilho)  ', value: 4 }
	];
	const radio_props7 = [
		{ label: 'Carbono ', value: 1 },
		{ label: 'Tratado ', value: 2 },
		{ label: 'Liga  ', value: 3 }
	];
	const radio_props8 = [
		{ label: 'TR25 ', value: 25 },
		{ label: 'TR32 ', value: 32 },
		{ label: 'TR37 ', value: 37 },
		{ label: 'TR40 ', value: 40 },
		{ label: 'TR45 ', value: 45 },
		{ label: 'TR50 ', value: 50 },
		{ label: 'TR57 ', value: 57 },
		{ label: 'TR68 ', value: 68 },
		{ label: 'UIC60', value: 60 }
	];
	const radio_props9 = [
		{ label: 'Seco ', value: 1 },
		{ label: 'Lubrificado ', value: 2 },
		{ label: 'Excesso de Lubrificação  ', value: 3 }
	];
	const radio_props10 = [
		{ label: 'Novo ', value: 1 },
		{ label: 'Esmagado ', value: 2 },
		{ label: 'Reemprego  ', value: 3 },
		{ label: 'Patilhado  ', value: 4 },
		{ label: 'Esmerilhado  ', value: 5 },
		{ label: 'Soldado  ', value: 6 }
	];
	const radio_props11 = [
		{ label: 'Classe 1  ', value: 1 },
		{ label: 'Classe 2', value: 2 }
	];
	const requiredFields = (obj) => {
		
		let toReturn = "";
		
		if(obj.investigador1 == '' || obj.idInvestigador1 == 0) {
			toReturn += "Investigador deve ser preenchido\n"
		}
		
		if(obj.idInvestigador1 != 0 && obj.idInvestigador1 == obj.idInvestigador2) {
			toReturn += "Investigador 1 igual ao Investigador 2\n"
		}
		
		if (obj.descricao == ''){
			toReturn += "Descrição deve ser preenchida.\n"
		}

		if (obj.dataInspecao == ''){
			toReturn += "Data inspeção deve ser preenchida.\n"
		}
		
		if (obj.curvaOuTangente == ''){
			toReturn += "Curva No. ou Tangente deve ser selecionado.\n"
		}
		
		return toReturn;
	}

	const restricaoVelocidade = useRef(null);
	const classeVia = useRef(null);
	const curvaOuTangente = useRef(null);
	const tipoRampa = useRef(null);
	const tipoFixacao = useRef(null);
	const estadoFixacao = useRef(null);
	const sinaisInclinacao = useRef(null);
	const existePlacaApoio = useRef(null);
	const trilhosTipo = useRef(null);
	const trilhosPerfil = useRef(null);
	const trilhosLubrificacao = useRef(null);
	const trilhoFraturado = useRef(null);
	const trilhosOxidacao = useRef(null);
	const limiteSegClassePOD = useRef(null);
	const estadoPod = useRef(null);
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

		//await gravarLogLocal(" - Limpando dados do formulário Dados da Via.");
		
		await deleteFormByRoute(routes.dadosVia);
		
		await onStart();
		
		setQueryDados1('');
		setQueryDados2('');
		setResultQuery1([]);
		setResultQuery2([]);
		setDadosForm({
			...dadosForm, idBoletim: '',
			dataInspecao: dateSelect.date1+' '+dateSelect.selectedHours1+':'+dateSelect.selectedMinutes1,
			investigador1: '',
			investigador2: '',
			descricao: '',
			kmH: '',
			restricaoVelocidade: '',
			motivoRestricao: '',
			classeVia: '',
			locoComandante: '',
			primeiroVeiculo: '',
			ultimoVeiculo: '',
			kmPOD: '',
			percursoDescarrilado: '',
			subidaFriso: false,
			aberturaBitola: false,
			elevacaoRoda: false,
			fraturaTrilhos: false,
			objetosEstranhos: false,
			observacao: '',
			marcasCurtas: '',
			marcasLongas: '',
			marcasAbrasao: false,
			marcasQueda: false,
			semMarcas: false,
			marcasRegulares: false,
			marcasAlma: false,
			curvaOuTangente: '',
			curva: '',
			raio: '',
			tangente: '',
			rampa: '',
			tipoRampa: '',
			inspecaoCarro: dateSelect.date3,
			obsCarro: '',
			inspecaoLinha: dateSelect.date2,
			obsLinha: '',
			inspecaoCruzadaTrens: dateSelect.date4,
			juntaSolta: false,
			desnivelada: false,
			desencontrada: false,
			faltandoParafuso: false,
			madeira: false,
			concreto: false,
			plastico: false,
			aco: false,
			sequenciasDormentes: '',
			bom: false,
			ruim: false,
			laqueado: false,
			foraEixo: false,
			inexistente: false,
			domentesObs: '',
			tipoFixacao: '',
			outrosFixacao: '',
			estadoFixacao: '',
			observacaoFixacao: '',
			sinaisInclinacao: '',
			ladoExterno: false,
			ladoInterno: false,
			existePlacaApoio: '',
			brita: false,
			terra: false,
			lastroOutros: false,
			lastroNormal: false,
			fracoOmbro: false,
			fracoCentro: false,
			contaminado: false,
			lastroObs: '',
			drenagemBom: false,
			drenagemRuim: false,
			drenagemDesnecessario: false,
			drenagemPresencaLaqueado: false,
			drenagemObs: '',
			trilhosTipo: '',
			trilhosPerfil: '',
			trilhosOutro: '',
			trilhosLubrificacao: '',
			comprimentoBarra: '',
			trilhoFraturado: '',
			tipoFratura: '',
			trilhosOxidacao: '',
			trilhosDesgasteHorizontal: '',
			trilhosDesgasteVertical: '',
			estadoPod: '',
			idInvestigador1: 0,
			idInvestigador2: 0,
			custosMateriais: '0.00',
			custosDeslocamento: '0.00',
			custosPessoal: '0.00',
			custosTotal: '0.00',
			limiteSegClassePOD: true,

		

			estacaCadaMetro: '-70',
			bitolaPasseioPOD: '0',
			variacaoBitolaBase5POD: '0',
			superelevacaoRecalquePOD: '0',
			empenoBase2POD: '0',
			empenoBase10POD: '',
			flechaMedidaPOD: '0',
			variacaoFlechaBase3POD: '0',
			
			estacaCadaMetro1: '-69',
			bitolaPasseioPOD1: '0',
			variacaoBitolaBase5POD1: '0',
			superelevacaoRecalquePOD1: '0',
			empenoBase2POD1: '0',
			empenoBase10POD1: '',
			flechaMedidaPOD1: '0',
			variacaoFlechaBase3POD1: '0',

			estacaCadaMetro2: '-68',
			bitolaPasseioPOD2: '0',
			variacaoBitolaBase5POD2: '0',
			superelevacaoRecalquePOD2: '0',
			empenoBase2POD2: '0',
			empenoBase10POD2: '',
			flechaMedidaPOD2: '0',
			variacaoFlechaBase3POD2: '0',

			estacaCadaMetro3: '-67',
			bitolaPasseioPOD3: '0',
			variacaoBitolaBase5POD3: '0',
			superelevacaoRecalquePOD3: '0',
			empenoBase2POD3: '0',
			empenoBase10POD3: '',
			flechaMedidaPOD3: '0',
			variacaoFlechaBase3POD3: '0',

			estacaCadaMetro4: '-66',
			bitolaPasseioPOD4: '0',
			variacaoBitolaBase5POD4: '0',
			superelevacaoRecalquePOD4: '0',
			empenoBase2POD4: '0',
			empenoBase10POD4: '',
			flechaMedidaPOD4: '0',
			variacaoFlechaBase3POD4: '0',
			
			estacaCadaMetro5: '-65',
			bitolaPasseioPOD5: '0',
			variacaoBitolaBase5POD5: '0',
			superelevacaoRecalquePOD5: '0',
			empenoBase2POD5: '0',
			empenoBase10POD5: '',
			flechaMedidaPOD5: '0',
			variacaoFlechaBase3POD5: '0',

			estacaCadaMetro6: '-64',
			bitolaPasseioPOD6: '0',
			variacaoBitolaBase5POD6: '0',
			superelevacaoRecalquePOD6: '0',
			empenoBase2POD6: '0',
			empenoBase10POD6: '',
			flechaMedidaPOD6: '0',
			variacaoFlechaBase3POD6: '0',

			estacaCadaMetro7: '-63',
			bitolaPasseioPOD7: '0',
			variacaoBitolaBase5POD7: '0',
			superelevacaoRecalquePOD7: '0',
			empenoBase2POD7: '0',
			empenoBase10POD7: '',
			flechaMedidaPOD7: '0',
			variacaoFlechaBase3POD7: '0',

			estacaCadaMetro8: '-62',
			bitolaPasseioPOD8: '0',
			variacaoBitolaBase5POD8: '0',
			superelevacaoRecalquePOD8: '0',
			empenoBase2POD8: '0',
			empenoBase10POD8: '',
			flechaMedidaPOD8: '0',
			variacaoFlechaBase3POD8: '0',

			estacaCadaMetro9: '-61',
			bitolaPasseioPOD9: '0',
			variacaoBitolaBase5POD9: '0',
			superelevacaoRecalquePOD9: '0',
			empenoBase2POD9: '0',
			empenoBase10POD9: '',
			flechaMedidaPOD9: '0',
			variacaoFlechaBase3POD9: '0',

			estacaCadaMetro10: '-60',
			bitolaPasseioPOD10: '0',
			variacaoBitolaBase5POD10: '0',
			superelevacaoRecalquePOD10: '0',
			empenoBase2POD10: '0',
			empenoBase10POD10: '',
			flechaMedidaPOD10: '0',
			variacaoFlechaBase3POD10: '0',

			estacaCadaMetro11: '-59',
			bitolaPasseioPOD11: '0',
			variacaoBitolaBase5POD11: '0',
			superelevacaoRecalquePOD11: '0',
			empenoBase2POD11: '0',
			empenoBase10POD11: '',
			flechaMedidaPOD11: '0',
			variacaoFlechaBase3POD11: '0',
			
			estacaCadaMetro12: '-58',
			bitolaPasseioPOD12: '0',
			variacaoBitolaBase5POD12: '0',
			superelevacaoRecalquePOD12: '0',
			empenoBase2POD12: '0',
			empenoBase10POD12: '',
			flechaMedidaPOD12: '0',
			variacaoFlechaBase3POD12: '0',
			
			estacaCadaMetro13: '-57',
			bitolaPasseioPOD13: '0',
			variacaoBitolaBase5POD13: '0',
			superelevacaoRecalquePOD13: '0',
			empenoBase2POD13: '0',
			empenoBase10POD13: '',
			flechaMedidaPOD13: '0',
			variacaoFlechaBase3POD13: '0',

			estacaCadaMetro14: '-56',
			bitolaPasseioPOD14: '0',
			variacaoBitolaBase5POD14: '0',
			superelevacaoRecalquePOD14: '0',
			empenoBase2POD14: '0',
			empenoBase10POD14: '',
			flechaMedidaPOD14: '0',
			variacaoFlechaBase3POD14: '0',

			estacaCadaMetro15: '-55',
			bitolaPasseioPOD15: '0',
			variacaoBitolaBase5POD15: '0',
			superelevacaoRecalquePOD15: '0',
			empenoBase2POD15: '0',
			empenoBase10POD15: '',
			flechaMedidaPOD15: '0',
			variacaoFlechaBase3POD15: '0',

			estacaCadaMetro16: '-54',
			bitolaPasseioPOD16: '0',
			variacaoBitolaBase5POD16: '0',
			superelevacaoRecalquePOD16: '0',
			empenoBase2POD16: '0',
			empenoBase10POD16: '',
			flechaMedidaPOD16: '0',
			variacaoFlechaBase3POD16: '0',

			estacaCadaMetro17: '-53',
			bitolaPasseioPOD17: '0',
			variacaoBitolaBase5POD17: '0',
			superelevacaoRecalquePOD17: '0',
			empenoBase2POD17: '0',
			empenoBase10POD17: '',
			flechaMedidaPOD17: '0',
			variacaoFlechaBase3POD17: '0',

			estacaCadaMetro18: '-52',
			bitolaPasseioPOD18: '0',
			variacaoBitolaBase5POD18: '0',
			superelevacaoRecalquePOD18: '0',
			empenoBase2POD18: '0',
			empenoBase10POD18: '',
			flechaMedidaPOD18: '0',
			variacaoFlechaBase3POD18: '0',

			estacaCadaMetro19: '-51',
			bitolaPasseioPOD19: '0',
			variacaoBitolaBase5POD19: '0',
			superelevacaoRecalquePOD19: '0',
			empenoBase2POD19: '0',
			empenoBase10POD19: '',
			flechaMedidaPOD19: '0',
			variacaoFlechaBase3POD19: '0',

			estacaCadaMetro20: '-50',
			bitolaPasseioPOD20: '0',
			variacaoBitolaBase5POD20: '0',
			superelevacaoRecalquePOD20: '0',
			empenoBase2POD20: '0',
			empenoBase10POD20: '',
			flechaMedidaPOD20: '0',
			variacaoFlechaBase3POD20: '0',

			estacaCadaMetro21: '-49',
			bitolaPasseioPOD21: '0',
			variacaoBitolaBase5POD21: '0',
			superelevacaoRecalquePOD21: '0',
			empenoBase2POD21: '0',
			empenoBase10POD21: '',
			flechaMedidaPOD21: '0',
			variacaoFlechaBase3POD21: '0',

			estacaCadaMetro22: '-48',
			bitolaPasseioPOD22: '0',
			variacaoBitolaBase5POD22: '0',
			superelevacaoRecalquePOD22: '0',
			empenoBase2POD22: '0',
			empenoBase10POD22: '',
			flechaMedidaPOD22: '0',
			variacaoFlechaBase3POD22: '0',

			estacaCadaMetro23: '-47',
			bitolaPasseioPOD23: '0',
			variacaoBitolaBase5POD23: '0',
			superelevacaoRecalquePOD23: '0',
			empenoBase2POD23: '0',
			empenoBase10POD23: '',
			flechaMedidaPOD23: '0',
			variacaoFlechaBase3POD23: '0',

			estacaCadaMetro24: '-46',
			bitolaPasseioPOD24: '0',
			variacaoBitolaBase5POD24: '0',
			superelevacaoRecalquePOD24: '0',
			empenoBase2POD24: '0',
			empenoBase10POD24: '',
			flechaMedidaPOD24: '0',
			variacaoFlechaBase3POD24: '0',

			estacaCadaMetro25: '-45',
			bitolaPasseioPOD25: '0',
			variacaoBitolaBase5POD25: '0',
			superelevacaoRecalquePOD25: '0',
			empenoBase2POD25: '0',
			empenoBase10POD25: '',
			flechaMedidaPOD25: '0',
			variacaoFlechaBase3POD25: '0',

			estacaCadaMetro26: '-44',
			bitolaPasseioPOD26: '0',
			variacaoBitolaBase5POD26: '0',
			superelevacaoRecalquePOD26: '0',
			empenoBase2POD26: '0',
			empenoBase10POD26: '',
			flechaMedidaPOD26: '0',
			variacaoFlechaBase3POD26: '0',

			estacaCadaMetro27: '-43',
			bitolaPasseioPOD27: '0',
			variacaoBitolaBase5POD27: '0',
			superelevacaoRecalquePOD27: '0',
			empenoBase2POD27: '0',
			empenoBase10POD27: '',
			flechaMedidaPOD27: '0',
			variacaoFlechaBase3POD27: '0',

			estacaCadaMetro28: '-42',
			bitolaPasseioPOD28: '0',
			variacaoBitolaBase5POD28: '0',
			superelevacaoRecalquePOD28: '0',
			empenoBase2POD28: '0',
			empenoBase10POD28: '',
			flechaMedidaPOD28: '0',
			variacaoFlechaBase3POD28: '0',

			estacaCadaMetro29: '-41',
			bitolaPasseioPOD29: '0',
			variacaoBitolaBase5POD29: '0',
			superelevacaoRecalquePOD29: '0',
			empenoBase2POD29: '0',
			empenoBase10POD29: '',
			flechaMedidaPOD29: '0',
			variacaoFlechaBase3POD29: '0',

			estacaCadaMetro30: '-40',
			bitolaPasseioPOD30: '0',
			variacaoBitolaBase5POD30: '0',
			superelevacaoRecalquePOD30: '0',
			empenoBase2POD30: '0',
			empenoBase10POD30: '',
			flechaMedidaPOD30: '0',
			variacaoFlechaBase3POD30: '0',

			estacaCadaMetro31: '-39',
			bitolaPasseioPOD31: '0',
			variacaoBitolaBase5POD31: '0',
			superelevacaoRecalquePOD31: '0',
			empenoBase2POD31: '0',
			empenoBase10POD31: '',
			flechaMedidaPOD31: '0',
			variacaoFlechaBase3POD31: '0',

			estacaCadaMetro32: '-38',
			bitolaPasseioPOD32: '0',
			variacaoBitolaBase5POD32: '0',
			superelevacaoRecalquePOD32: '0',
			empenoBase2POD32: '0',
			empenoBase10POD32: '',
			flechaMedidaPOD32: '0',
			variacaoFlechaBase3POD32: '0',

			estacaCadaMetro33: '-37',
			bitolaPasseioPOD33: '0',
			variacaoBitolaBase5POD33: '0',
			superelevacaoRecalquePOD33: '0',
			empenoBase2POD33: '0',
			empenoBase10POD33: '',
			flechaMedidaPOD33: '0',
			variacaoFlechaBase3POD33: '0',

			estacaCadaMetro34: '-36',
			bitolaPasseioPOD34: '0',
			variacaoBitolaBase5POD34: '0',
			superelevacaoRecalquePOD34: '0',
			empenoBase2POD34: '0',
			empenoBase10POD34: '',
			flechaMedidaPOD34: '0',
			variacaoFlechaBase3POD34: '0',

			estacaCadaMetro35: '-35',
			bitolaPasseioPOD35: '0',
			variacaoBitolaBase5POD35: '0',
			superelevacaoRecalquePOD35: '0',
			empenoBase2POD35: '0',
			empenoBase10POD35: '',
			flechaMedidaPOD35: '0',
			variacaoFlechaBase3POD35: '0',

			estacaCadaMetro36: '-34',
			bitolaPasseioPOD36: '0',
			variacaoBitolaBase5POD36: '0',
			superelevacaoRecalquePOD36: '0',
			empenoBase2POD36: '0',
			empenoBase10POD36: '',
			flechaMedidaPOD36: '0',
			variacaoFlechaBase3POD36: '0',

			estacaCadaMetro37: '-33',
			bitolaPasseioPOD37: '0',
			variacaoBitolaBase5POD37: '0',
			superelevacaoRecalquePOD37: '0',
			empenoBase2POD37: '0',
			empenoBase10POD37: '',
			flechaMedidaPOD37: '0',
			variacaoFlechaBase3POD37: '0',

			estacaCadaMetro38: '-32',
			bitolaPasseioPOD38: '0',
			variacaoBitolaBase5POD38: '0',
			superelevacaoRecalquePOD38: '0',
			empenoBase2POD38: '0',
			empenoBase10POD38: '',
			flechaMedidaPOD38: '0',
			variacaoFlechaBase3POD38: '0',

			estacaCadaMetro39: '-31',
			bitolaPasseioPOD39: '0',
			variacaoBitolaBase5POD39: '0',
			superelevacaoRecalquePOD39: '0',
			empenoBase2POD39: '0',
			empenoBase10POD39: '',
			flechaMedidaPOD39: '0',
			variacaoFlechaBase3POD39: '0',

			estacaCadaMetro40: '-30',
			bitolaPasseioPOD40: '0',
			variacaoBitolaBase5POD40: '0',
			superelevacaoRecalquePOD40: '0',
			empenoBase2POD40: '0',
			empenoBase10POD40: '',
			flechaMedidaPOD40: '0',
			variacaoFlechaBase3POD40: '0',

			estacaCadaMetro41: '-29',
			bitolaPasseioPOD41: '0',
			variacaoBitolaBase5POD41: '0',
			superelevacaoRecalquePOD41: '0',
			empenoBase2POD41: '0',
			empenoBase10POD41: '',
			flechaMedidaPOD41: '0',
			variacaoFlechaBase3POD41: '0',

			estacaCadaMetro42: '-28',
			bitolaPasseioPOD42: '0',
			variacaoBitolaBase5POD42: '0',
			superelevacaoRecalquePOD42: '0',
			empenoBase2POD42: '0',
			empenoBase10POD42: '',
			flechaMedidaPOD42: '0',
			variacaoFlechaBase3POD42: '0',

			estacaCadaMetro43: '-27',
			bitolaPasseioPOD43: '0',
			variacaoBitolaBase5POD43: '0',
			superelevacaoRecalquePOD43: '0',
			empenoBase2POD43: '0',
			empenoBase10POD43: '',
			flechaMedidaPOD43: '0',
			variacaoFlechaBase3POD43: '0',

			estacaCadaMetro44: '-26',
			bitolaPasseioPOD44: '0',
			variacaoBitolaBase5POD44: '0',
			superelevacaoRecalquePOD44: '0',
			empenoBase2POD44: '0',
			empenoBase10POD44: '',
			flechaMedidaPOD44: '0',
			variacaoFlechaBase3POD44: '0',

			estacaCadaMetro45: '-25',
			bitolaPasseioPOD45: '0',
			variacaoBitolaBase5POD45: '0',
			superelevacaoRecalquePOD45: '0',
			empenoBase2POD45: '0',
			empenoBase10POD45: '',
			flechaMedidaPOD45: '0',
			variacaoFlechaBase3POD45: '0',

			estacaCadaMetro46: '-24',
			bitolaPasseioPOD46: '0',
			variacaoBitolaBase5POD46: '0',
			superelevacaoRecalquePOD46: '0',
			empenoBase2POD46: '0',
			empenoBase10POD46: '',
			flechaMedidaPOD46: '0',
			variacaoFlechaBase3POD46: '0',

			estacaCadaMetro47: '-23',
			bitolaPasseioPOD47: '0',
			variacaoBitolaBase5POD47: '0',
			superelevacaoRecalquePOD47: '0',
			empenoBase2POD47: '0',
			empenoBase10POD47: '',
			flechaMedidaPOD47: '0',
			variacaoFlechaBase3POD47: '0',

			estacaCadaMetro48: '-22',
			bitolaPasseioPOD48: '0',
			variacaoBitolaBase5POD48: '0',
			superelevacaoRecalquePOD48: '0',
			empenoBase2POD48: '0',
			empenoBase10POD48: '',
			flechaMedidaPOD48: '0',
			variacaoFlechaBase3POD48: '0',

			estacaCadaMetro49: '-21',
			bitolaPasseioPOD49: '0',
			variacaoBitolaBase5POD49: '0',
			superelevacaoRecalquePOD49: '0',
			empenoBase2POD49: '0',
			empenoBase10POD49: '',
			flechaMedidaPOD49: '0',
			variacaoFlechaBase3POD49: '0',

			estacaCadaMetro50: '-20',
			bitolaPasseioPOD50: '0',
			variacaoBitolaBase5POD50: '0',
			superelevacaoRecalquePOD50: '0',
			empenoBase2POD50: '0',
			empenoBase10POD50: '',
			flechaMedidaPOD50: '0',
			variacaoFlechaBase3POD50: '0',

			estacaCadaMetro51: '-19',
			bitolaPasseioPOD51: '0',
			variacaoBitolaBase5POD51: '0',
			superelevacaoRecalquePOD51: '0',
			empenoBase2POD51: '0',
			empenoBase10POD51: '',
			flechaMedidaPOD51: '0',
			variacaoFlechaBase3POD51: '0',

			estacaCadaMetro52: '-18',
			bitolaPasseioPOD52: '0',
			variacaoBitolaBase5POD52: '0',
			superelevacaoRecalquePOD52: '0',
			empenoBase2POD52: '0',
			empenoBase10POD52: '',
			flechaMedidaPOD52: '0',
			variacaoFlechaBase3POD52: '0',

			estacaCadaMetro53: '-17',
			bitolaPasseioPOD53: '0',
			variacaoBitolaBase5POD53: '0',
			superelevacaoRecalquePOD53: '0',
			empenoBase2POD53: '0',
			empenoBase10POD53: '',
			flechaMedidaPOD53: '0',
			variacaoFlechaBase3POD53: '0',

			estacaCadaMetro54: '-16',
			bitolaPasseioPOD54: '0',
			variacaoBitolaBase5POD54: '0',
			superelevacaoRecalquePOD54: '0',
			empenoBase2POD54: '0',
			empenoBase10POD54: '',
			flechaMedidaPOD54: '0',
			variacaoFlechaBase3POD54: '0',

			estacaCadaMetro55: '-15',
			bitolaPasseioPOD55: '0',
			variacaoBitolaBase5POD55: '0',
			superelevacaoRecalquePOD55: '0',
			empenoBase2POD55: '0',
			empenoBase10POD55: '',
			flechaMedidaPOD55: '0',
			variacaoFlechaBase3POD55: '0',

			estacaCadaMetro56: '-14',
			bitolaPasseioPOD56: '0',
			variacaoBitolaBase5POD56: '0',
			superelevacaoRecalquePOD56: '0',
			empenoBase2POD56: '0',
			empenoBase10POD56: '',
			flechaMedidaPOD56: '0',
			variacaoFlechaBase3POD56: '0',

			estacaCadaMetro57: '-13',
			bitolaPasseioPOD57: '0',
			variacaoBitolaBase5POD57: '0',
			superelevacaoRecalquePOD57: '0',
			empenoBase2POD57: '0',
			empenoBase10POD57: '',
			flechaMedidaPOD57: '0',
			variacaoFlechaBase3POD57: '0',

			estacaCadaMetro58: '-12',
			bitolaPasseioPOD58: '0',
			variacaoBitolaBase5POD58: '0',
			superelevacaoRecalquePOD58: '0',
			empenoBase2POD58: '0',
			empenoBase10POD58: '',
			flechaMedidaPOD58: '0',
			variacaoFlechaBase3POD58: '0',

			estacaCadaMetro59: '-11',
			bitolaPasseioPOD59: '0',
			variacaoBitolaBase5POD59: '0',
			superelevacaoRecalquePOD59: '0',
			empenoBase2POD59: '0',
			empenoBase10POD59: '',
			flechaMedidaPOD59: '0',
			variacaoFlechaBase3POD59: '0',

			estacaCadaMetro60: '-10',
			bitolaPasseioPOD60: '0',
			variacaoBitolaBase5POD60: '0',
			superelevacaoRecalquePOD60: '0',
			empenoBase2POD60: '0',
			empenoBase10POD60: '',
			flechaMedidaPOD60: '0',
			variacaoFlechaBase3POD60: '0',

			estacaCadaMetro61: '-9',
			bitolaPasseioPOD61: '0',
			variacaoBitolaBase5POD61: '0',
			superelevacaoRecalquePOD61: '0',
			empenoBase2POD61: '0',
			empenoBase10POD61: '',
			flechaMedidaPOD61: '0',
			variacaoFlechaBase3POD61: '0',

			estacaCadaMetro62: '-8',
			bitolaPasseioPOD62: '0',
			variacaoBitolaBase5POD62: '0',
			superelevacaoRecalquePOD62: '0',
			empenoBase2POD62: '0',
			empenoBase10POD62: '',
			flechaMedidaPOD62: '0',
			variacaoFlechaBase3POD62: '0',

			estacaCadaMetro63: '-7',
			bitolaPasseioPOD63: '0',
			variacaoBitolaBase5POD63: '0',
			superelevacaoRecalquePOD63: '0',
			empenoBase2POD63: '0',
			empenoBase10POD63: '',
			flechaMedidaPOD63: '0',
			variacaoFlechaBase3POD63: '0',

			estacaCadaMetro64: '-6',
			bitolaPasseioPOD64: '0',
			variacaoBitolaBase5POD64: '0',
			superelevacaoRecalquePOD64: '0',
			empenoBase2POD64: '0',
			empenoBase10POD64: '',
			flechaMedidaPOD64: '0',
			variacaoFlechaBase3POD64: '0',

			estacaCadaMetro65: '-5',
			bitolaPasseioPOD65: '0',
			variacaoBitolaBase5POD65: '0',
			superelevacaoRecalquePOD65: '0',
			empenoBase2POD65: '0',
			empenoBase10POD65: '',
			flechaMedidaPOD65: '0',
			variacaoFlechaBase3POD65: '0',

			estacaCadaMetro66: '-4',
			bitolaPasseioPOD66: '0',
			variacaoBitolaBase5POD66: '0',
			superelevacaoRecalquePOD66: '0',
			empenoBase2POD66: '0',
			empenoBase10POD66: '',
			flechaMedidaPOD66: '0',
			variacaoFlechaBase3POD66: '0',

			estacaCadaMetro67: '-3',
			bitolaPasseioPOD67: '0',
			variacaoBitolaBase5POD67: '0',
			superelevacaoRecalquePOD67: '0',
			empenoBase2POD67: '0',
			empenoBase10POD67: '',
			flechaMedidaPOD67: '0',
			variacaoFlechaBase3POD67: '0',

			estacaCadaMetro68: '-2',
			bitolaPasseioPOD68: '0',
			variacaoBitolaBase5POD68: '0',
			superelevacaoRecalquePOD68: '0',
			empenoBase2POD68: '0',
			empenoBase10POD68: '',
			flechaMedidaPOD68: '0',
			variacaoFlechaBase3POD68: '0',

			estacaCadaMetro69: '-1',
			bitolaPasseioPOD69: '0',
			variacaoBitolaBase5POD69: '0',
			superelevacaoRecalquePOD69: '0',
			empenoBase2POD69: '0',
			empenoBase10POD69: '',
			flechaMedidaPOD69: '0',
			variacaoFlechaBase3POD69: '0',

			estacaCadaMetro70: '0',
			bitolaPasseioPOD70: '0',
			variacaoBitolaBase5POD70: '0',
			superelevacaoRecalquePOD70: '0',
			empenoBase2POD70: '0',
			empenoBase10POD70: '',
			flechaMedidaPOD70: '0',
			variacaoFlechaBase3POD70: '0',

			estacaCadaMetro71: '1',
			bitolaPasseioPOD71: '0',
			variacaoBitolaBase5POD71: '0',
			superelevacaoRecalquePOD71: '0',
			empenoBase2POD71: '0',
			empenoBase10POD71: '0',
			flechaMedidaPOD71: '0',
			variacaoFlechaBase3POD71: '0',

			estacaCadaMetro72: '2',
			bitolaPasseioPOD72: '0',
			variacaoBitolaBase5POD72: '0',
			superelevacaoRecalquePOD72: '0',
			empenoBase2POD72: '0',
			empenoBase10POD72: '',
			flechaMedidaPOD72: '0',
			variacaoFlechaBase3POD72: '0',

			estacaCadaMetro73: '3',
			bitolaPasseioPOD73: '0',
			variacaoBitolaBase5POD73: '0',
			superelevacaoRecalquePOD73: '0',
			empenoBase2POD73: '0',
			empenoBase10POD73: '',
			flechaMedidaPOD73: '0',
			variacaoFlechaBase3POD73: '0',

			estacaCadaMetro74: '4',
			bitolaPasseioPOD74: '0',
			variacaoBitolaBase5POD74: '0',
			superelevacaoRecalquePOD74: '0',
			empenoBase2POD74: '0',
			empenoBase10POD74: '',
			flechaMedidaPOD74: '0',
			variacaoFlechaBase3POD74: '0',

			estacaCadaMetro75: '5',
			bitolaPasseioPOD75: '0',
			variacaoBitolaBase5POD75: '0',
			superelevacaoRecalquePOD75: '0',
			empenoBase2POD75: '0',
			empenoBase10POD75: '',
			flechaMedidaPOD75: '0',
			variacaoFlechaBase3POD75: '0',

			estacaCadaMetro76: '6',
			bitolaPasseioPOD76: '0',
			variacaoBitolaBase5POD76: '0',
			superelevacaoRecalquePOD76: '0',
			empenoBase2POD76: '0',
			empenoBase10POD76: '',
			flechaMedidaPOD76: '0',
			variacaoFlechaBase3POD76: '0',

			estacaCadaMetro77: '7',
			bitolaPasseioPOD77: '0',
			variacaoBitolaBase5POD77: '0',
			superelevacaoRecalquePOD77: '0',
			empenoBase2POD77: '0',
			empenoBase10POD77: '',
			flechaMedidaPOD77: '0',
			variacaoFlechaBase3POD77: '0',

			estacaCadaMetro78: '8',
			bitolaPasseioPOD78: '0',
			variacaoBitolaBase5POD78: '0',
			superelevacaoRecalquePOD78: '0',
			empenoBase2POD78: '0',
			empenoBase10POD78: '',
			flechaMedidaPOD78: '0',
			variacaoFlechaBase3POD78: '0',

			estacaCadaMetro79: '9',
			bitolaPasseioPOD79: '0',
			variacaoBitolaBase5POD79: '0',
			superelevacaoRecalquePOD79: '0',
			empenoBase2POD79: '0',
			empenoBase10POD79: '',
			flechaMedidaPOD79: '0',
			variacaoFlechaBase3POD79: '0',

			estacaCadaMetro80: '10',
			bitolaPasseioPOD80: '0',
			variacaoBitolaBase5POD80: '0',
			superelevacaoRecalquePOD80: '0',
			empenoBase2POD80: '0',
			empenoBase10POD80: '',
			flechaMedidaPOD80: '0',
			variacaoFlechaBase3POD80: '0',

			estacaCadaMetro81: '11',
			bitolaPasseioPOD81: '0',
			variacaoBitolaBase5POD81: '0',
			superelevacaoRecalquePOD81: '0',
			empenoBase2POD81: '0',
			empenoBase10POD81: '',
			flechaMedidaPOD81: '0',
			variacaoFlechaBase3POD81: '0',

			estacaCadaMetro82: '12',
			bitolaPasseioPOD82: '0',
			variacaoBitolaBase5POD82: '0',
			superelevacaoRecalquePOD82: '0',
			empenoBase2POD82: '0',
			empenoBase10POD82: '',
			flechaMedidaPOD82: '0',
			variacaoFlechaBase3POD82: '0',

			estacaCadaMetro83: '13',
			bitolaPasseioPOD83: '0',
			variacaoBitolaBase5POD83: '0',
			superelevacaoRecalquePOD83: '0',
			empenoBase2POD83: '0',
			empenoBase10POD83: '',
			flechaMedidaPOD83: '0',
			variacaoFlechaBase3POD83: '0',

			estacaCadaMetro84: '14',
			bitolaPasseioPOD84: '0',
			variacaoBitolaBase5POD84: '0',
			superelevacaoRecalquePOD84: '0',
			empenoBase2POD84: '0',
			empenoBase10POD84: '',
			flechaMedidaPOD84: '0',
			variacaoFlechaBase3POD84: '0',

			estacaCadaMetro85: '15',
			bitolaPasseioPOD85: '0',
			variacaoBitolaBase5POD85: '0',
			superelevacaoRecalquePOD85: '0',
			empenoBase2POD85: '0',
			empenoBase10POD85: '',
			flechaMedidaPOD85: '0',
			variacaoFlechaBase3POD85: '0',

			estacaCadaMetro86: '16',
			bitolaPasseioPOD86: '0',
			variacaoBitolaBase5POD86: '0',
			superelevacaoRecalquePOD86: '0',
			empenoBase2POD86: '0',
			empenoBase10POD86: '',
			flechaMedidaPOD86: '0',
			variacaoFlechaBase3POD86: '0',

			estacaCadaMetro87: '17',
			bitolaPasseioPOD87: '0',
			variacaoBitolaBase5POD87: '0',
			superelevacaoRecalquePOD87: '0',
			empenoBase2POD87: '0',
			empenoBase10POD87: '',
			flechaMedidaPOD87: '0',
			variacaoFlechaBase3POD87: '0',

			estacaCadaMetro88: '18',
			bitolaPasseioPOD88: '0',
			variacaoBitolaBase5POD88: '0',
			superelevacaoRecalquePOD88: '0',
			empenoBase2POD88: '0',
			empenoBase10POD88: '',
			flechaMedidaPOD88: '0',
			variacaoFlechaBase3POD88: '0',

			estacaCadaMetro89: '19',
			bitolaPasseioPOD89: '0',
			variacaoBitolaBase5POD89: '0',
			superelevacaoRecalquePOD89: '0',
			empenoBase2POD89: '0',
			empenoBase10POD89: '',
			flechaMedidaPOD89: '0',
			variacaoFlechaBase3POD89: '0',

			estacaCadaMetro90: '20',
			bitolaPasseioPOD90: '0',
			variacaoBitolaBase5POD90: '0',
			superelevacaoRecalquePOD90: '0',
			empenoBase2POD90: '0',
			empenoBase10POD90: '',
			flechaMedidaPOD90: '0',
			variacaoFlechaBase3POD90: '0',

			estacaCadaMetro91: '21',
			bitolaPasseioPOD91: '0',
			variacaoBitolaBase5POD91: '0',
			superelevacaoRecalquePOD91: '0',
			empenoBase2POD91: '0',
			empenoBase10POD91: '',
			flechaMedidaPOD91: '0',
			variacaoFlechaBase3POD91: '0',

			estacaCadaMetro92: '22',
			bitolaPasseioPOD92: '0',
			variacaoBitolaBase5POD92: '0',
			superelevacaoRecalquePOD92: '0',
			empenoBase2POD92: '0',
			empenoBase10POD92: '',
			flechaMedidaPOD92: '0',
			variacaoFlechaBase3POD92: '0',

			estacaCadaMetro93: '23',
			bitolaPasseioPOD93: '0',
			variacaoBitolaBase5POD93: '0',
			superelevacaoRecalquePOD93: '0',
			empenoBase2POD93: '0',
			empenoBase10POD93: '',
			flechaMedidaPOD93: '0',
			variacaoFlechaBase3POD93: '0',

			estacaCadaMetro94: '24',
			bitolaPasseioPOD94: '0',
			variacaoBitolaBase5POD94: '0',
			superelevacaoRecalquePOD94: '0',
			empenoBase2POD94: '0',
			empenoBase10POD94: '',
			flechaMedidaPOD94: '0',
			variacaoFlechaBase3POD94: '0',

			estacaCadaMetro95: '25',
			bitolaPasseioPOD95: '0',
			variacaoBitolaBase5POD95: '0',
			superelevacaoRecalquePOD95: '0',
			empenoBase2POD95: '0',
			empenoBase10POD95: '',
			flechaMedidaPOD95: '0',
			variacaoFlechaBase3POD95: '0',

			estacaCadaMetro96: '26',
			bitolaPasseioPOD96: '0',
			variacaoBitolaBase5POD96: '0',
			superelevacaoRecalquePOD96: '0',
			empenoBase2POD96: '0',
			empenoBase10POD96: '',
			flechaMedidaPOD96: '0',
			variacaoFlechaBase3POD96: '0',

			estacaCadaMetro97: '27',
			bitolaPasseioPOD97: '0',
			variacaoBitolaBase5POD97: '0',
			superelevacaoRecalquePOD97: '0',
			empenoBase2POD97: '0',
			empenoBase10POD97: '',
			flechaMedidaPOD97: '0',
			variacaoFlechaBase3POD97: '0',

			estacaCadaMetro98: '28',
			bitolaPasseioPOD98: '0',
			variacaoBitolaBase5POD98: '0',
			superelevacaoRecalquePOD98: '0',
			empenoBase2POD98: '0',
			empenoBase10POD98: '',
			flechaMedidaPOD98: '0',
			variacaoFlechaBase3POD98: '0',

			estacaCadaMetro99: '29',
			bitolaPasseioPOD99: '0',
			variacaoBitolaBase5POD99: '0',
			superelevacaoRecalquePOD99: '0',
			empenoBase2POD99: '0',
			empenoBase10POD99: '',
			flechaMedidaPOD99: '0',
			variacaoFlechaBase3POD99: '0',

			estacaCadaMetro100: '30',
			bitolaPasseioPOD100: '0',
			variacaoBitolaBase5POD100: '0',
			superelevacaoRecalquePOD100: '0',
			empenoBase2POD100: '0',
			empenoBase10POD100: '',
			flechaMedidaPOD100: '0',
			variacaoFlechaBase3POD100: '0'

		});	
		
	}

	const onStart = async () => {
		const previousForm = await updateForms(routes.dadosVia);
		if(previousForm) {
			setDadosForm(previousForm);
			setQueryDados1(previousForm.investigador1);
			setQueryDados2(previousForm.investigador2);
			restricaoVelocidade.current.setState({is_active_index: previousForm.restricaoVelocidade ? 1 : 0});
			classeVia.current.setState({is_active_index: radio_props2.findIndex((e) => e.value == previousForm.classeVia)});
			curvaOuTangente.current.setState({is_active_index: radio_props3.findIndex((e) => e.value == previousForm.curvaOuTangente)});
			tipoRampa.current.setState({is_active_index: radio_props4.findIndex((e) => e.value == previousForm.tipoRampa)});
			tipoFixacao.current.setState({is_active_index: radio_props5.findIndex((e) => e.value == previousForm.tipoFixacao)});
			estadoFixacao.current.setState({is_active_index: radio_props6.findIndex((e) => e.value == previousForm.estadoFixacao)});
			sinaisInclinacao.current.setState({is_active_index: previousForm.sinaisInclinacao ? 1 : 0});
			existePlacaApoio.current.setState({is_active_index: previousForm.existePlacaApoio ? 1 : 0});
			trilhosTipo.current.setState({is_active_index: radio_props7.findIndex((e) => e.value == previousForm.trilhosTipo)});
			trilhosPerfil.current.setState({is_active_index: radio_props8.findIndex((e) => e.value == previousForm.trilhosPerfil)});
			trilhosLubrificacao.current.setState({is_active_index: radio_props9.findIndex((e) => e.value == previousForm.trilhosLubrificacao)});
			trilhoFraturado.current.setState({is_active_index: previousForm.trilhoFraturado ? 1 : 0});
			trilhosOxidacao.current.setState({is_active_index: previousForm.trilhosOxidacao ? 1 : 0});
			estadoPod.current.setState({is_active_index: radio_props10.findIndex((e) => e.value == previousForm.estadoPod)});
			const dateHour = previousForm.dataInspecao.split(' ');
			const hourMinute = dateHour[1].split(':');
			timeSelect1.current.setState({selectedHours: parseInt(hourMinute[0]), selectedMinutes: parseInt(hourMinute[1])});
			setDateSelect({
				selectedHours1: parseInt(hourMinute[0]),
				selectedMinutes1: parseInt(hourMinute[1]),
				date1: dateHour[0],
				date2: previousForm.inspecaoLinha,
				date3: previousForm.inspecaoCarro,
				date4: previousForm.inspecaoCruzadaTrens
			});
		} else {
			setCreatedForm(true);
		}
	}

	useEffect(() => {
		onStart();
	}, []);

	const km_mts = (val) => {
		const er = /[^+0-9]/g;
		er.lastIndex = 0;
		return val.replace(er,"");
	}

	const regex = /\+/gi;

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.backgroundDadosMecanica}>
			<ScrollView>				
				<View style={styles.container2}>
					
					<Text style={styles.titulo2}>Número do Boletim</Text>
					<TextInput keyboardType={'decimal-pad'} onChangeText={(e) => setDadosForm({...dadosForm, idBoletim:e})} value={dadosForm.idBoletim} style={styles.shortInput} />
					
					<Text style={styles.titulo1}>Investigação</Text>
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
											setDadosForm({ ...dadosForm, investigador1: item.name, idInvestigador1: item.id});
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
										setDadosForm({ ...dadosForm, investigador2: item.name, idInvestigador2: item.id});
									}}>
										<Text>{item.name}</Text>
									</TouchableOpacity>
								)
							} else {
								return (<View />)
							}
						}} />
					<Text style={styles.titulo2}>Data</Text>
					<DatePicker
						style={{ width: 200, borderRadius: 5 }}
						date={dateSelect.date1}
						mode="date"
						placeholder="select date"
						format= "DD/MM/YYYY"
						confirmBtnText="Confirm"
						cancelBtnText="Cancel"
						customStyles={styles.datePicker}
						onDateChange={(e) => {
							setDateSelect({...dateSelect, date1:e });
						  	setDadosForm({ ...dadosForm, dataInspecao: e + ' ' + dateSelect.selectedHours1 + ':' + dateSelect.selectedMinutes1});
						}}/>
					<Text style={styles.titulo2}>Hora</Text>
					<View style={styles.ViewTime}>
						<TimePicker
							ref={timeSelect1}
							onChange={(h, m) => {
								setDateSelect({ ...dateSelect, selectedHours1: h, selectedMinutes1: m });
								setDadosForm({ ...dadosForm, dataInspecao: dateSelect.date1 + ' ' + h + ':' + m});
						}} />
					</View>
					<Text style={styles.titulo2}>Descrição *</Text>
					<TextInput
						multiline={true}
						onChangeText={(e) => setDadosForm({ ...dadosForm, descricao: e })}
						value={dadosForm.descricao}
						style={styles.LongInput}
					/>         

					<Text style={styles.titulo1}>1.Identificação do Acidente</Text>					
					<Text style={styles.titulo2}>VMA do local (KM/h)</Text>
					<TextInput maxLength={3} keyboardType='decimal-pad' onChangeText={(e) => setDadosForm({ ...dadosForm, kmH: e })} value={dadosForm.kmH} multiline={false} style={styles.shortInput} />
					<Text style={styles.titulo2}>Restrição de Velocidade</Text>
					<View style={{ flexDirection: 'row' }}>
						<RadioForm
							ref={restricaoVelocidade}
							radio_props={radio_props}
							initial={0}
							onPress={(e) => setDadosForm({ ...dadosForm, restricaoVelocidade: e })}
							buttonSize={10}
							buttonOuterSize={20}
							formHorizontal={true}
							labelHorizontal={true}
							animation={false} />
					</View>					
					<Text style={styles.titulo2}>Motivo de Restrição (KM/h)</Text>
					<TextInput 
						onChangeText={(e) => setDadosForm({ ...dadosForm, motivoRestricao: e })} 
						value={dadosForm.motivoRestricao} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Classe da Via</Text>
					<View style={{ flexDirection: 'row' }}>
						<RadioForm
							ref={classeVia}
							radio_props={radio_props2}
							initial={-1}
							onPress={(e) => setDadosForm({ ...dadosForm, classeVia: e })}
							buttonSize={10}
							buttonOuterSize={20}
							formHorizontal={true}
							labelHorizontal={true}
							animation={false} />
					</View>
					
					<Text style={styles.titulo1}>Identificação exata do acidente (Km+Mts)</Text>
					<Text style={styles.titulo2}>Km+Mts da loco comandante</Text>
					<TextInput maxLength={7} onChangeText={(e) => setDadosForm({ ...dadosForm, locoComandante: km_mts(e) })} value={dadosForm.locoComandante} multiline={false} style={styles.shortInput} />
					<Text style={styles.titulo2}>Km+Mts do 1o. veículo acidentado</Text>
					<TextInput maxLength={7}  onChangeText={(e) => setDadosForm({ ...dadosForm, primeiroVeiculo: km_mts(e) })} value={dadosForm.primeiroVeiculo} multiline={false} style={styles.shortInput} />
					<Text style={styles.titulo2}>Km+Mts do último veículo acidentado</Text>
					<TextInput maxLength={7} onChangeText={(e) => setDadosForm({ ...dadosForm, ultimoVeiculo: km_mts(e) })} value={dadosForm.ultimoVeiculo} multiline={false} style={styles.shortInput} />
					<Text style={styles.titulo2}>Km+Mts do POD:</Text>
					<TextInput maxLength={7} onChangeText={(e) => setDadosForm({ ...dadosForm, kmPOD: km_mts(e) })} value={dadosForm.kmPOD} multiline={false} style={styles.shortInput} />
					<Text style={styles.titulo2}>Extensão Percorrida(m)</Text>
					<TextInput maxLength={15} onChangeText={(e) => setDadosForm({ ...dadosForm, percursoDescarrilado: e })} value={dadosForm.percursoDescarrilado} multiline={false} style={styles.shortInput} />
					
					<Text style={styles.titulo1}>2.Visão Geral do Acidente e Via Permanente</Text>
					<Text style={styles.titulo2}>1 - Mecanismo do descarrilamento</Text>
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, subidaFriso: !dadosForm.subidaFriso })}
							isChecked={dadosForm.subidaFriso}
							leftText={"Subida do friso no trilho"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, elevacaoRoda: !dadosForm.elevacaoRoda })}
							isChecked={dadosForm.elevacaoRoda}
							leftText={"Elevação da roda (sem marca no boleto)"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, objetosEstranhos: !dadosForm.objetosEstranhos })}
							isChecked={dadosForm.objetosEstranhos}
							leftText={"Objetos estranhos colocados sobre os trilhos"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, aberturaBitola: !dadosForm.aberturaBitola })}
							isChecked={dadosForm.aberturaBitola}
							leftText={"Abertura de bitola ou deseixamento"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, fraturaTrilhos: !dadosForm.fraturaTrilhos })}
							isChecked={dadosForm.fraturaTrilhos}
							leftText={"Fratura de trilhos/rodas"} />
					</View>
					<Text style={styles.titulo2}>Observação</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, observacao: e })} value={dadosForm.observacao} multiline={true} style={styles.LongInput} />
					
					<Text style={styles.titulo2}>2 - POD</Text>					
					<Text style={styles.titulo2}>Marcas Curtas (mts)</Text>
					<NumericInput 
						type='decimal' 
						maxLength={20}
						style={styles.shortInput}
						value={dadosForm.marcasCurtas} 											
						onUpdate={(e) => {
							setDadosForm({...dadosForm, marcasCurtas: e });
						}} />
					<Text style={styles.titulo2}>Marcas Longas (mts)</Text>
					<NumericInput 
						type='decimal' 
						maxLength={20}
						style={styles.shortInput}
						value={dadosForm.marcasLongas} 
						onUpdate={(e) => {
							setDadosForm({...dadosForm, marcasLongas: e });
						}} />
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, marcasAbrasao: !dadosForm.marcasAbrasao })}
							isChecked={dadosForm.marcasAbrasao}
							leftText={"Marcas de abrasão no trilho"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, marcasQueda: !dadosForm.marcasQueda })}
							isChecked={dadosForm.marcasQueda}
							leftText={"Marcas de queda de roda"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, semMarcas: !dadosForm.semMarcas })}
							isChecked={dadosForm.semMarcas}
							leftText={"Sem marcas no POD (boleto trilho)"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, marcasRegulares: !dadosForm.marcasRegulares })}
							isChecked={dadosForm.marcasRegulares}
							leftText={"Marcas e Intervalos Regulares"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, marcasAlma: !dadosForm.marcasAlma })}
							isChecked={dadosForm.marcasAlma}
							leftText={"Marcar na alma de trilho / dormentes"} />
					</View>

					<Text style={styles.titulo1}>3 - Geometria no POD</Text>
					<Text style={styles.titulo2}>Selecione *</Text>
					<View style={{ flexDirection: 'row' }}>
						<RadioForm
							ref={curvaOuTangente}
							radio_props={radio_props3}
							initial={0}
							onPress={(e) => setDadosForm({ ...dadosForm, curvaOuTangente: e })}
							buttonSize={10}
							buttonOuterSize={20}
							formHorizontal={true}
							labelHorizontal={true}
							animation={false} />
					</View>
					<Text style={styles.titulo2}>Curva Nº</Text>
					<TextInput keyboardType='numeric' maxLength={22} onChangeText={(e) => setDadosForm({ ...dadosForm, curva: e })} value={dadosForm.curva} multiline={false} style={styles.shortInput} />
					<Text style={styles.titulo2}>Raio</Text>
					<TextInput keyboardType='numeric' maxLength={22} onChangeText={(e) => setDadosForm({ ...dadosForm, raio: e })} value={dadosForm.raio} multiline={false} style={styles.shortInput} />
					<Text style={styles.titulo2}>Tangente</Text>
					<TextInput keyboardType='numeric' maxLength={22} onChangeText={(e) => setDadosForm({ ...dadosForm, tangente: e })} value={dadosForm.tangente} multiline={false} style={styles.shortInput} />
					<Text style={styles.titulo2}>Rampa(%)</Text>
					<TextInput maxLength={20} onChangeText={(e) => setDadosForm({ ...dadosForm, rampa: e })} value={dadosForm.rampa} multiline={false} style={styles.shortInput} />
					<Text style={styles.titulo2}>Tipo</Text>
					<View style={{ flexDirection: 'row' }}>
						<RadioForm
							ref={tipoRampa}
							radio_props={radio_props4}
							initial={-1}
							onPress={(e) => setDadosForm({ ...dadosForm, tipoRampa: e })}
							buttonSize={10}
							buttonOuterSize={20}
							formHorizontal={true}
							labelHorizontal={true}
							animation={false} />
					</View>
					<Text style={styles.titulo2}> Última Inspeção Carro de Bitola </Text>
					<DatePicker
						style={{ width: 200, borderRadius: 5 }}
						date={dateSelect.date3}
						mode="date"
						placeholder="select date"
						format= "DD/MM/YYYY"
						confirmBtnText="Confirm"
						cancelBtnText="Cancel"
						customStyles={styles.datePicker}
						onDateChange={(e) => {
							setDateSelect({ ...dateSelect, date3: e });
							setDadosForm({...dadosForm, inspecaoCarro: e});
						}} />
					<Text style={styles.titulo2}>Observação</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, obsCarro: e })} value={dadosForm.obsCarro} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Inspeção Ronda de Linha</Text>
					<DatePicker
						style={{ width: 200, borderRadius: 5 }}
						date={dateSelect.date2}
						mode="date"
						placeholder="select date"
						format= "DD/MM/YYYY"
						confirmBtnText="Confirm"
						cancelBtnText="Cancel"
						customStyles={styles.datePicker}
						onDateChange={(e) => {
							setDateSelect({ ...dateSelect, date2: e });
							setDadosForm({...dadosForm, inspecaoLinha: e});
						}} />
					<Text style={styles.titulo2}>Observação</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, obsLinha: e })} value={dadosForm.obsLinha} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Inspeção cruzada em Trens</Text>
					<DatePicker
						style={{ width: 200, borderRadius: 5 }}
						date={dateSelect.date4}
						mode="date"
						placeholder="select date"
						format= "DD/MM/YYYY"
						confirmBtnText="Confirm"
						cancelBtnText="Cancel"
						customStyles={styles.datePicker}
						onDateChange={(e) => {
							setDateSelect({ ...dateSelect, date4: e });
							setDadosForm({...dadosForm, inspecaoCruzadaTrens: e});
						}} />
				
					<Text style={styles.titulo1}>4 - Junta mais próxima (antes ou após) o POD</Text>
					<Text style={styles.titulo2}>Estado da Junta</Text>
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<View style={{ flex: 1, flexDirection: 'row' }}></View>
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, juntaSolta: !dadosForm.juntaSolta })}
							isChecked={dadosForm.juntaSolta}
							leftText={"Tala de junção solta/fraturada"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, desnivelada: !dadosForm.desnivelada })}
							isChecked={dadosForm.desnivelada}
							leftText={"Desnivelada ou Laqueada"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, desencontrada: !dadosForm.desencontrada })}
							isChecked={dadosForm.desencontrada}
							leftText={"Desencontrada"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, faltandoParafuso: !dadosForm.faltandoParafuso })}
							isChecked={dadosForm.faltandoParafuso}
							leftText={"Faltando parafuso"} />
					</View>

					<Text style={styles.titulo1}>5 - Dormentes (Região do POD)</Text>
					<Text style={styles.titulo2}>Tipo</Text>
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, madeira: !dadosForm.madeira })}
							isChecked={dadosForm.madeira}
							leftText={"Madeira"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, concreto: !dadosForm.concreto })}
							isChecked={dadosForm.concreto}
							leftText={"Concreto"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, plastico: !dadosForm.plastico })}
							isChecked={dadosForm.plastico}
							leftText={"Plástico"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, aco: !dadosForm.aco })}
							isChecked={dadosForm.aco}
							leftText={"Aço"} />
					</View>
					<Text style={styles.titulo2}>Sequências de dormentes inservíveis na região do POD</Text>
					<TextInput maxLength={50} onChangeText={(e) => setDadosForm({ ...dadosForm, sequenciasDormentes: e })} value={dadosForm.sequenciasDormentes} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Estado dos Dormentes</Text>
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, bom: !dadosForm.bom })}
							isChecked={dadosForm.bom}
							leftText={"Bom"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, ruim: !dadosForm.ruim })}
							isChecked={dadosForm.ruim}
							leftText={"Ruim"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, laqueado: !dadosForm.laqueado })}
							isChecked={dadosForm.laqueado}
							leftText={"Laqueado"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, foraEixo: !dadosForm.foraEixo })}
							isChecked={dadosForm.foraEixo}
							leftText={"Fora do Eixo"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, inexistente: !dadosForm.inexistente })}
							isChecked={dadosForm.inexistente}
							leftText={"Inexistente"} />
					</View>
					<Text style={styles.titulo2}>Observação</Text>
					<TextInput
						multiline={true}
						onChangeText={(e) => setDadosForm({ ...dadosForm, domentesObs: e })}
						value={dadosForm.domentesObs}
						style={styles.LongInput}
					/>         

					<Text style={styles.titulo1}>6 - Fixação</Text>
					<Text style={styles.titulo2}>Tipo</Text>
					<RadioForm
						ref={tipoFixacao}
						radio_props={radio_props5}
						initial={-1}
						onPress={(e) => setDadosForm({ ...dadosForm, tipoFixacao: e })}
						buttonSize={10}
						buttonOuterSize={20}
						formHorizontal={false}
						labelHorizontal={true}
						animation={false} />
					<Text style={styles.titulo2}>Outros</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, outrosFixacao: e })} value={dadosForm.outrosFixacao} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Estado da Fixação</Text>
					<RadioForm
						ref={estadoFixacao}
						radio_props={radio_props6}
						initial={-1}
						onPress={(e) => setDadosForm({ ...dadosForm, estadoFixacao: e })}
						buttonSize={10}
						buttonOuterSize={20}
						formHorizontal={false}
						labelHorizontal={true}
						animation={false} />	
					<Text style={styles.titulo2}>Observação</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, observacaoFixacao: e })} value={dadosForm.observacaoFixacao} multiline={true} style={styles.LongInput} />

					<Text style={styles.titulo1}>7 - Placa de apoio (Região do POD)</Text>
					<Text style={styles.titulo2}>Sinais de Inclinação Invertida do Trilho</Text>
					<View style={{ flexDirection: 'row' }}>
						<RadioForm
							ref={sinaisInclinacao}
							radio_props={radio_props}
							initial={0}
							onPress={(e) => setDadosForm({ ...dadosForm, sinaisInclinacao: e })}
							buttonSize={10}
							buttonOuterSize={20}
							formHorizontal={true}
							labelHorizontal={true}
							animation={false} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, ladoExterno: !dadosForm.ladoExterno })}
							isChecked={dadosForm.ladoExterno}
							leftText={"Lado Externo"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, ladoInterno: !dadosForm.ladoInterno })}
							isChecked={dadosForm.ladoInterno}
							leftText={"Lado Interno"} />
					</View>
					<Text style={styles.titulo2}>Existe Placa de Apoio?</Text>
					<View style={{ flexDirection: 'row' }}>
						<RadioForm
							ref={existePlacaApoio}
							radio_props={radio_props}
							initial={0}
							onPress={(e) => setDadosForm({ ...dadosForm, existePlacaApoio: e })}
							buttonSize={10}
							buttonOuterSize={20}
							formHorizontal={true}
							labelHorizontal={true}
							animation={false} />
					</View>
					
					<Text style={styles.titulo1}>8 - Lastro</Text>
					<Text style={styles.titulo2}>Tipo de Lastro</Text>
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, brita: !dadosForm.brita })}
							isChecked={dadosForm.brita}
							leftText={"Brita"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, terra: !dadosForm.terra })}
							isChecked={dadosForm.terra}
							leftText={"Terra"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, lastroNormal: !dadosForm.lastroNormal })}
							isChecked={dadosForm.lastroNormal}
							leftText={"Normal"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, fracoOmbro: !dadosForm.fracoOmbro })}
							isChecked={dadosForm.fracoOmbro}
							leftText={"Fraco no Ombro"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, fracoCentro: !dadosForm.fracoCentro })}
							isChecked={dadosForm.fracoCentro}
							leftText={"Fraco no centro"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, contaminado: !dadosForm.contaminado })}
							isChecked={dadosForm.contaminado}
							leftText={"Contaminado"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, lastroOutros: !dadosForm.lastroOutros })}
							isChecked={dadosForm.lastroOutros}
							leftText={"Outros"} />
					</View>
					<Text style={styles.titulo2}>Observação</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, lastroObs: e })} value={dadosForm.lastroObs} multiline={true} style={styles.LongInput} />
					
					<Text style={styles.titulo1}>9 - Sistema de Drenagem</Text>
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, drenagemBom: !dadosForm.drenagemBom })}
							isChecked={dadosForm.drenagemBom}
							leftText={"Bom"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, drenagemRuim: !dadosForm.drenagemRuim })}
							isChecked={dadosForm.drenagemRuim}
							leftText={"Ruim"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, drenagemDesnecessario: !dadosForm.drenagemDesnecessario })}
							isChecked={dadosForm.drenagemDesnecessario}
							leftText={"Desnecessário no Local"} />
						<CheckBox
							style={styles.checkBox}
							onClick={() => setDadosForm({ ...dadosForm, drenagemPresencaLaqueado: !dadosForm.drenagemPresencaLaqueado })}
							isChecked={dadosForm.drenagemPresencaLaqueado}
							leftText={"Presença de Laqueado(Bolsão)"} />
					</View>
					<Text style={styles.titulo2}>Observação</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, drenagemObs: e })} value={dadosForm.drenagemObs} multiline={true} style={styles.LongInput} />
					
					<Text style={styles.titulo1}>10 - Trilhos (Preencher em caso de fratura ou influência no descarrilamento)</Text>
					<Text style={styles.titulo2}>Tipo</Text>
					<RadioForm
						ref={trilhosTipo}
						radio_props={radio_props7}
						initial={-1}
						onPress={(e) => setDadosForm({ ...dadosForm, trilhosTipo: e })}
						buttonSize={10}
						buttonOuterSize={20}
						formHorizontal={true}
						labelHorizontal={true}
						animation={false} />
					<Text style={styles.titulo2}>Perfil</Text>
					<RadioForm
						ref={trilhosPerfil}
						radio_props={radio_props8}
						multiline={true}
						initial={-1}
						onPress={(e) => setDadosForm({ ...dadosForm, trilhosPerfil: e })}
						buttonSize={10}
						buttonOuterSize={20}
						formHorizontal={false}
						labelHorizontal={true}
						animation={true} />
					<Text style={styles.titulo2}>Outro</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, trilhosOutro: e })} value={dadosForm.trilhosOutro} multiline={true} style={styles.LongInput} />
					<Text style={styles.titulo2}>Lubrificação</Text>
					<RadioForm
						ref={trilhosLubrificacao}
						radio_props={radio_props9}
						initial={-1}
						onPress={(e) => setDadosForm({ ...dadosForm, trilhosLubrificacao: e })}
						buttonSize={10}
						buttonOuterSize={20}
						formHorizontal={false}
						labelHorizontal={true}
						animation={false} />
					<Text style={styles.titulo2}>Comprimento da Barra</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, comprimentoBarra: e })} value={dadosForm.comprimentoBarra} multiline={false} style={styles.shortInput} />
					<Text style={styles.titulo2}>Trilho Fraturado</Text>
					<RadioForm
						ref={trilhoFraturado}
						radio_props={radio_props}
						initial={0}
						onPress={(e) => setDadosForm({ ...dadosForm, trilhoFraturado: e })}
						buttonSize={10}
						buttonOuterSize={20}
						formHorizontal={true}
						labelHorizontal={true}
						animation={false} />
					<Text style={styles.titulo2}>Tipo de Fratura</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, tipoFratura: e })} value={dadosForm.tipoFratura} multiline={false} style={styles.shortInput} />
					<Text style={styles.titulo2}>Marcas de Praia/Oxidação</Text>
					<RadioForm
						ref={trilhosOxidacao}
						radio_props={radio_props}
						initial={0}
						onPress={(e) => setDadosForm({ ...dadosForm, trilhosOxidacao: e })}
						buttonSize={10}
						buttonOuterSize={20}
						formHorizontal={true}
						labelHorizontal={true}
						animation={false} />
					<Text style={styles.titulo2}>Desgaste Horizontal</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, trilhosDesgasteHorizontal: e })} value={dadosForm.trilhosDesgasteHorizontal} multiline={false} style={styles.shortInput} />
					<Text style={styles.titulo2}>Desgaste Vertical</Text>
					<TextInput onChangeText={(e) => setDadosForm({ ...dadosForm, trilhosDesgasteVertical: e })} value={dadosForm.trilhosDesgasteVertical} multiline={false} style={styles.shortInput} />
					<Text style={styles.titulo2}>Estado do Trilho no POD</Text>
					<RadioForm
						ref={estadoPod}
						radio_props={radio_props10}
						initial={-1}
						onPress={(e) => setDadosForm({ ...dadosForm, estadoPod: e })}
						buttonSize={10}
						buttonOuterSize={20}
						formHorizontal={false}
						labelHorizontal={true}
						animation={false} />

					<Text style={styles.titulo1}>11 - Custos do acidente</Text>
					<Text style={styles.titulo2}>Materiais: R$</Text>
					<NumericInput type='currency' locale='pt-BR' currency='BRL' style={styles.shortInput}
						value={dadosForm.custosMateriais}
						onUpdate={(e) => {
						setDadosForm({
							...dadosForm, custosMateriais: e, custosTotal: (
							parseFloat(e) +
							parseFloat(dadosForm.custosDeslocamento) +
							parseFloat(dadosForm.custosPessoal)).toFixed(2)
						});
						}} />
					<Text style={styles.titulo2}>Desloc/Estadia: R$</Text>
					<NumericInput type='currency' locale='pt-BR' currency='BRL' style={styles.shortInput}
						value={dadosForm.custosDeslocamento}
						onUpdate={(e) => {
						setDadosForm({
							...dadosForm, custosDeslocamento: e, custosTotal: (
							parseFloat(dadosForm.custosMateriais) +
							parseFloat(e) +
							parseFloat(dadosForm.custosPessoal)).toFixed(2)
						});
						}} />
					<Text style={styles.titulo2}>Pessoal: R$</Text>
					<NumericInput type='currency' locale='pt-BR' currency='BRL' style={styles.shortInput}
						value={dadosForm.custosPessoal}
						onUpdate={(e) => {
						setDadosForm({
							...dadosForm, custosPessoal: e, custosTotal: (
							parseFloat(dadosForm.custosMateriais) +
							parseFloat(dadosForm.custosDeslocamento) +
							parseFloat(e)).toFixed(2)
						});
						}} />
					<Text style={styles.titulo2}>Total: R$</Text>
					<Text style={styles.totalFilde}> {'R$' + dadosForm.custosTotal} </Text>

					<Text style={styles.titulo1}>12 - Ponto de Origem do Descarrilamento / POD</Text>
					<Text style={styles.titulo2}>Segmento: {dadosForm.curvaOuTangente == 'curva' ? 'Curva' : 'Tangente'}</Text>
					<Text style={styles.titulo2}>Limite de Segurança*</Text>
					<RadioForm
						ref={limiteSegClassePOD}
						radio_props={radio_props11}
						initial={0}
						onPress={(e) => setDadosForm({ ...dadosForm, limiteSegClassePOD: e })}
						buttonSize={10}
						buttonOuterSize={20}
						formHorizontal={true}
						labelHorizontal={true}
						animation={false} 
					/>
					
					<View>
						<TableGridPOD 
							tipoClasse={dadosForm.limiteSegClassePOD}tipoCurvaOuTangente={dadosForm.curvaOuTangente}
						/>
					</View>				

					<View style={{paddingTop: 20}} >				

						<View>
							<TableGrid />							
							<View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD: e })}
											value={dadosForm.bitolaPasseioPOD}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}></View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD: e })} 
											value={dadosForm.superelevacaoRecalquePOD} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}></Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD: e })}
											value={dadosForm.flechaMedidaPOD} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}></Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro1}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD1: e })}
											value={dadosForm.bitolaPasseioPOD1}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}></Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD1: e })} 
											value={dadosForm.superelevacaoRecalquePOD1} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}></Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD1: e })}
											value={dadosForm.flechaMedidaPOD1} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}></Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro2}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD2: e })}
											value={dadosForm.bitolaPasseioPOD2}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}></Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD2: e })} 
											value={dadosForm.superelevacaoRecalquePOD2} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD2) - (dadosForm.superelevacaoRecalquePOD))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}></Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD2: e })}
											value={dadosForm.flechaMedidaPOD2} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}></Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro3}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD3: e })}
											value={dadosForm.bitolaPasseioPOD3}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD3) - (dadosForm.bitolaPasseioPOD))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD3: e })}
											value={dadosForm.superelevacaoRecalquePOD3}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD3) - (dadosForm.superelevacaoRecalquePOD1))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}></Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD3: e })}
											value={dadosForm.flechaMedidaPOD3} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD3) - (dadosForm.flechaMedidaPOD))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro4}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD4: e })}
											value={dadosForm.bitolaPasseioPOD4}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD4) - (dadosForm.bitolaPasseioPOD1))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD4: e })} 
											value={dadosForm.superelevacaoRecalquePOD4} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD4) - (dadosForm.superelevacaoRecalquePOD2))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}></Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD4: e })}
											value={dadosForm.flechaMedidaPOD4} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD4) - (dadosForm.flechaMedidaPOD1))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro5}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD5: e })}
											value={dadosForm.bitolaPasseioPOD5}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD5) - (dadosForm.bitolaPasseioPOD2))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD5: e })} 
											value={dadosForm.superelevacaoRecalquePOD5} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD5) - (dadosForm.superelevacaoRecalquePOD3))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}></Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD5: e })}
											value={dadosForm.flechaMedidaPOD5} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD5) - (dadosForm.flechaMedidaPOD2))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro6}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD6: e })}
											value={dadosForm.bitolaPasseioPOD6}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD6) - (dadosForm.bitolaPasseioPOD3))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD6: e })} 
											value={dadosForm.superelevacaoRecalquePOD6} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD6) - (dadosForm.superelevacaoRecalquePOD4))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}></Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD6: e })}
											value={dadosForm.flechaMedidaPOD6} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD6) - (dadosForm.flechaMedidaPOD3))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro7}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD7: e })}
											value={dadosForm.bitolaPasseioPOD7}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD7) - (dadosForm.bitolaPasseioPOD4))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD7: e })} 
											value={dadosForm.superelevacaoRecalquePOD7} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD7) - (dadosForm.superelevacaoRecalquePOD5))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}></Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD7: e })}
											value={dadosForm.flechaMedidaPOD7} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD7) - (dadosForm.flechaMedidaPOD4))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro8}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD8: e })}
											value={dadosForm.bitolaPasseioPOD8}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD8) - (dadosForm.bitolaPasseioPOD5))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD8: e })} 
											value={dadosForm.superelevacaoRecalquePOD8} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD8) - (dadosForm.superelevacaoRecalquePOD6))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}></Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD8: e })}
											value={dadosForm.flechaMedidaPOD8} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD8) - (dadosForm.flechaMedidaPOD5))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro9}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD9: e })}
											value={dadosForm.bitolaPasseioPOD9}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD9) - (dadosForm.bitolaPasseioPOD6))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD9: e })} 
											value={dadosForm.superelevacaoRecalquePOD9} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD9) - (dadosForm.superelevacaoRecalquePOD7))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}></Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD9: e })}
											value={dadosForm.flechaMedidaPOD9} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD9) - (dadosForm.flechaMedidaPOD6))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro10}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD10: e })}
											value={dadosForm.bitolaPasseioPOD10}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD10) - (dadosForm.bitolaPasseioPOD7))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD10: e })} 
											value={dadosForm.superelevacaoRecalquePOD10} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD10) - (dadosForm.superelevacaoRecalquePOD8))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD10) - (dadosForm.superelevacaoRecalquePOD))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD10: e })}
											value={dadosForm.flechaMedidaPOD10} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD10) - (dadosForm.flechaMedidaPOD7))}</Text>
									</View>
								</View>




								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro11}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD11: e })}
											value={dadosForm.bitolaPasseioPOD11}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD11) - (dadosForm.bitolaPasseioPOD8))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD11: e })} 
											value={dadosForm.superelevacaoRecalquePOD11} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD11) - (dadosForm.superelevacaoRecalquePOD9))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD11) - (dadosForm.superelevacaoRecalquePOD1))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD11: e })}
											value={dadosForm.flechaMedidaPOD11} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD11) - (dadosForm.flechaMedidaPOD8))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro12}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD12: e })}
											value={dadosForm.bitolaPasseioPOD12}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD12) - (dadosForm.bitolaPasseioPOD9))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD12: e })} 
											value={dadosForm.superelevacaoRecalquePOD12} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD12) - (dadosForm.superelevacaoRecalquePOD10))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD12) - (dadosForm.superelevacaoRecalquePOD2))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD12: e })}
											value={dadosForm.flechaMedidaPOD12} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD12) - (dadosForm.flechaMedidaPOD9))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro13}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD13: e })}
											value={dadosForm.bitolaPasseioPOD13}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD13) - (dadosForm.bitolaPasseioPOD10))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD13: e })} 
											value={dadosForm.superelevacaoRecalquePOD13} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD13) - (dadosForm.superelevacaoRecalquePOD11))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD13) - (dadosForm.superelevacaoRecalquePOD3))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD13: e })}
											value={dadosForm.flechaMedidaPOD13} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD13) - (dadosForm.flechaMedidaPOD10))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro14}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD14: e })}
											value={dadosForm.bitolaPasseioPOD14}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD14) - (dadosForm.bitolaPasseioPOD11))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD14: e })} 
											value={dadosForm.superelevacaoRecalquePOD14} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD14) - (dadosForm.superelevacaoRecalquePOD12))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD14) - (dadosForm.superelevacaoRecalquePOD4))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD14: e })}
											value={dadosForm.flechaMedidaPOD14} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD14) - (dadosForm.flechaMedidaPOD11))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro15}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD15: e })}
											value={dadosForm.bitolaPasseioPOD15}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD15) - (dadosForm.bitolaPasseioPOD12))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD15: e })} 
											value={dadosForm.superelevacaoRecalquePOD15} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD15) - (dadosForm.superelevacaoRecalquePOD13))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD15) - (dadosForm.superelevacaoRecalquePOD5))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD15: e })}
											value={dadosForm.flechaMedidaPOD15} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD15) - (dadosForm.flechaMedidaPOD12))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro16}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD16: e })}
											value={dadosForm.bitolaPasseioPOD16}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD16) - (dadosForm.bitolaPasseioPOD13))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD16: e })} 
											value={dadosForm.superelevacaoRecalquePOD16} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD16) - (dadosForm.superelevacaoRecalquePOD14))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD16) - (dadosForm.superelevacaoRecalquePOD6))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD16: e })}
											value={dadosForm.flechaMedidaPOD16} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD16) - (dadosForm.flechaMedidaPOD13))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro17}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD17: e })}
											value={dadosForm.bitolaPasseioPOD17}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD17) - (dadosForm.bitolaPasseioPOD14))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD17: e })} 
											value={dadosForm.superelevacaoRecalquePOD17} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD17) - (dadosForm.superelevacaoRecalquePOD15))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD17) - (dadosForm.superelevacaoRecalquePOD7))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD17: e })}
											value={dadosForm.flechaMedidaPOD17} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD17) - (dadosForm.flechaMedidaPOD14))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro18}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD18: e })}
											value={dadosForm.bitolaPasseioPOD18}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD18) - (dadosForm.bitolaPasseioPOD15))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD18: e })} 
											value={dadosForm.superelevacaoRecalquePOD18} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD18) - (dadosForm.superelevacaoRecalquePOD16))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD18) - (dadosForm.superelevacaoRecalquePOD8))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD18: e })}
											value={dadosForm.flechaMedidaPOD18} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD18) - (dadosForm.flechaMedidaPOD15))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro19}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD19: e })}
											value={dadosForm.bitolaPasseioPOD19}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD19) - (dadosForm.bitolaPasseioPOD16))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD19: e })} 
											value={dadosForm.superelevacaoRecalquePOD19} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD19) - (dadosForm.superelevacaoRecalquePOD17))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD19) - (dadosForm.superelevacaoRecalquePOD9))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD19: e })}
											value={dadosForm.flechaMedidaPOD19} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD19) - (dadosForm.flechaMedidaPOD16))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro20}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD20: e })}
											value={dadosForm.bitolaPasseioPOD20}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD20) - (dadosForm.bitolaPasseioPOD17))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD20: e })} 
											value={dadosForm.superelevacaoRecalquePOD20} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD20) - (dadosForm.superelevacaoRecalquePOD18))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD20) - (dadosForm.superelevacaoRecalquePOD10))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD20: e })}
											value={dadosForm.flechaMedidaPOD20} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD20) - (dadosForm.flechaMedidaPOD17))}</Text>
									</View>
								</View>





								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro21}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD21: e })}
											value={dadosForm.bitolaPasseioPOD21}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD21) - (dadosForm.bitolaPasseioPOD18))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD21: e })} 
											value={dadosForm.superelevacaoRecalquePOD21} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD21) - (dadosForm.superelevacaoRecalquePOD19))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD21) - (dadosForm.superelevacaoRecalquePOD11))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD21: e })}
											value={dadosForm.flechaMedidaPOD21} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD21) - (dadosForm.flechaMedidaPOD18))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro22}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD22: e })}
											value={dadosForm.bitolaPasseioPOD22}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD22) - (dadosForm.bitolaPasseioPOD19))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD22: e })} 
											value={dadosForm.superelevacaoRecalquePOD22} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD22) - (dadosForm.superelevacaoRecalquePOD20))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD22) - (dadosForm.superelevacaoRecalquePOD12))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD22: e })}
											value={dadosForm.flechaMedidaPOD22} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD22) - (dadosForm.flechaMedidaPOD19))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro23}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD23: e })}
											value={dadosForm.bitolaPasseioPOD23}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD23) - (dadosForm.bitolaPasseioPOD20))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD23: e })} 
											value={dadosForm.superelevacaoRecalquePOD23} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD23) - (dadosForm.superelevacaoRecalquePOD21))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD23) - (dadosForm.superelevacaoRecalquePOD13))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD23: e })}
											value={dadosForm.flechaMedidaPOD23} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD23) - (dadosForm.flechaMedidaPOD20))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro24}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD24: e })}
											value={dadosForm.bitolaPasseioPOD24}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD24) - (dadosForm.bitolaPasseioPOD21))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD24: e })} 
											value={dadosForm.superelevacaoRecalquePOD24} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD24) - (dadosForm.superelevacaoRecalquePOD22))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD24) - (dadosForm.superelevacaoRecalquePOD14))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD24: e })}
											value={dadosForm.flechaMedidaPOD24} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD24) - (dadosForm.flechaMedidaPOD21))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro25}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD25: e })}
											value={dadosForm.bitolaPasseioPOD25}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD25) - (dadosForm.bitolaPasseioPOD22))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD25: e })} 
											value={dadosForm.superelevacaoRecalquePOD25} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD25) - (dadosForm.superelevacaoRecalquePOD23))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD25) - (dadosForm.superelevacaoRecalquePOD15))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD25: e })}
											value={dadosForm.flechaMedidaPOD25} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD25) - (dadosForm.flechaMedidaPOD22))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro26}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD26: e })}
											value={dadosForm.bitolaPasseioPOD26}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD26) - (dadosForm.bitolaPasseioPOD23))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD26: e })} 
											value={dadosForm.superelevacaoRecalquePOD26} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD26) - (dadosForm.superelevacaoRecalquePOD24))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD26) - (dadosForm.superelevacaoRecalquePOD16))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD26: e })}
											value={dadosForm.flechaMedidaPOD26} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD26) - (dadosForm.flechaMedidaPOD23))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro27}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD27: e })}
											value={dadosForm.bitolaPasseioPOD27}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD27) - (dadosForm.bitolaPasseioPOD24))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD27: e })} 
											value={dadosForm.superelevacaoRecalquePOD27} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD27) - (dadosForm.superelevacaoRecalquePOD25))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD27) - (dadosForm.superelevacaoRecalquePOD17))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD27: e })}
											value={dadosForm.flechaMedidaPOD27} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD27) - (dadosForm.flechaMedidaPOD24))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro28}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD28: e })}
											value={dadosForm.bitolaPasseioPOD28}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD28) - (dadosForm.bitolaPasseioPOD25))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD28: e })} 
											value={dadosForm.superelevacaoRecalquePOD28} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD28) - (dadosForm.superelevacaoRecalquePOD26))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD28) - (dadosForm.superelevacaoRecalquePOD18))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD28: e })}
											value={dadosForm.flechaMedidaPOD28} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD28) - (dadosForm.flechaMedidaPOD25))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro29}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD29: e })}
											value={dadosForm.bitolaPasseioPOD29}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD29) - (dadosForm.bitolaPasseioPOD26))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD29: e })} 
											value={dadosForm.superelevacaoRecalquePOD29} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD29) - (dadosForm.superelevacaoRecalquePOD27))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD29) - (dadosForm.superelevacaoRecalquePOD19))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD29: e })}
											value={dadosForm.flechaMedidaPOD29} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD29) - (dadosForm.flechaMedidaPOD26))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro30}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD30: e })}
											value={dadosForm.bitolaPasseioPOD30}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD30) - (dadosForm.bitolaPasseioPOD27))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD30: e })} 
											value={dadosForm.superelevacaoRecalquePOD30} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD30) - (dadosForm.superelevacaoRecalquePOD28))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD30) - (dadosForm.superelevacaoRecalquePOD20))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD30: e })}
											value={dadosForm.flechaMedidaPOD30} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD30) - (dadosForm.flechaMedidaPOD27))}</Text>
									</View>
								</View>





								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro31}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD31: e })}
											value={dadosForm.bitolaPasseioPOD31}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD31) - (dadosForm.bitolaPasseioPOD28))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD31: e })} 
											value={dadosForm.superelevacaoRecalquePOD31} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD31) - (dadosForm.superelevacaoRecalquePOD29))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD31) - (dadosForm.superelevacaoRecalquePOD21))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD31: e })}
											value={dadosForm.flechaMedidaPOD31} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD31) - (dadosForm.flechaMedidaPOD28))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro32}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD32: e })}
											value={dadosForm.bitolaPasseioPOD32}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD32) - (dadosForm.bitolaPasseioPOD29))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD32: e })} 
											value={dadosForm.superelevacaoRecalquePOD32} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD32) - (dadosForm.superelevacaoRecalquePOD30))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD32) - (dadosForm.superelevacaoRecalquePOD22))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD32: e })}
											value={dadosForm.flechaMedidaPOD32} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD32) - (dadosForm.flechaMedidaPOD29))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro33}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD33: e })}
											value={dadosForm.bitolaPasseioPOD33}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD33) - (dadosForm.bitolaPasseioPOD30))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD33: e })} 
											value={dadosForm.superelevacaoRecalquePOD33} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD33) - (dadosForm.superelevacaoRecalquePOD31))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD33) - (dadosForm.superelevacaoRecalquePOD23))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD33: e })}
											value={dadosForm.flechaMedidaPOD33} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD33) - (dadosForm.flechaMedidaPOD30))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro34}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD34: e })}
											value={dadosForm.bitolaPasseioPOD34}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD34) - (dadosForm.bitolaPasseioPOD31))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD34: e })} 
											value={dadosForm.superelevacaoRecalquePOD34} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD34) - (dadosForm.superelevacaoRecalquePOD32))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD34) - (dadosForm.superelevacaoRecalquePOD24))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD34: e })}
											value={dadosForm.flechaMedidaPOD34} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD34) - (dadosForm.flechaMedidaPOD31))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro35}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD35: e })}
											value={dadosForm.bitolaPasseioPOD35}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD35) - (dadosForm.bitolaPasseioPOD32))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD35: e })} 
											value={dadosForm.superelevacaoRecalquePOD35} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD35) - (dadosForm.superelevacaoRecalquePOD33))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD35) - (dadosForm.superelevacaoRecalquePOD25))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD35: e })}
											value={dadosForm.flechaMedidaPOD35} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD35) - (dadosForm.flechaMedidaPOD32))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro36}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD36: e })}
											value={dadosForm.bitolaPasseioPOD36}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD36) - (dadosForm.bitolaPasseioPOD33))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD36: e })} 
											value={dadosForm.superelevacaoRecalquePOD36} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD36) - (dadosForm.superelevacaoRecalquePOD34))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD36) - (dadosForm.superelevacaoRecalquePOD26))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD36: e })}
											value={dadosForm.flechaMedidaPOD36} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD36) - (dadosForm.flechaMedidaPOD33))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro37}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD37: e })}
											value={dadosForm.bitolaPasseioPOD37}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD37) - (dadosForm.bitolaPasseioPOD34))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD37: e })} 
											value={dadosForm.superelevacaoRecalquePOD37} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD37) - (dadosForm.superelevacaoRecalquePOD35))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD37) - (dadosForm.superelevacaoRecalquePOD27))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD37: e })}
											value={dadosForm.flechaMedidaPOD37} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD37) - (dadosForm.flechaMedidaPOD34))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro38}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD38: e })}
											value={dadosForm.bitolaPasseioPOD38}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD38) - (dadosForm.bitolaPasseioPOD35))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD38: e })} 
											value={dadosForm.superelevacaoRecalquePOD38} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD38) - (dadosForm.superelevacaoRecalquePOD36))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD38) - (dadosForm.superelevacaoRecalquePOD28))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD38: e })}
											value={dadosForm.flechaMedidaPOD38} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD38) - (dadosForm.flechaMedidaPOD35))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro39}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD39: e })}
											value={dadosForm.bitolaPasseioPOD39}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD39) - (dadosForm.bitolaPasseioPOD36))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD39: e })} 
											value={dadosForm.superelevacaoRecalquePOD39} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD39) - (dadosForm.superelevacaoRecalquePOD37))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD39) - (dadosForm.superelevacaoRecalquePOD29))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD39: e })}
											value={dadosForm.flechaMedidaPOD39} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD39) - (dadosForm.flechaMedidaPOD36))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro40}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD40: e })}
											value={dadosForm.bitolaPasseioPOD40}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD40) - (dadosForm.bitolaPasseioPOD37))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD40: e })} 
											value={dadosForm.superelevacaoRecalquePOD40} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD40) - (dadosForm.superelevacaoRecalquePOD38))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD40) - (dadosForm.superelevacaoRecalquePOD30))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD40: e })}
											value={dadosForm.flechaMedidaPOD40} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD40) - (dadosForm.flechaMedidaPOD37))}</Text>
									</View>
								</View>






								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro41}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD41: e })}
											value={dadosForm.bitolaPasseioPOD41}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD41) - (dadosForm.bitolaPasseioPOD38))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD41: e })} 
											value={dadosForm.superelevacaoRecalquePOD41} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD41) - (dadosForm.superelevacaoRecalquePOD39))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD41) - (dadosForm.superelevacaoRecalquePOD31))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD41: e })}
											value={dadosForm.flechaMedidaPOD41} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD41) - (dadosForm.flechaMedidaPOD38))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro42}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD42: e })}
											value={dadosForm.bitolaPasseioPOD42}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD42) - (dadosForm.bitolaPasseioPOD39))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD42: e })} 
											value={dadosForm.superelevacaoRecalquePOD42} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD42) - (dadosForm.superelevacaoRecalquePOD40))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD42) - (dadosForm.superelevacaoRecalquePOD32))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD42: e })}
											value={dadosForm.flechaMedidaPOD42} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD42) - (dadosForm.flechaMedidaPOD39))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro43}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD43: e })}
											value={dadosForm.bitolaPasseioPOD43}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD43) - (dadosForm.bitolaPasseioPOD40))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD43: e })} 
											value={dadosForm.superelevacaoRecalquePOD43} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD43) - (dadosForm.superelevacaoRecalquePOD41))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD43) - (dadosForm.superelevacaoRecalquePOD33))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD43: e })}
											value={dadosForm.flechaMedidaPOD43} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD43) - (dadosForm.flechaMedidaPOD40))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro44}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD44: e })}
											value={dadosForm.bitolaPasseioPOD44}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD44) - (dadosForm.bitolaPasseioPOD41))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD44: e })} 
											value={dadosForm.superelevacaoRecalquePOD44} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD44) - (dadosForm.superelevacaoRecalquePOD42))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD44) - (dadosForm.superelevacaoRecalquePOD34))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD44: e })}
											value={dadosForm.flechaMedidaPOD44} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD44) - (dadosForm.flechaMedidaPOD41))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro45}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD45: e })}
											value={dadosForm.bitolaPasseioPOD45}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD45) - (dadosForm.bitolaPasseioPOD42))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD45: e })} 
											value={dadosForm.superelevacaoRecalquePOD45} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD45) - (dadosForm.superelevacaoRecalquePOD43))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD45) - (dadosForm.superelevacaoRecalquePOD35))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD45: e })}
											value={dadosForm.flechaMedidaPOD45} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD45) - (dadosForm.flechaMedidaPOD42))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro46}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD46: e })}
											value={dadosForm.bitolaPasseioPOD46}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD46) - (dadosForm.bitolaPasseioPOD43))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD46: e })} 
											value={dadosForm.superelevacaoRecalquePOD46} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD46) - (dadosForm.superelevacaoRecalquePOD44))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD46) - (dadosForm.superelevacaoRecalquePOD36))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD46: e })}
											value={dadosForm.flechaMedidaPOD46} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD46) - (dadosForm.flechaMedidaPOD43))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro47}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD47: e })}
											value={dadosForm.bitolaPasseioPOD47}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD47) - (dadosForm.bitolaPasseioPOD44))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD47: e })} 
											value={dadosForm.superelevacaoRecalquePOD47} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD47) - (dadosForm.superelevacaoRecalquePOD45))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD47) - (dadosForm.superelevacaoRecalquePOD37))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD47: e })}
											value={dadosForm.flechaMedidaPOD47} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD47) - (dadosForm.flechaMedidaPOD44))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro48}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD48: e })}
											value={dadosForm.bitolaPasseioPOD48}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD48) - (dadosForm.bitolaPasseioPOD45))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD48: e })} 
											value={dadosForm.superelevacaoRecalquePOD48} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD48) - (dadosForm.superelevacaoRecalquePOD46))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD48) - (dadosForm.superelevacaoRecalquePOD38))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD48: e })}
											value={dadosForm.flechaMedidaPOD48} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD49) - (dadosForm.flechaMedidaPOD46))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro49}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD49: e })}
											value={dadosForm.bitolaPasseioPOD49}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD49) - (dadosForm.bitolaPasseioPOD46))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD49: e })} 
											value={dadosForm.superelevacaoRecalquePOD49} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD49) - (dadosForm.superelevacaoRecalquePOD47))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD49) - (dadosForm.superelevacaoRecalquePOD39))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD49: e })}
											value={dadosForm.flechaMedidaPOD49} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD49) - (dadosForm.flechaMedidaPOD46))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro50}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD50: e })}
											value={dadosForm.bitolaPasseioPOD50}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD50) - (dadosForm.bitolaPasseioPOD47))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD50: e })} 
											value={dadosForm.superelevacaoRecalquePOD50} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD50) - (dadosForm.superelevacaoRecalquePOD48))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD50) - (dadosForm.superelevacaoRecalquePOD40))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD50: e })}
											value={dadosForm.flechaMedidaPOD50} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD50) - (dadosForm.flechaMedidaPOD47))}</Text>
									</View>
								</View>






								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro51}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD51: e })}
											value={dadosForm.bitolaPasseioPOD51}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD51) - (dadosForm.bitolaPasseioPOD48))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD51: e })} 
											value={dadosForm.superelevacaoRecalquePOD51} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD51) - (dadosForm.superelevacaoRecalquePOD49))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD51) - (dadosForm.superelevacaoRecalquePOD41))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD51: e })}
											value={dadosForm.flechaMedidaPOD51} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD51) - (dadosForm.flechaMedidaPOD48))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro52}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD52: e })}
											value={dadosForm.bitolaPasseioPOD52}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD52) - (dadosForm.bitolaPasseioPOD49))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD52: e })} 
											value={dadosForm.superelevacaoRecalquePOD52} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD52) - (dadosForm.superelevacaoRecalquePOD50))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD52) - (dadosForm.superelevacaoRecalquePOD42))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD52: e })}
											value={dadosForm.flechaMedidaPOD52} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD52) - (dadosForm.flechaMedidaPOD49))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro53}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD53: e })}
											value={dadosForm.bitolaPasseioPOD53}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD53) - (dadosForm.bitolaPasseioPOD50))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD53: e })} 
											value={dadosForm.superelevacaoRecalquePOD53} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD53) - (dadosForm.superelevacaoRecalquePOD51))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD53) - (dadosForm.superelevacaoRecalquePOD43))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD53: e })}
											value={dadosForm.flechaMedidaPOD53} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD53) - (dadosForm.flechaMedidaPOD50))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro54}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD54: e })}
											value={dadosForm.bitolaPasseioPOD54}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD54) - (dadosForm.bitolaPasseioPOD51))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD54: e })} 
											value={dadosForm.superelevacaoRecalquePOD54} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD54) - (dadosForm.superelevacaoRecalquePOD52))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD54) - (dadosForm.superelevacaoRecalquePOD44))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD54: e })}
											value={dadosForm.flechaMedidaPOD54} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD54) - (dadosForm.flechaMedidaPOD51))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro55}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD55: e })}
											value={dadosForm.bitolaPasseioPOD55}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD55) - (dadosForm.bitolaPasseioPOD52))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD55: e })} 
											value={dadosForm.superelevacaoRecalquePOD55} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD55) - (dadosForm.superelevacaoRecalquePOD53))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD55) - (dadosForm.superelevacaoRecalquePOD45))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD55: e })}
											value={dadosForm.flechaMedidaPOD55} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD55) - (dadosForm.flechaMedidaPOD52))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro56}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD56: e })}
											value={dadosForm.bitolaPasseioPOD56}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD56) - (dadosForm.bitolaPasseioPOD53))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD56: e })} 
											value={dadosForm.superelevacaoRecalquePOD56} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD56) - (dadosForm.superelevacaoRecalquePOD54))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD56) - (dadosForm.superelevacaoRecalquePOD46))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD56: e })}
											value={dadosForm.flechaMedidaPOD56} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD56) - (dadosForm.flechaMedidaPOD53))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro57}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD57: e })}
											value={dadosForm.bitolaPasseioPOD57}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD57) - (dadosForm.bitolaPasseioPOD54))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD57: e })} 
											value={dadosForm.superelevacaoRecalquePOD57} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD57) - (dadosForm.superelevacaoRecalquePOD55))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD57) - (dadosForm.superelevacaoRecalquePOD47))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD57: e })}
											value={dadosForm.flechaMedidaPOD57} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD57) - (dadosForm.flechaMedidaPOD54))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro58}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD58: e })}
											value={dadosForm.bitolaPasseioPOD58}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD58) - (dadosForm.bitolaPasseioPOD55))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD58: e })} 
											value={dadosForm.superelevacaoRecalquePOD58} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD58) - (dadosForm.superelevacaoRecalquePOD56))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD58) - (dadosForm.superelevacaoRecalquePOD48))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD58: e })}
											value={dadosForm.flechaMedidaPOD58} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD58) - (dadosForm.flechaMedidaPOD55))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro59}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD59: e })}
											value={dadosForm.bitolaPasseioPOD59}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD59) - (dadosForm.bitolaPasseioPOD56))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD59: e })} 
											value={dadosForm.superelevacaoRecalquePOD59} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD59) - (dadosForm.superelevacaoRecalquePOD57))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD59) - (dadosForm.superelevacaoRecalquePOD49))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD59: e })}
											value={dadosForm.flechaMedidaPOD59} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD59) - (dadosForm.flechaMedidaPOD56))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro60}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD60: e })}
											value={dadosForm.bitolaPasseioPOD60}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD60) - (dadosForm.bitolaPasseioPOD57))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD60: e })} 
											value={dadosForm.superelevacaoRecalquePOD60} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD60) - (dadosForm.superelevacaoRecalquePOD58))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD60) - (dadosForm.superelevacaoRecalquePOD50))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD60: e })}
											value={dadosForm.flechaMedidaPOD60} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD60) - (dadosForm.flechaMedidaPOD57))}</Text>
									</View>
								</View>







								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro61}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD61: e })}
											value={dadosForm.bitolaPasseioPOD61}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD61) - (dadosForm.bitolaPasseioPOD58))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD61: e })} 
											value={dadosForm.superelevacaoRecalquePOD61} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD61) - (dadosForm.superelevacaoRecalquePOD59))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD61) - (dadosForm.superelevacaoRecalquePOD51))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD61: e })}
											value={dadosForm.flechaMedidaPOD61} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD61) - (dadosForm.flechaMedidaPOD58))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro62}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD62: e })}
											value={dadosForm.bitolaPasseioPOD62}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD62) - (dadosForm.bitolaPasseioPOD59))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD62: e })} 
											value={dadosForm.superelevacaoRecalquePOD62} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD62) - (dadosForm.superelevacaoRecalquePOD60))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD62) - (dadosForm.superelevacaoRecalquePOD52))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD62: e })}
											value={dadosForm.flechaMedidaPOD62} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD62) - (dadosForm.flechaMedidaPOD59))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro63}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD63: e })}
											value={dadosForm.bitolaPasseioPOD63}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD63) - (dadosForm.bitolaPasseioPOD60))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD63: e })} 
											value={dadosForm.superelevacaoRecalquePOD63} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD63) - (dadosForm.superelevacaoRecalquePOD61))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD63) - (dadosForm.superelevacaoRecalquePOD53))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD63: e })}
											value={dadosForm.flechaMedidaPOD63} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD63) - (dadosForm.flechaMedidaPOD60))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro64}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD64: e })}
											value={dadosForm.bitolaPasseioPOD64}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD64) - (dadosForm.bitolaPasseioPOD61))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD64: e })} 
											value={dadosForm.superelevacaoRecalquePOD64} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD64) - (dadosForm.superelevacaoRecalquePOD62))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD64) - (dadosForm.superelevacaoRecalquePOD54))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD64: e })}
											value={dadosForm.flechaMedidaPOD64} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD64) - (dadosForm.flechaMedidaPOD61))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro65}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD65: e })}
											value={dadosForm.bitolaPasseioPOD65}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD65) - (dadosForm.bitolaPasseioPOD62))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD65: e })} 
											value={dadosForm.superelevacaoRecalquePOD65} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD65) - (dadosForm.superelevacaoRecalquePOD63))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD65) - (dadosForm.superelevacaoRecalquePOD55))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD65: e })}
											value={dadosForm.flechaMedidaPOD65} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD65) - (dadosForm.flechaMedidaPOD62))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro66}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD66: e })}
											value={dadosForm.bitolaPasseioPOD66}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD66) - (dadosForm.bitolaPasseioPOD63))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD66: e })} 
											value={dadosForm.superelevacaoRecalquePOD66} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD66) - (dadosForm.superelevacaoRecalquePOD64))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD66) - (dadosForm.superelevacaoRecalquePOD56))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD66: e })}
											value={dadosForm.flechaMedidaPOD66} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD66) - (dadosForm.flechaMedidaPOD63))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro67}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD67: e })}
											value={dadosForm.bitolaPasseioPOD67}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD67) - (dadosForm.bitolaPasseioPOD64))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD67: e })} 
											value={dadosForm.superelevacaoRecalquePOD67} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD67) - (dadosForm.superelevacaoRecalquePOD65))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD67) - (dadosForm.superelevacaoRecalquePOD57))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD67: e })}
											value={dadosForm.flechaMedidaPOD67} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD67) - (dadosForm.flechaMedidaPOD64))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro68}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD68: e })}
											value={dadosForm.bitolaPasseioPOD68}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD68) - (dadosForm.bitolaPasseioPOD65))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD68: e })} 
											value={dadosForm.superelevacaoRecalquePOD68} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD68) - (dadosForm.superelevacaoRecalquePOD66))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD68) - (dadosForm.superelevacaoRecalquePOD58))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD68: e })}
											value={dadosForm.flechaMedidaPOD68} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD68) - (dadosForm.flechaMedidaPOD65))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro69}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD69: e })}
											value={dadosForm.bitolaPasseioPOD69}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD69) - (dadosForm.bitolaPasseioPOD66))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD69: e })} 
											value={dadosForm.superelevacaoRecalquePOD69} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD69) - (dadosForm.superelevacaoRecalquePOD67))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD69) - (dadosForm.superelevacaoRecalquePOD59))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD69: e })}
											value={dadosForm.flechaMedidaPOD69} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD69) - (dadosForm.flechaMedidaPOD66))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro70}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD70: e })}
											value={dadosForm.bitolaPasseioPOD70}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD70) - (dadosForm.bitolaPasseioPOD67))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD70: e })} 
											value={dadosForm.superelevacaoRecalquePOD70} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD70) - (dadosForm.superelevacaoRecalquePOD68))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD70) - (dadosForm.superelevacaoRecalquePOD60))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD70: e })}
											value={dadosForm.flechaMedidaPOD70} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD70) - (dadosForm.flechaMedidaPOD67))}</Text>
									</View>
								</View>







								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro71}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD71: e })}
											value={dadosForm.bitolaPasseioPOD71}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD71) - (dadosForm.bitolaPasseioPOD68))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD71: e })} 
											value={dadosForm.superelevacaoRecalquePOD71} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD71) - (dadosForm.superelevacaoRecalquePOD69))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD71) - (dadosForm.superelevacaoRecalquePOD61))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD71: e })}
											value={dadosForm.flechaMedidaPOD71} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD71) - (dadosForm.flechaMedidaPOD68))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro72}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD72: e })}
											value={dadosForm.bitolaPasseioPOD72}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD72) - (dadosForm.bitolaPasseioPOD69))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD72: e })} 
											value={dadosForm.superelevacaoRecalquePOD72} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD72) - (dadosForm.superelevacaoRecalquePOD70))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD72) - (dadosForm.superelevacaoRecalquePOD62))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD72: e })}
											value={dadosForm.flechaMedidaPOD72} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD72) - (dadosForm.flechaMedidaPOD69))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro73}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD73: e })}
											value={dadosForm.bitolaPasseioPOD73}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD73) - (dadosForm.bitolaPasseioPOD70))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD73: e })} 
											value={dadosForm.superelevacaoRecalquePOD73} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD73) - (dadosForm.superelevacaoRecalquePOD71))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD73) - (dadosForm.superelevacaoRecalquePOD63))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD73: e })}
											value={dadosForm.flechaMedidaPOD73} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD73) - (dadosForm.flechaMedidaPOD70))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro74}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD74: e })}
											value={dadosForm.bitolaPasseioPOD74}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD74) - (dadosForm.bitolaPasseioPOD71))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD74: e })} 
											value={dadosForm.superelevacaoRecalquePOD74} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD74) - (dadosForm.superelevacaoRecalquePOD72))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD74) - (dadosForm.superelevacaoRecalquePOD64))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD74: e })}
											value={dadosForm.flechaMedidaPOD74} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD74) - (dadosForm.flechaMedidaPOD71))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro75}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD75: e })}
											value={dadosForm.bitolaPasseioPOD75}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD75) - (dadosForm.bitolaPasseioPOD72))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD75: e })} 
											value={dadosForm.superelevacaoRecalquePOD75} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD75) - (dadosForm.superelevacaoRecalquePOD73))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD75) - (dadosForm.superelevacaoRecalquePOD65))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD75: e })}
											value={dadosForm.flechaMedidaPOD75} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD75) - (dadosForm.flechaMedidaPOD72))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro76}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD76: e })}
											value={dadosForm.bitolaPasseioPOD76}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD76) - (dadosForm.bitolaPasseioPOD73))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD76: e })} 
											value={dadosForm.superelevacaoRecalquePOD76} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD76) - (dadosForm.superelevacaoRecalquePOD74))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD76) - (dadosForm.superelevacaoRecalquePOD66))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD76: e })}
											value={dadosForm.flechaMedidaPOD76} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD76) - (dadosForm.flechaMedidaPOD73))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro77}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD77: e })}
											value={dadosForm.bitolaPasseioPOD77}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD77) - (dadosForm.bitolaPasseioPOD74))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD77: e })} 
											value={dadosForm.superelevacaoRecalquePOD77} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD77) - (dadosForm.superelevacaoRecalquePOD75))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD77) - (dadosForm.superelevacaoRecalquePOD67))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD77: e })}
											value={dadosForm.flechaMedidaPOD77} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD77) - (dadosForm.flechaMedidaPOD74))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro78}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD78: e })}
											value={dadosForm.bitolaPasseioPOD78}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD78) - (dadosForm.bitolaPasseioPOD75))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD78: e })} 
											value={dadosForm.superelevacaoRecalquePOD78} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD78) - (dadosForm.superelevacaoRecalquePOD76))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD78) - (dadosForm.superelevacaoRecalquePOD68))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD78: e })}
											value={dadosForm.flechaMedidaPOD78} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD78) - (dadosForm.flechaMedidaPOD75))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro79}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD79: e })}
											value={dadosForm.bitolaPasseioPOD79}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD79) - (dadosForm.bitolaPasseioPOD76))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD79: e })} 
											value={dadosForm.superelevacaoRecalquePOD79} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD79) - (dadosForm.superelevacaoRecalquePOD77))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD79) - (dadosForm.superelevacaoRecalquePOD69))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD79: e })}
											value={dadosForm.flechaMedidaPOD79} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD79) - (dadosForm.flechaMedidaPOD76))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro80}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD80: e })}
											value={dadosForm.bitolaPasseioPOD80}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD80) - (dadosForm.bitolaPasseioPOD77))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD80: e })} 
											value={dadosForm.superelevacaoRecalquePOD80} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD80) - (dadosForm.superelevacaoRecalquePOD78))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD80) - (dadosForm.superelevacaoRecalquePOD70))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD80: e })}
											value={dadosForm.flechaMedidaPOD80} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD80) - (dadosForm.flechaMedidaPOD77))}</Text>
									</View>
								</View>







								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro81}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD81: e })}
											value={dadosForm.bitolaPasseioPOD81}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD81) - (dadosForm.bitolaPasseioPOD78))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD81: e })} 
											value={dadosForm.superelevacaoRecalquePOD81} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD81) - (dadosForm.superelevacaoRecalquePOD79))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD81) - (dadosForm.superelevacaoRecalquePOD71))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD81: e })}
											value={dadosForm.flechaMedidaPOD81} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD81) - (dadosForm.flechaMedidaPOD78))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro82}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD82: e })}
											value={dadosForm.bitolaPasseioPOD82}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD82) - (dadosForm.bitolaPasseioPOD79))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD82: e })} 
											value={dadosForm.superelevacaoRecalquePOD82} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD82) - (dadosForm.superelevacaoRecalquePOD80))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD82) - (dadosForm.superelevacaoRecalquePOD72))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD82: e })}
											value={dadosForm.flechaMedidaPOD82} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD82) - (dadosForm.flechaMedidaPOD79))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro83}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD83: e })}
											value={dadosForm.bitolaPasseioPOD83}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD83) - (dadosForm.bitolaPasseioPOD80))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD83: e })} 
											value={dadosForm.superelevacaoRecalquePOD83} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD83) - (dadosForm.superelevacaoRecalquePOD81))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD83) - (dadosForm.superelevacaoRecalquePOD73))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD83: e })}
											value={dadosForm.flechaMedidaPOD83} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD83) - (dadosForm.flechaMedidaPOD80))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro84}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD84: e })}
											value={dadosForm.bitolaPasseioPOD84}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD84) - (dadosForm.bitolaPasseioPOD81))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD84: e })} 
											value={dadosForm.superelevacaoRecalquePOD84} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD84) - (dadosForm.superelevacaoRecalquePOD82))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD84) - (dadosForm.superelevacaoRecalquePOD74))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD84: e })}
											value={dadosForm.flechaMedidaPOD84} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD84) - (dadosForm.flechaMedidaPOD81))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro85}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD85: e })}
											value={dadosForm.bitolaPasseioPOD85}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD85) - (dadosForm.bitolaPasseioPOD82))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD85: e })} 
											value={dadosForm.superelevacaoRecalquePOD85} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD85) - (dadosForm.superelevacaoRecalquePOD83))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD85) - (dadosForm.superelevacaoRecalquePOD75))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD85: e })}
											value={dadosForm.flechaMedidaPOD85} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD85) - (dadosForm.flechaMedidaPOD82))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro86}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD86: e })}
											value={dadosForm.bitolaPasseioPOD86}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD86) - (dadosForm.bitolaPasseioPOD83))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD86: e })} 
											value={dadosForm.superelevacaoRecalquePOD86} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD86) - (dadosForm.superelevacaoRecalquePOD84))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD86) - (dadosForm.superelevacaoRecalquePOD76))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD86: e })}
											value={dadosForm.flechaMedidaPOD86} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD86) - (dadosForm.flechaMedidaPOD83))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro87}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD87: e })}
											value={dadosForm.bitolaPasseioPOD87}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD87) - (dadosForm.bitolaPasseioPOD84))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD87: e })} 
											value={dadosForm.superelevacaoRecalquePOD87} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD87) - (dadosForm.superelevacaoRecalquePOD85))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD87) - (dadosForm.superelevacaoRecalquePOD77))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD87: e })}
											value={dadosForm.flechaMedidaPOD87} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD87) - (dadosForm.flechaMedidaPOD84))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro88}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD88: e })}
											value={dadosForm.bitolaPasseioPOD88}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD88) - (dadosForm.bitolaPasseioPOD85))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD88: e })} 
											value={dadosForm.superelevacaoRecalquePOD88} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD88) - (dadosForm.superelevacaoRecalquePOD86))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD88) - (dadosForm.superelevacaoRecalquePOD78))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD88: e })}
											value={dadosForm.flechaMedidaPOD88} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD88) - (dadosForm.flechaMedidaPOD85))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro89}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD89: e })}
											value={dadosForm.bitolaPasseioPOD89}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD89) - (dadosForm.bitolaPasseioPOD86))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD89: e })} 
											value={dadosForm.superelevacaoRecalquePOD89} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD89) - (dadosForm.superelevacaoRecalquePOD87))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD89) - (dadosForm.superelevacaoRecalquePOD79))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD89: e })}
											value={dadosForm.flechaMedidaPOD89} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD89) - (dadosForm.flechaMedidaPOD86))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro90}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD90: e })}
											value={dadosForm.bitolaPasseioPOD90}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD90) - (dadosForm.bitolaPasseioPOD87))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD90: e })} 
											value={dadosForm.superelevacaoRecalquePOD90} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD90) - (dadosForm.superelevacaoRecalquePOD88))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD90) - (dadosForm.superelevacaoRecalquePOD80))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD90: e })}
											value={dadosForm.flechaMedidaPOD90} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD90) - (dadosForm.flechaMedidaPOD87))}</Text>
									</View>
								</View>






								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro91}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD91: e })}
											value={dadosForm.bitolaPasseioPOD91}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD91) - (dadosForm.bitolaPasseioPOD88))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD91: e })} 
											value={dadosForm.superelevacaoRecalquePOD91} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD91) - (dadosForm.superelevacaoRecalquePOD89))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD91) - (dadosForm.superelevacaoRecalquePOD81))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD91: e })}
											value={dadosForm.flechaMedidaPOD91} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD91) - (dadosForm.flechaMedidaPOD88))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro92}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD92: e })}
											value={dadosForm.bitolaPasseioPOD92}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD92) - (dadosForm.bitolaPasseioPOD89))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD92: e })} 
											value={dadosForm.superelevacaoRecalquePOD92} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD92) - (dadosForm.superelevacaoRecalquePOD90))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD92) - (dadosForm.superelevacaoRecalquePOD82))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD92: e })}
											value={dadosForm.flechaMedidaPOD92} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD92) - (dadosForm.flechaMedidaPOD89))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro93}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD93: e })}
											value={dadosForm.bitolaPasseioPOD93}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD93) - (dadosForm.bitolaPasseioPOD90))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD93: e })} 
											value={dadosForm.superelevacaoRecalquePOD93} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD93) - (dadosForm.superelevacaoRecalquePOD91))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD93) - (dadosForm.superelevacaoRecalquePOD83))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD93: e })}
											value={dadosForm.flechaMedidaPOD93} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD93) - (dadosForm.flechaMedidaPOD90))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro94}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD94: e })}
											value={dadosForm.bitolaPasseioPOD94}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD94) - (dadosForm.bitolaPasseioPOD91))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD94: e })} 
											value={dadosForm.superelevacaoRecalquePOD94} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD94) - (dadosForm.superelevacaoRecalquePOD92))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD94) - (dadosForm.superelevacaoRecalquePOD84))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD94: e })}
											value={dadosForm.flechaMedidaPOD94} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD94) - (dadosForm.flechaMedidaPOD91))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro95}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD95: e })}
											value={dadosForm.bitolaPasseioPOD95}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD95) - (dadosForm.bitolaPasseioPOD92))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD95: e })} 
											value={dadosForm.superelevacaoRecalquePOD95} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD95) - (dadosForm.superelevacaoRecalquePOD93))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD95) - (dadosForm.superelevacaoRecalquePOD85))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD95: e })}
											value={dadosForm.flechaMedidaPOD95} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD95) - (dadosForm.flechaMedidaPOD92))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro96}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD96: e })}
											value={dadosForm.bitolaPasseioPOD96}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD96) - (dadosForm.bitolaPasseioPOD93))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD96: e })} 
											value={dadosForm.superelevacaoRecalquePOD96} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD96) - (dadosForm.superelevacaoRecalquePOD94))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD96) - (dadosForm.superelevacaoRecalquePOD86))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD96: e })}
											value={dadosForm.flechaMedidaPOD96} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD96) - (dadosForm.flechaMedidaPOD93))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro97}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD97: e })}
											value={dadosForm.bitolaPasseioPOD97}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD97) - (dadosForm.bitolaPasseioPOD94))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD97: e })} 
											value={dadosForm.superelevacaoRecalquePOD97} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD97) - (dadosForm.superelevacaoRecalquePOD95))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD97) - (dadosForm.superelevacaoRecalquePOD87))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD97: e })}
											value={dadosForm.flechaMedidaPOD97} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD97) - (dadosForm.flechaMedidaPOD94))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro98}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD98: e })}
											value={dadosForm.bitolaPasseioPOD98}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD98) - (dadosForm.bitolaPasseioPOD95))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD98: e })} 
											value={dadosForm.superelevacaoRecalquePOD98} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD98) - (dadosForm.superelevacaoRecalquePOD96))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD98) - (dadosForm.superelevacaoRecalquePOD88))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD98: e })}
											value={dadosForm.flechaMedidaPOD98} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD98) - (dadosForm.flechaMedidaPOD95))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro99}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD99: e })}
											value={dadosForm.bitolaPasseioPOD99}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD99) - (dadosForm.bitolaPasseioPOD96))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD99: e })} 
											value={dadosForm.superelevacaoRecalquePOD99} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD99) - (dadosForm.superelevacaoRecalquePOD97))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD99) - (dadosForm.superelevacaoRecalquePOD89))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD99: e })}
											value={dadosForm.flechaMedidaPOD99} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD99) - (dadosForm.flechaMedidaPOD96))}</Text>
									</View>
								</View>

								<View style={styles.tablePODMedicoes}>
									<View style={styles.tablePODMedicoesRow1}>
										<Text style={styles.tablePODCol1}>{dadosForm.estacaCadaMetro100}</Text>
									</View>
									<View  style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, bitolaPasseioPOD100: e })}
											value={dadosForm.bitolaPasseioPOD100}
											multiline={false}
											style={styles.tablePODIntputEditable}

										/>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.bitolaPasseioPOD100) - (dadosForm.bitolaPasseioPOD97))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, superelevacaoRecalquePOD100: e })} 
											value={dadosForm.superelevacaoRecalquePOD100} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>            
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD100) - (dadosForm.superelevacaoRecalquePOD98))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.superelevacaoRecalquePOD100) - (dadosForm.superelevacaoRecalquePOD90))}</Text>
									</View>
									<View style={styles.tablePODMedicoesRow3}>
										<TextInput 
											keyboardType='numeric'
											onChangeText = {(e) => setDadosForm({ ...dadosForm, flechaMedidaPOD100: e })}
											value={dadosForm.flechaMedidaPOD100} 
											multiline={false} 
											style={styles.tablePODIntputEditable}

										/>
									</View>							
									<View style={styles.tablePODMedicoesRow5}>		
										<Text style={styles.tablePODCol1}>{Math.abs((dadosForm.flechaMedidaPOD100) - (dadosForm.flechaMedidaPOD97))}</Text>
									</View>
								</View>

							</View>
						</View>
					</View>				
					
					<View>
						<SendForm 
							json={JSON.parse(JSON.stringify(dadosForm).replace(regex,"**"))}
							req={requiredFields} 
							callback={props.navigation.goBack} 
							route={routes.dadosVia} 
							createdForm={createdForm} 
							title='Salvar' 
						/>
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