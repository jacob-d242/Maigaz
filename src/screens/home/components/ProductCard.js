import React, { useState,useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, IMAGES } from '../../../constants/Index'
export default function ProductCard(){ 
return (
        <View style={styles.cartProduct}>
            <Image
                resizeMode="contain"
                source={IMAGES.gas}
                style={styles.image}
            />
            <View>
                <Text>13 Kg Gas Clylinder</Text>
           </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    cartProduct: {
        backgroundColor: '#FFF',
        borderRadius: 35,
        flexDirection: 'column',
        height: 250,
        width:150,
        alignItems: 'center',
        marginHorizontal:'10%'
    },
    topcont: {
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    quantity: {
        fontSize: 13,

    },
    image: {
        height: '40%',
        width: '100%'
    },
    btn: {
        marginTop: 60,
        fontSize: 22,
        color: '#FFF',
        height: 45,
        borderRadius: 13,
        backgroundColor:COLORS.primary,
        width: '40%',
        alignItems:'center',
    }
})