import React, {useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles/styles';




const TableG = () => {

    const [dadosPOD, setDadosPOD] = useState({
        limiteSegClassePOD: false,
        bitolaPasseioPOD: '0',
        variacaoBitolaBase5POD: '0',
        superelevacaoRecalquePOD: '0',
        empenoBase2POD: '0',
        empenoBase10POD: '0',
        flechaMedidaPOD: '0',
        variacaoFlechaBase3POD: '0'
    });

    const exibirConsoleLog = () => console.log(dadosPOD);

    const [array, setArray] = useState(
        [
            {
                key: '0',
                title: '0',
                bitolaPasseioPOD: dadosPOD.bitolaPasseioPOD,
                variacaoBitolaBase5POD: '0',
                superelevacaoRecalquePOD: '0',
                empenoBase2POD: '0',
                empenoBase10POD: '0',
                flechaMedidaPOD: '0',
                variacaoFlechaBase3POD: '0',
            },
            {
                key: '1',
                title: '1',
                bitolaPasseioPOD: '0',
                variacaoBitolaBase5POD: '0',
                superelevacaoRecalquePOD: '0',
                empenoBase2POD: '0',
                empenoBase10POD: '0',
                flechaMedidaPOD: '0',
                variacaoFlechaBase3POD: '0',
            },            
        ]) ;

    const list = () => {
        return array.map((element) => {
            return (

                    <View style={styles.tablePODMedicoes}>			
                        <View key={element.key} style={styles.tablePODMedicoesRow1}>
                            <Text style={styles.tablePODCol1}>{element.title}</Text>
                        </View>
                        <View style={styles.tablePODMedicoesRow3}>
                            <TextInput 
                                keyboardType = 'numeric'
                                style ={styles.tablePODIntputEditable}
                                editable = {true}
                                value = {element.bitolaPasseioPOD}
                                onChangeText = {(e) => setArray({ ...element, bitolaPasseioPOD: e})}
                                
                            />
                        </View>
                        <View style={styles.tablePODMedicoesRow3}>				
                            <TextInput 
                                keyboardType='numeric'
                                style={styles.tablePODIntput3}
                                editable = {false}
                                value = {element.variacaoBitolaBase5POD}
                                onChangeText = {(e) => setArray({ ...element, variacaoBitolaBase5POD: e })}

                            />							
                        </View>
                        <View style={styles.tablePODMedicoesRow3}>
                            <TextInput 
                                keyboardType='numeric'
                                style={styles.tablePODIntputEditable}
                                editable = {true}
                                value = {element.superelevacaoRecalquePOD}
                                onChangeText = {(e) => setArray({ ...element, superelevacaoRecalquePOD: e })}

                            />
                        </View>
                        <View style={styles.tablePODMedicoesRow3}>
                            <TextInput 
                                keyboardType='numeric'
                                style={styles.tablePODIntput3}
                                editable = {false}
                                value = {element.empenoBase2POD}
                                onChangeText = {(e) => setArray({ ...element, empenoBase2POD: e })}

                            />
                        </View>
                        <View style={styles.tablePODMedicoesRow3}>
                            <TextInput 
                                keyboardType='numeric'
                                style={styles.tablePODIntput3}
                                editable = {false}
                                value = {element.empenoBase10POD}
                                onChangeText = {(e) => setArray({ ...element, empenoBase10POD: e })}

                            />
                        </View>
                        <View style={styles.tablePODMedicoesRow3}>
                            <TextInput 
                                keyboardType='numeric'
                                style={styles.tablePODIntputEditable}
                                editable = {true}
                                value = {element.flechaMedidaPOD}
                                onChangeText = {(e) => setArray({ ...element, flechaMedidaPOD: e })}

                            />
                        </View>
                        <View style={styles.tablePODMedicoesRow3}>
                            <TextInput 
                                keyboardType='numeric'
                                style={styles.tablePODIntput3}
                                editable = {false}
                                value = {element.variacaoFlechaBase3POD}
                                onChangeText = {(e) => setArray({ ...element, variacaoFlechaBase3POD: e })}

                            />
                        </View>

                    </View>
            );

        });
    };

    return <View>{list()}</View>
};

export default TableG;
