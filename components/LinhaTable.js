import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles/styles';

export default function (props) {    

    return (

        <View style={styles.tablePODMedicoes}>
                <View style={styles.tablePODMedicoesRow1}>
                    <Text style={styles.tablePODCol1}>{props.estacaCadaMetro}</Text>
                </View>
                <View  style={styles.tablePODMedicoesRow3}>
                    <TextInput 
                        keyboardType='numeric'
                        onChangeText = {(e) => setPod({ ...pod, bitolaPasseioPOD1: e })}
                        value={pod.bitolaPasseioPOD1}
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
                        onChangeText = {(e) => setPod({ ...pod, superelevacaoRecalquePOD1: e })} 
                        value={pod.superelevacaoRecalquePOD1} 
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
                        onChangeText = {(e) => setPod({ ...pod, flechaMedidaPOD1: e })}
                        value={pod.flechaMedidaPOD} 
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