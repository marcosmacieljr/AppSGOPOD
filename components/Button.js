import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../styles/styles';

export function ButtonP (props) {
	const [isLoading, setLoading] = useState(false);
    let mounted = true;

	const onPressButton = async () => {
		setLoading(true);
		await props.onPress(callback);
    };

    const callback = async () => {
        setLoading(false);
    }

	if(isLoading){
		return (
    	    <ActivityIndicator size="large" color="#0174DF" />
    	);
    } else {
    	return (
    	    <Button styles={styles.buttonP} title={props.title} onPress={onPressButton} />
    	);
    }
}

export function ButtonG (props) {
	return (
    	<TouchableOpacity onPress={props.onPress}>
    		<View style={styles.buttonView}>
    			<Text style={styles.buttonG}>{props.title}</Text>
    		</View>
    	</TouchableOpacity>
    );
}

export function ButtonAnteriorPOD (props) {
	return (
    	<TouchableOpacity onPress={props.onPress}>
    		<View style={styles.buttonAnteriorPOD}>
    			<Text style={styles.buttonG}>{props.title}</Text>
    		</View>
    	</TouchableOpacity>
    );
}

export function ButtonPosteriorPOD (props) {
	return (
    	<TouchableOpacity onPress={props.onPress}>
    		<View style={styles.buttonPosteriorPOD}>
    			<Text style={styles.buttonG}>{props.title}</Text>
    		</View>
    	</TouchableOpacity>
    );
}