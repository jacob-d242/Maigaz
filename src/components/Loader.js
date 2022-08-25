import React from 'react';
import { Text } from 'react-native';
import { ActivityIndicator, StyleSheet, useWindowDimensions, View } from 'react-native';
import { COLORS } from '../constants/Index';

export default function  Loader ({ visible = true }) {
    const { height, width } = useWindowDimensions();
    return visible &&
        <View style={[styles.Container,{height,width}]} >
            <View style={styles.loader}>
                <ActivityIndicator size="large" color={COLORS.secondary} />
                <Text style={{marginLeft:30,fontSize:18, color:COLORS.secondary,fontFamily:'Poppins-Regular'}}>Loading...</Text>
            </View>
        </View>
    
}

const styles = StyleSheet.create({
    Container: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
    },
    loader: {
        height: 70,
        backgroundColor: COLORS.white,
        marginHorizontal: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    }
})