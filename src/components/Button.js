import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/Index';

export default function Button({style,title,onPress}) {
    return ( 
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}>
            <Text style={styles.text, style}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        alignItems: "center",
        width: '60%',
        height: 50,
        borderWidth: 1,
        borderRadius:25,
        borderColor: COLORS.primary,
        padding:5
    },
    text: {
        fontSize: 26,
        color: '#fff'
    }
})