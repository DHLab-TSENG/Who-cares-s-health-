import React from 'react';
import { TextInput, View , Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inpoutStyle, labelStyle, containerStyle } =styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              autoCorrect={false}
              style={inpoutStyle}
              value={value}
              onChangeText={onChangeText}
              
            />
        </View>
    );
};

const styles = {
    inpoutStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 14,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 14,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 30,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
