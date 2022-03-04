import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles/styles';

export default function () {

    const [dadosAtual, setDadosAtual] = useState({
		key: 0,
		estacaCadaMetro: 2,
		bitolaPasseioPOD: 0,
		variacaoBitolaBase5POD: 0,
		superelevacaoRecalquePOD: 0,
		empenoBase2POD: 0,
		empenoBase10POD: 0,
		flechaMedidaPOD: 0,
		variacaoFlechaBase3POD: 0
	});	

    return (

        <View style={styles.tablePODMedicoes}>
            <View style={styles.tablePODMedicoesRow1}>
                <Text style={styles.tablePODCol1}>{dadosAtual.estacaCadaMetro}</Text>
            </View>
            <View  style={styles.tablePODMedicoesRow3}>
            <TextInput 
                    keyboardType='numeric'
                    onChangeText = {(e) => setDadosAtual({ ...dadosAtual, bitolaPasseioPOD: e })}
                    value={dadosAtual.bitolaPasseioPOD}
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
                    onChangeText = {(e) => setDadosAtual({ ...dadosAtual, superelevacaoRecalquePOD: e })} value={dadosAtual.superelevacaoRecalquePOD} 
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
                    onChangeText = {(e) => setDadosAtual({ ...dadosAtual, flechaMedidaPOD: e })}
                    value={dadosAtual.flechaMedidaPOD} 
                    multiline={false} 
                    style={styles.tablePODIntputEditable}

                />
            </View>							
            <View style={styles.tablePODMedicoesRow5}>		
                <Text style={styles.tablePODCol1}></Text>
            </View>
        </View>

        

    )
}