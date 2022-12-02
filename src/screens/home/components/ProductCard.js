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
            <View style={{alignItems: 'center',marginTop:-20}}>
            <Text>13 Kg Gas Clylinder</Text>
            <Text>Kshs 1200</Text>
           </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    cartProduct: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        flexDirection: 'column',
        height: 200,
        width:150,
        alignItems: 'center',
        marginTop:'10%'
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
        height:150,
        width: '100%',
        bottom:50
    }
})