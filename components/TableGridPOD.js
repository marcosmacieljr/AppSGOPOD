import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

export default function (props) {   

    console.log(props)
    return (
        <View style={{ paddingTop: 20 }} >

            <View style={styles.tablePODMedicoes1}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tableGridPODCol1}></Text>
                    <Text style={styles.tableGridPODCol1}></Text>
                    <Text style={styles.tableGridPODCol1}></Text>
                </View>
                <View style={styles.tablePODMedicoesRow2}>
                    <Text style={styles.tableGridPODCol1}>Bitola</Text>
                    <Text style={styles.tableGridPODCol1}>Fechada</Text>
                    <Text style={styles.tableGridPODCol1}>menor ou =</Text>
                </View>
                <View style={styles.tablePODMedicoesRow2}>
                    <Text style={styles.tableGridPODCol1}>Bitola</Text>
                    <Text style={styles.tableGridPODCol1}>Aberta</Text>
                    <Text style={styles.tableGridPODCol1}>maior ou =</Text>
                </View>
                <View style={styles.tablePODMedicoesRow2}>
                    <Text style={styles.tableGridPODCol1}>Variação</Text>
                    <Text style={styles.tableGridPODCol1}>Bitola 5m</Text>
                    <Text style={styles.tableGridPODCol1}>maior ou =</Text>
                </View>
                <View style={styles.tablePODMedicoesRow2}>
                    <Text style={styles.tableGridPODCol1}>{props.tipoCurvaOuTangente == 'curva' ? 'Super' : 'Desniv.'}</Text>
                    <Text style={styles.tableGridPODCol1}>{props.tipoCurvaOuTangente == 'curva' ? 'Elevação' : 'Transv.'}</Text>
                    <Text style={styles.tableGridPODCol1}>maior ou =</Text>
                </View>
                <View style={styles.tablePODMedicoesRow2}>
                    <Text style={styles.tableGridPODCol1}>Empeno</Text>
                    <Text style={styles.tableGridPODCol1}>Base 2m</Text>
                    <Text style={styles.tableGridPODCol1}>maior ou =</Text>
                </View>
                <View style={styles.tablePODMedicoesRow2}>
                    <Text style={styles.tableGridPODCol1}>Empeno</Text>
                    <Text style={styles.tableGridPODCol1}>Base 10m</Text>
                    <Text style={styles.tableGridPODCol1}>maior ou =</Text>
                </View>
                <View style={styles.tablePODMedicoesRow2}>
                    <Text style={styles.tableGridPODCol1}>Variação</Text>
                    <Text style={styles.tableGridPODCol1}>Flecha 3m</Text>
                    <Text style={styles.tableGridPODCol1}>maior ou =</Text>
                </View>

            </View>

            <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>Valor</Text>
                </View>
                <View style={styles.tablePODMedicoesRow4}>
                    <Text style={styles.tablePODCol1}>982</Text>
                </View>
                <View style={styles.tablePODMedicoesRow4}>
                    <Text style={styles.tablePODCol1}>1034</Text>
                </View>
                <View style={styles.tablePODMedicoesRow4}>
                    <Text style={styles.tablePODCol1}>{props.tipoClasse == 1 ? '40' : '30'}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow4}>
                    <Text style={styles.tablePODCol1}>100</Text>
                </View>
                <View style={styles.tablePODMedicoesRow4}>
                    <Text style={styles.tablePODCol1}>{props.tipoClasse == 2 && props.tipoCurvaOuTangente  == 'curva' ? '18' : (props.tipoClasse == 2 && props.tipoCurvaOuTangente  == 'tangente') ? '34' : (props.tipoClasse == 1 && props.tipoCurvaOuTangente  == 'curva') ? '14' : (props.tipoClasse == 1 && props.tipoCurvaOuTangente  == 'tangente') ? '47' : ''}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow4}>
                    <Text style={styles.tablePODCol1}>{props.tipoClasse == 1 ? '53' : '37'}</Text>
                </View>
                <View style={styles.tablePODMedicoesRow4}>
                <Text style={styles.tablePODCol1}>{props.tipoClasse == 1 ? '37' : '29'}</Text>
                </View>
            </View>

        </View>
    )
}
