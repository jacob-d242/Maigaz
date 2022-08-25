import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS,IMAGES } from '../../../constants/Index'
export default function CartProduct() {
    return (
        <View style={styles.cartProduct}>
            <Image
                resizeMode="contain"
                source={IMAGES.gas}
                style={styles.image}
            />
            <View style={{ alignItems: 'center',justifyContent: 'space-evenly',marginHorizontal:10}}>
                <View style={styles.topcont}>
                    <View>
                        <Text>13 Kg Gas Cylinder</Text>
                        <Text>Ksh 2000</Text>
                    </View>
                        <Icon
                            name="heart-plus-outline"
                            size={28}
                            style={styles.heart}
                        />
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Text style={styles.quantity}>Quantity</Text>
                    <Text style={styles.text1}>-</Text>
                    <Text style={styles.text}>1</Text>
                    <Text style={styles.text1}>+</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartProduct: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        flexDirection: 'row',
        height: 130,
    },
    topcont: {
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    quantity: {
        fontSize: 13,
        
    },
    heart: {
        color:COLORS.primary
    },
    text1: {
        backgroundColor: COLORS.lightPrimary,
        color:'#fff',
        fontSize: 20,
        borderWidth: 0.2,
        justifyContent: 'space-between',
        height: 30,
        width: 35
    },
    image: {
        height: '100%',
        }
})