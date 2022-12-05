import React, { useState,useEffect } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, IMAGES } from '../../../constants/Index'
import gasData from '../../../assets/data/data'
export default function ProductCard(){ 
    return (
        <ScrollView
            
        >
            <View style={styles.cartProduct}>
            {
                gasData.map((product) => (
                    <Text key={product.id}/>
                ))
            }
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
    </ScrollView>
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