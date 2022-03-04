import CheckBox from 'react-native-check-box'
import NumericInput from '@wwdrew/react-native-numeric-textinput';
import { routes } from '../utils/constants';
import React, { useState, useEffect, useRef } from 'react';
import { styles } from '../styles/styles';
import { SendForm, updateForms, getWeather, getRestrictionReason, queryFormUsers, gravarLogLocal } from '../businessLayer/forms';
import { Text, View, Alert, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import Autocomplete from 'react-native-autocomplete-input';
import Moment from 'moment';
import DatePicker from 'react-native-datepicker';
import TimePicker from 'react-native-simple-time-picker';
import { Picker } from '@react-native-picker/picker';
import { ButtonG } from '../components/Button';
import { deleteFormByRoute } from '../db/forms';

export default function DadosOperacao(props) {
  const [weatherList, setWeatherList] = useState([]);
  const [weatherValue, setWeatherValue] = useState('');
  const [createdForm, setCreatedForm] = useState(undefined);
  const [restrictionReasonList, setRestrictionReasonList] = useState([]);
  const [restrictionReasonValue, setRestrictionReasonValue] = useState('');
  const [resultQuery1, setResultQuery1] = useState([]);
  const [queryDados1, setQueryDados1] = useState('');
  const [resultQuery2, setResultQuery2] = useState([]);
  const [queryDados2, setQueryDados2] = useState('');
  const timeSelect1 = useRef(null);

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
    dataInspecao: dateSelect.date2 + ' ' + dateSelect.selectedHours2 + ':' + dateSelect.selectedMinutes2,
    descricao: '',
    queixaFreio: false,
    observandoComposicao: false,
    vazamentoAr: '',
    gradiente: '',
    kmLocoComandante: '',
    kmPrimeiroVagaoDescarrilado: '',
    situacaoDosFreios: '',
    pecasSoltas: '',
    vagoesIsolados: false,
    torneiraAngularFechada: false,
    sapatasDesreguladas: false,
    blocosSemEmergencia: false,
    mixValvulas: false,
    sinaisTravas: false,
    freioManual: false,
    boletimTrem: false,
    cargaExcesso: false,
    rechego: false,
    primeiroVagaoAcidentado: '',
    r1d: false,
    r1e: false,
    r2d: false,
    r2e: false,
    r3d: false,
    r3e: false,
    r4d: false,
    r4e: false,
    condicaoTempo: '',
    vma: '',
    restricaoVelocidade: false,
    motivoRestricao: '',
    estavaSinalizado: false,
    tipoSinalizacao: '',
    observacao: '',
    posicaoManipuladorFreio: false,
    lbs: '',
    freioDinamico: false,

    posicaoAcelerador: '',
    quantidadeAmperes: '',

    trafegoMaior: false,
    velocidadePercebida: '',
    frenagemBrusca: false,
    houveEfeitoDinamico: false,
    irregularidadeVia: false,

    irregularidadeViaTipo: '',
    choqueLocomotiva: false,
    choqueLocomotivaObs: '',
    operandoAdequadamente: false,
    operandoAdequadamenteJust: '',

    croquiAcidenteFeito: false,
    custosMateriais: '0.00',
    custosDeslocamento: '0.00',
    custosPessoal: '0.00',
    custosTotal: '0.00',
    condicaoTempoId: '',
    motivoRestricaoDesc: '',
    idInvestigador1: 0,
    idInvestigador2: 0
  });

  var radio_props = [
    { label: 'Não   ', value: false },
    { label: 'Sim', value: true }
  ];

  const requiredFields = (obj) => {
    toReturn = "";
    if (obj.investigador1 == '' || obj.idInvestigador1 == 0) {
      toReturn += "Investigador deve ser preenchido\n"
    }

    if (obj.idInvestigador1 != 0 && obj.idInvestigador1 == obj.idInvestigador2) {
      toReturn += "Investigador 1 igual ao Investigador 2\n"
    }

    if (obj.descricao == '' || obj.descricao == null) {
      toReturn += "Descrição deve ser preenchida.\n"
    }

    if (obj.dataInspecao == '') {
      toReturn += "Data inspeção deve ser preenchida.\n"
    }

    return toReturn;
  }

  const queixaFreio = useRef(null);
  const observandoComposicao = useRef(null);
  const restricaoVelocidade = useRef(null);
  const estavaSinalizado = useRef(null);
  const posicaoManipuladorFreio = useRef(null);
  const freioDinamico = useRef(null);
  const trafegoMaior = useRef(null);
  const frenagemBrusca = useRef(null);
  const houveEfeitoDinamico = useRef(null);
  const irregularidadeVia = useRef(null);
  const choqueLocomotiva = useRef(null);
  const operandoAdequadamente = useRef(null);
  const croquiAcidenteFeito = useRef(null);
  const [previousFormPicker, setPreviousFormPicker] = useState(undefined);


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

    await gravarLogLocal(getCurrentDate() + " - Limpando dados do formulário Dados da Operação.");
    await deleteFormByRoute(routes.dadosOperacao);
    await onStart();
    setDadosForm({
      ...dadosForm, idBoletim: '',
      investigador1: '',
      investigador2: '',
      dataInspecao: dateSelect.date2 + ' ' + dateSelect.selectedHours2 + ':' + dateSelect.selectedMinutes2,
      descricao: '',
      queixaFreio: false,
      observandoComposicao: false,
      vazamentoAr: '',
      gradiente: '',
      kmLocoComandante: '',
      kmPrimeiroVagaoDescarrilado: '',
      situacaoDosFreios: '',
      pecasSoltas: '',
      vagoesIsolados: false,
      torneiraAngularFechada: false,
      sapatasDesreguladas: false,
      blocosSemEmergencia: false,
      mixValvulas: false,
      sinaisTravas: false,
      freioManual: false,
      boletimTrem: false,
      cargaExcesso: false,
      rechego: false,
      primeiroVagaoAcidentado: '',
      r1d: false,
      r1e: false,
      r2d: false,
      r2e: false,
      r3d: false,
      r3e: false,
      r4d: false,
      r4e: false,
      condicaoTempo: '',
      vma: '',
      restricaoVelocidade: false,
      motivoRestricao: '',
      estavaSinalizado: false,
      tipoSinalizacao: '',
      observacao: '',
      posicaoManipuladorFreio: false,
      lbs: '',
      freioDinamico: false,

      posicaoAcelerador: '',
      quantidadeAmperes: '',

      trafegoMaior: false,
      velocidadePercebida: '',
      frenagemBrusca: false,
      houveEfeitoDinamico: false,
      irregularidadeVia: false,

      irregularidadeViaTipo: '',
      choqueLocomotiva: false,
      choqueLocomotivaObs: '',
      operandoAdequadamente: false,
      operandoAdequadamenteJust: '',

      croquiAcidenteFeito: false,
      custosMateriais: '0.00',
      custosDeslocamento: '0.00',
      custosPessoal: '0.00',
      custosTotal: '0.00',
      condicaoTempoId: '',
      motivoRestricaoDesc: '',
      idInvestigador1: 0,
      idInvestigador2: 0
    });

    
    setQueryDados1('');
    setResultQuery1([]);
    setWeatherValue('');
    setCreatedForm(undefined);
    setRestrictionReasonValue('');
    setQueryDados2('');
    setResultQuery2([]);
     queixaFreio = useRef(null);
     observandoComposicao = useRef(null);
     restricaoVelocidade = useRef(null);
     estavaSinalizado = useRef(null);
     posicaoManipuladorFreio = useRef(null);
     freioDinamico = useRef(null);
     trafegoMaior = useRef(null);
     frenagemBrusca = useRef(null);
     houveEfeitoDinamico = useRef(null);
     irregularidadeVia = useRef(null);
     choqueLocomotiva = useRef(null);
     operandoAdequadamente = useRef(null);
     croquiAcidenteFeito = useRef(null);
     setPreviousFormPicker(undefined);
     setDateSelect({ ...dateSelect, selectedHours2: 0, selectedMinutes2: 0 });
     timeSelect1 = useRef(null);
  }


  const onStart = async () => {

    const dbWeatherList = await getWeather();
    setWeatherList(dbWeatherList);
    const dbRestrictionReasonList = await getRestrictionReason();
    setRestrictionReasonList(dbRestrictionReasonList);
    const previousForm = await updateForms(routes.dadosOperacao);
    console.log('async2')
    if (previousForm) {
      setDadosForm(previousForm);
      setQueryDados1(previousForm.investigador1);
      setQueryDados2(previousForm.investigador2);
      setPreviousFormPicker({
        condicaoTempo: previousForm.condicaoTempo,
        condicaoTempoId: previousForm.condicaoTempoId,
        motivoRestricao: previousForm.motivoRestricao,
        motivoRestricaoDesc: previousForm.motivoRestricaoDesc
      });
      queixaFreio.current.setState({ is_active_index: previousForm.queixaFreio ? 1 : 0 });
      observandoComposicao.current.setState({ is_active_index: previousForm.observandoComposicao ? 1 : 0 });
      restricaoVelocidade.current.setState({ is_active_index: previousForm.restricaoVelocidade ? 1 : 0 });
      estavaSinalizado.current.setState({ is_active_index: previousForm.estavaSinalizado ? 1 : 0 });
      posicaoManipuladorFreio.current.setState({ is_active_index: previousForm.posicaoManipuladorFreio ? 1 : 0 });
      freioDinamico.current.setState({ is_active_index: previousForm.freioDinamico ? 1 : 0 });
      trafegoMaior.current.setState({ is_active_index: previousForm.trafegoMaior ? 1 : 0 });
      frenagemBrusca.current.setState({ is_active_index: previousForm.frenagemBrusca ? 1 : 0 });
      houveEfeitoDinamico.current.setState({ is_active_index: previousForm.houveEfeitoDinamico ? 1 : 0 });
      irregularidadeVia.current.setState({ is_active_index: previousForm.irregularidadeVia ? 1 : 0 });
      choqueLocomotiva.current.setState({ is_active_index: previousForm.choqueLocomotiva ? 1 : 0 });
      operandoAdequadamente.current.setState({ is_active_index: previousForm.operandoAdequadamente ? 1 : 0 });
      croquiAcidenteFeito.current.setState({ is_active_index: previousForm.croquiAcidenteFeito ? 1 : 0 });
      const dateHour = previousForm.dataInspecao.split(' ');
      const hourMinute = dateHour[1].split(':');
      timeSelect1.current.setState({ selectedHours: parseInt(hourMinute[0]), selectedMinutes: parseInt(hourMinute[1]) });
      setDateSelect({
        date1: previousForm.ultimaRevisao,
        date2: dateHour[0],
        selectedHours2: parseInt(hourMinute[0]),
        selectedMinutes2: parseInt(hourMinute[1])
      });
    } else {
      setCreatedForm(true);
    }
  }

  useEffect(() => {
    onStart();
  }, []);

  useEffect(() => {
    if (weatherList.length > 0 && previousFormPicker) {
      setWeatherValue(previousFormPicker.condicaoTempo);
      setDadosForm({ ...dadosForm, condicaoTempo: previousFormPicker.condicaoTempo, condicaoTempoId: previousFormPicker.condicaoTempoId });
    }
  }, [weatherList, previousFormPicker]);

  useEffect(() => {
    if (restrictionReasonList.length > 0 && previousFormPicker) {
      setRestrictionReasonValue(previousFormPicker.motivoRestricao);
      setDadosForm({ ...dadosForm, motivoRestricao: previousFormPicker.motivoRestricao, motivoRestricaoDesc: previousFormPicker.motivoRestricaoDesc });
    }
  }, [restrictionReasonList, previousFormPicker]);

  const km_mts = (val) => {
    const er = /[^+0-9]/g;
    er.lastIndex = 0;
    return val.replace(er, "");
  }

  const regex = /\+/gi;

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.backgroundDadosMecanica}>
      <ScrollView >

        <Text style={styles.titulo1}>Informações do Boletim</Text>
        <Text style={styles.titulo2}>Número do Boletim</Text>
        <TextInput keyboardType={'decimal-pad'} onChangeText={(e) => setDadosForm({ ...dadosForm, idBoletim: e })} value={dadosForm.idBoletim} style={styles.shortInput} />

        <Text style={styles.titulo2}>Maquinista: Queixou-se do Freio? </Text>
        <RadioForm
          ref={queixaFreio}
          radio_props={radio_props}
          initial={0}
          onPress={(e) => setDadosForm({ ...dadosForm, queixaFreio: e })}
          buttonSize={10}
          buttonOuterSize={20}
          formHorizontal={true}
          labelHorizontal={true}
          animation={false}
        />

        <Text style={styles.titulo2}>Auxiliar: Observando Composição? (Olhando com frequência para trás) </Text>
        <RadioForm
          ref={observandoComposicao}
          radio_props={radio_props}
          initial={0}
          onPress={(e) => setDadosForm({ ...dadosForm, observandoComposicao: e })}
          buttonSize={10}
          buttonOuterSize={20}
          formHorizontal={true}
          labelHorizontal={true}
          animation={false}
        />

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
                return (<View />)
              }
            }} />
        </View>

        <Text style={styles.titulo2}>Data *</Text>
        <DatePicker
          style={styles.date}
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
        <Text style={styles.titulo2}>Hora *</Text>
        <View style={styles.ViewTime}>
          <TimePicker
            ref={timeSelect1}
            onChange={(h, m) => {
              setDateSelect({ ...dateSelect, selectedHours2: h, selectedMinutes2: m });
              setDadosForm({ ...dadosForm, dataInspecao: dateSelect.date2 + ' ' + h + ':' + m });
            }} />
        </View>

        <Text style={styles.titulo2}>Descrição *</Text>
        <TextInput
          multiline={true}
          onChangeText={(e) => setDadosForm({ ...dadosForm, descricao: e })}
          value={dadosForm.descricao}
          style={styles.LongInput}
        />

        <Text style={styles.titulo1}>Identificação do acidente e anomalias no trem</Text>
        <View style={styles.container2}>

          <Text style={styles.titulo1}>2 - Formação:</Text>

          <Text style={styles.titulo2}>Vazamento de Ar (Ibs)</Text>
          <TextInput
            multiline={false}
            keyboardType='decimal-pad'
            onChangeText={(e) => setDadosForm({ ...dadosForm, vazamentoAr: e })}
            value={dadosForm.vazamentoAr}
            style={styles.shortInput}
            maxLength={22}
          />

          <Text style={styles.titulo2}>Gradiente(Ibs)</Text>
          <TextInput
            keyboardType='decimal-pad'
            multiline={false}
            onChangeText={(e) => setDadosForm({ ...dadosForm, gradiente: e })}
            value={dadosForm.gradiente}
            style={styles.shortInput}
            maxLength={22}
          />

          <Text style={styles.titulo1}>3 - Análise dos veículos parados após acidente</Text>

          <Text style={styles.titulo2}>Km + Mts da Loco Comandante</Text>
          <TextInput
            multiline={false}
            onChangeText={(e) => setDadosForm({ ...dadosForm, kmLocoComandante: km_mts(e) })}
            value={dadosForm.kmLocoComandante}
            style={styles.shortInput}
            maxLength={7}
          />

          <Text style={styles.titulo2}>Km + Mts do 1o. vagão descarrilado</Text>
          <TextInput
            multiline={true}
            maxLength={7}
            onChangeText={(e) => setDadosForm({ ...dadosForm, kmPrimeiroVagaoDescarrilado: km_mts(e) })}
            value={dadosForm.kmPrimeiroVagaoDescarrilado}
            style={styles.shortInput}
          />

          <Text style={styles.titulo2}>Situação dos Freios</Text>
          <View style={{borderWidth: 0.5}}>
            <Picker selectedValue={dadosForm.situacaoDosFreios} onValueChange={(e) => setDadosForm({ ...dadosForm, situacaoDosFreios: e })}>
              <Picker.Item label="Não Aplicado" value="Não Aplicado" />
              <Picker.Item label="Aplicado" value="Aplicado" />
            </Picker>
          </View>
          <Text style={styles.titulo2}>Peças soltas/arraste</Text>
          <TextInput
            multiline={false}
            onChangeText={(e) => setDadosForm({ ...dadosForm, pecasSoltas: e })}
            value={dadosForm.pecasSoltas}
            style={styles.shortInput}
            maxLength={20}
          />


          <Text style={styles.titulo1}>4 - Detalhes do trem (marcar para respostas SIM) </Text>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, vagoesIsolados: !dadosForm.vagoesIsolados })}
              isChecked={dadosForm.vagoesIsolados}
              leftText={"Vagões isolados em blocos"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, torneiraAngularFechada: !dadosForm.torneiraAngularFechada })}
              isChecked={dadosForm.torneiraAngularFechada}

              leftText={"Torneira angular fechada"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, sapatasDesreguladas: !dadosForm.sapatasDesreguladas })}
              isChecked={dadosForm.sapatasDesreguladas}
              leftText={"Sapatas desreguladas"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, blocosSemEmergencia: !dadosForm.blocosSemEmergencia })}
              isChecked={dadosForm.blocosSemEmergencia}

              leftText={"Blocos s/ val emergência"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, mixValvulas: !dadosForm.mixValvulas })}
              isChecked={dadosForm.mixValvulas}
              leftText={"Mix de válvulas de freios"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, sinaisTravas: !dadosForm.sinaisTravas })}
              isChecked={dadosForm.sinaisTravas}
              leftText={"Sinais de rodas travadas"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, freioManual: !dadosForm.freioManual })}
              isChecked={dadosForm.freioManual}
              leftText={"Freio manual apertado"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, boletimTrem: !dadosForm.boletimTrem })}
              isChecked={dadosForm.boletimTrem}
              leftText={"Boletim conforme o trem"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, cargaExcesso: !dadosForm.cargaExcesso })}
              isChecked={dadosForm.cargaExcesso}
              leftText={"Carga excêntrica/excesso"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, rechego: !dadosForm.rechego })}
              isChecked={dadosForm.rechego}
              leftText={"Rechego nos vagões"}
            />

            <Text style={styles.titulo1}>5 - Caracterização do acidente</Text>
            <Text style={styles.titulo2}>Primeiro veículo acidentado</Text>
            <TextInput
              multiline={false}
              onChangeText={(e) => setDadosForm({ ...dadosForm, primeiroVagaoAcidentado: e })}
              value={dadosForm.primeiroVagaoAcidentado}
              style={styles.shortInput}
              maxLength={10}
            />
            <Text style={styles.titulo2}>Primeiro rodeiro do veículo acidentado</Text>
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, r1d: !dadosForm.r1d })}
              isChecked={dadosForm.r1d}
              leftText={"R1D"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, r1e: !dadosForm.r1e })}
              isChecked={dadosForm.r1e}
              leftText={"R1E"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, r2d: !dadosForm.r2d })}
              isChecked={dadosForm.r2d}
              leftText={"R2D"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, r2e: !dadosForm.r2e })}
              isChecked={dadosForm.r2e}
              leftText={"R2E"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, r3d: !dadosForm.r3d })}
              isChecked={dadosForm.r3d}
              leftText={"R3D"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, r3e: !dadosForm.r3e })}
              isChecked={dadosForm.r3e}
              leftText={"R3E"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, r4d: !dadosForm.r4d })}
              isChecked={dadosForm.r4d}
              leftText={"R4D"}
            />
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => setDadosForm({ ...dadosForm, r4e: !dadosForm.r4e })}
              isChecked={dadosForm.r4e}
              leftText={"R4E"}
            />

            <Text style={styles.titulo2}>Condição do tempo na hora do acidente </Text>
            <View style={{borderWidth: 0.5, paddingBottom: 1}}>
              <Picker selectedValue={weatherValue}  onValueChange={(e) => {
                let idWeather = weatherList.find((x) => x.name == e)?.id;
                setDadosForm({ ...dadosForm, condicaoTempo: e, condicaoTempoId: idWeather ? idWeather : "" });
                setWeatherValue(e);
              }}>
                {
                  [<Picker.Item key={0}  label={"selecionar"} value={""} />].concat(
                    weatherList.map((weather, index) => {
                      return <Picker.Item key={index + 1} style={styles.picker} label={weather.name} value={weather.name} />;
                    })
                  )
                }
              </Picker>
            </View>

            <Text style={styles.titulo1}>6 - Velocidade</Text>
            <Text style={styles.titulo2}>VMA km/h</Text>
            <TextInput
              multiline={false}
              onChangeText={(e) => setDadosForm({ ...dadosForm, vma: e })}
              value={dadosForm.vma}
              style={styles.shortInput}
              maxLength={20}
              keyboardType='decimal-pad'
            />
            <Text style={styles.titulo2}>Restrição de Velocidade</Text>
            <RadioForm
              ref={restricaoVelocidade}
              radio_props={radio_props}
              initial={0}
              onPress={(e) => setDadosForm({ ...dadosForm, restricaoVelocidade: e })}
              buttonSize={10}
              buttonOuterSize={20}
              formHorizontal={true}
              labelHorizontal={true}
              animation={false}
            />
            <Text style={styles.titulo2}>Motivo da restrição</Text>
            <View style={{borderWidth: 0.5}}>
              <Picker selectedValue={restrictionReasonValue} style={styles.picker} onValueChange={(e) => {
                let descRestrictionReason = restrictionReasonList.find((x) => x.id == e)?.desc;
                setDadosForm({ ...dadosForm, motivoRestricao: e, motivoRestricaoDesc: descRestrictionReason ? descRestrictionReason : "" });
                setRestrictionReasonValue(e);
              }}>
                {
                  [<Picker.Item key={0} style={styles.picker} label={"selecionar"} value={""} />].concat(
                    restrictionReasonList.map((restrictionReason, index) => {
                      return <Picker.Item key={index + 1} style={styles.picker} label={restrictionReason.desc} value={restrictionReason.id} />;
                    })
                  )
                }
              </Picker>
            </View>
            <Text style={styles.titulo2}>Estava sinalizado</Text>
            <RadioForm
              ref={estavaSinalizado}
              radio_props={radio_props}
              initial={0}
              onPress={(e) => setDadosForm({ ...dadosForm, estavaSinalizado: e })}
              buttonSize={10}
              buttonOuterSize={20}
              formHorizontal={true}
              labelHorizontal={true}
              animation={false}
            />
            <Text style={styles.titulo2}>Tipo</Text>
            <TextInput
              onChangeText={(e) => setDadosForm({ ...dadosForm, tipoSinalizacao: e })}
              value={dadosForm.tipoSinalizacao}
              style={styles.shortInput}
              maxLength={120}
            />
            <Text style={styles.titulo2}>Observações</Text>
            <TextInput
              multiline={true}
              onChangeText={(e) => setDadosForm({ ...dadosForm, observacao: e })}
              value={dadosForm.observacao}
              style={styles.LongInput}
            />

            <Text style={styles.titulo1}>7 - Custos do acidente</Text>
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

            <Text style={styles.titulo1}>8 - Momento do acidente</Text>
            <Text style={styles.titulo2}>Posição manipulador do freio automático aplicado</Text>
            <RadioForm
              ref={posicaoManipuladorFreio}
              radio_props={radio_props}
              initial={0}
              onPress={(e) => setDadosForm({ ...dadosForm, posicaoManipuladorFreio: e })}
              buttonSize={10}
              buttonOuterSize={20}
              formHorizontal={true}
              labelHorizontal={true}
              animation={false}
            />
            <Text style={styles.titulo2}>LBS</Text>
            <TextInput keyboardType='numeric'
              multiline={false}
              onChangeText={(e) => setDadosForm({ ...dadosForm, lbs: e })}
              value={dadosForm.lbs}
              style={styles.shortInput}
            />
            <Text style={styles.titulo2}>Posição do acelerador</Text>
            <View style={{width: 150, borderWidth: 0.5}}>
              <Picker selectedValue={dadosForm.posicaoAcelerador} style={styles.picker} onValueChange={(e) => setDadosForm({ ...dadosForm, posicaoAcelerador: e })}>
                <Picker.Item style={styles.picker} label="0" value="0" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
              </Picker>
            </View>
            <Text style={styles.titulo2}>Freio dinâmico aplicado</Text>
            <RadioForm
              ref={freioDinamico}
              radio_props={radio_props}
              initial={0}
              onPress={(e) => setDadosForm({ ...dadosForm, freioDinamico: e })}
              buttonSize={10}
              buttonOuterSize={20}
              formHorizontal={true}
              labelHorizontal={true}
              animation={false}
            />
            <Text style={styles.titulo2}>Quantidade de amperes</Text>
            <TextInput keyboardType='numeric'
              multiline={false}
              onChangeText={(e) => setDadosForm({ ...dadosForm, quantidadeAmperes: e })}
              value={dadosForm.quantidadeAmperes}
              style={styles.shortInput}
            />
            <Text style={styles.titulo2}>Tráfego maior em um dos sentidos</Text>
            <RadioForm
              ref={trafegoMaior}
              radio_props={radio_props}
              initial={0}
              onPress={(e) => setDadosForm({ ...dadosForm, trafegoMaior: e })}
              buttonSize={10}
              buttonOuterSize={20}
              formHorizontal={true}
              labelHorizontal={true}
              animation={false}
            />
          </View>
          <Text style={styles.titulo2}>Velocidade do trem percebida pelo maquinista</Text>
          <TextInput keyboardType='numeric'
            multiline={false}
            onChangeText={(e) => setDadosForm({ ...dadosForm, velocidadePercebida: e })}
            value={dadosForm.velocidadePercebida}
            style={styles.shortInput}
          />
          <Text style={styles.titulo2}>Houve frenagem brusca?</Text>
          <RadioForm
            ref={frenagemBrusca}
            radio_props={radio_props}
            initial={0}
            onPress={(e) => setDadosForm({ ...dadosForm, frenagemBrusca: e })}
            buttonSize={10}
            buttonOuterSize={20}
            formHorizontal={true}
            labelHorizontal={true}
            animation={false}
          />
          <Text style={styles.titulo2}>Houve efeito dinâmico do movimento do trem com os trilhos em temperatura alta ?</Text>
          <RadioForm
            ref={houveEfeitoDinamico}
            radio_props={radio_props}
            initial={0}
            onPress={(e) => setDadosForm({ ...dadosForm, houveEfeitoDinamico: e })}
            buttonSize={10}
            buttonOuterSize={20}
            formHorizontal={true}
            labelHorizontal={true}
            animation={false}
          />

          <Text style={styles.titulo1}>9 - Percepção do maquinista</Text>
          <Text style={styles.titulo2}>Irregularidades na via?</Text>
          <RadioForm
            ref={irregularidadeVia}
            radio_props={radio_props}
            initial={0}
            onPress={(e) => setDadosForm({ ...dadosForm, irregularidadeVia: e })}
            buttonSize={10}
            buttonOuterSize={20}
            formHorizontal={true}
            labelHorizontal={true}
            animation={false}
          />
          <Text style={styles.titulo2}>Tipo</Text>
          <TextInput
            multiline={true}
            onChangeText={(e) => setDadosForm({ ...dadosForm, irregularidadeViaTipo: e })}
            value={dadosForm.irregularidadeViaTipo}
            style={styles.LongInput}
          />
          <Text style={styles.titulo2}>Choque na Locomotiva?</Text>
          <RadioForm
            ref={choqueLocomotiva}
            radio_props={radio_props}
            initial={0}
            onPress={(e) => setDadosForm({ ...dadosForm, choqueLocomotiva: e })}
            buttonSize={10}
            buttonOuterSize={20}
            formHorizontal={true}
            labelHorizontal={true}
            animation={false}
          />
          <Text style={styles.titulo2}>Observações</Text>
          <TextInput
            multiline={true}
            onChangeText={(e) => setDadosForm({ ...dadosForm, choqueLocomotivaObs: e })}
            value={dadosForm.choqueLocomotivaObs}
            style={styles.LongInput}
          />
          <Text style={styles.titulo2}>Pela avaliação do maquinista, todas as locomotivas estavam operando adequadamente?</Text>
          <RadioForm
            ref={operandoAdequadamente}
            radio_props={radio_props}
            initial={0}
            onPress={(e) => setDadosForm({ ...dadosForm, operandoAdequadamente: e })}
            buttonSize={10}
            buttonOuterSize={20}
            formHorizontal={true}
            labelHorizontal={true}
            animation={false}
          />
          <Text style={styles.titulo2}>Justificativa</Text>
          <TextInput
            multiline={true}
            onChangeText={(e) => setDadosForm({ ...dadosForm, operandoAdequadamenteJust: e })}
            value={dadosForm.operandoAdequadamenteJust}
            style={styles.LongInput}
          />

          <Text style={styles.titulo1}>Croqui do acidente foi feito?</Text>
          <RadioForm
            ref={croquiAcidenteFeito}
            radio_props={radio_props}
            initial={0}
            onPress={(e) => setDadosForm({ ...dadosForm, croquiAcidenteFeito: e })}
            buttonSize={10}
            buttonOuterSize={20}
            formHorizontal={true}
            labelHorizontal={true}
            animation={false}
          />

          <View>
            <SendForm json={JSON.parse(JSON.stringify(dadosForm).replace(regex, "**"))}
              req={requiredFields} callback={props.navigation.goBack}
              route={routes.dadosOperacao}
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

