import React, { useState, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';
import { styles } from '../styles/styles';

export function Message (props) {
	const [message, setMessage] = useState(undefined);
	const [fadeAnim] = useState(new Animated.Value(1));

	useEffect(() => {
		setMessage(props.message);
		if (props.message) {
			Animated.timing(fadeAnim, {
				toValue: 0, 
				duration: 5 * 1000,
				useNativeDriver: true
			}).start(({ finished }) => {if (finished) {
				setMessage(undefined);
				fadeAnim.setValue(1);
				props.callback();
			}});
		}
	}, [props.message]);

	return (
		<Animated.View style={{opacity: fadeAnim}}>
    		<View>
        	    {(message) ? <Text style={styles.messageText}>{message}</Text> : <Text/>}
        	</View>
        </Animated.View>
    );
}