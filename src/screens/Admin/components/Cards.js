import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {COLORS} from '../../../constants/Index'
export default function Cards({items,total,onPress}) {
    return (
        <View style={{alignItems:'center',justifyContent:'space-evenly'}}>
                <TouchableOpacity onPress={onPress} style={styles.cont}>
                    <Text style={styles.context}>{items}</Text>
                    <Text style={styles.context}>{total}</Text>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: COLORS.primary,
        margin: 4,
        width: 120,
        height: 90,
        borderRadius:10,

    },
    context: {
        fontSize: 18,
        color:'#FFF'
    }
})