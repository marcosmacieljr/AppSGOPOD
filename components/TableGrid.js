import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles/styles';

export default function () {    

    return (

        <View style={styles.tablePODMedicoes1}>
            <View style={styles.tablePODMedicoesRow1}>
                <Text style={styles.tableGridPODCol1}>Estaca</Text>
                <Text style={styles.tableGridPODCol1}>Cada</Text>
                <Text style={styles.tableGridPODCol1}>Metro</Text>
            </View>
            <View style={styles.tablePODMedicoesRow2}>
                <Text style={styles.tableGridPODCol1}>Bitola</Text>
                <Text style={styles.tableGridPODCol1}>Passeio</Text>
                <Text style={styles.tableGridPODCol1}>mm</Text>
            </View>
            <View style={styles.tablePODMedicoesRow2}>
                <Text style={styles.tableGridPODCol1}>Variação</Text>
                <Text style={styles.tableGridPODCol1}>Bitola</Text>
                <Text style={styles.tableGridPODCol1}>Base 5m</Text>
            </View>
            <View style={styles.tablePODMedicoesRow2}>
                <Text style={styles.tableGridPODCol1}>Super</Text>
                <Text style={styles.tableGridPODCol1}>Elevação</Text>
                <Text style={styles.tableGridPODCol1}>Recalque</Text>
            </View>
            <View style={styles.tablePODMedicoesRow2}>
                <Text style={styles.tableGridPODCol1}>Empeno</Text>
                <Text style={styles.tableGridPODCol1}>Base</Text>
                <Text style={styles.tableGridPODCol1}>Base 2m</Text>
            </View>
            <View style={styles.tablePODMedicoesRow2}>
                <Text style={styles.tableGridPODCol1}>Empeno</Text>
                <Text style={styles.tableGridPODCol1}>Base</Text>
                <Text style={styles.tableGridPODCol1}>Base 10m</Text>
            </View>
            <View style={styles.tablePODMedicoesRow2}>
                <Text style={styles.tableGridPODCol1}>Flecha</Text>
                <Text style={styles.tableGridPODCol1}>Medida</Text>
                <Text style={styles.tableGridPODCol1}>mm</Text>
            </View>
            <View style={styles.tablePODMedicoesRow2}>
                <Text style={styles.tableGridPODCol1}>Variação</Text>
                <Text style={styles.tableGridPODCol1}>Flecha</Text>
                <Text style={styles.tableGridPODCol1}>Base 3m</Text>
            </View>
        </View>

    )
}