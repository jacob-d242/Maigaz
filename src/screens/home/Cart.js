import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header'
import { COLORS } from '../../constants/Index';
import CartProduct from './components/CartProduct';
export default function Cart() {
    return ( 
        <View>
            <Header
                Title="Basket"
            />
            <View>
                
            </View>
            <View style={styles.offer}>
                <Icon name="bell" size={20} />
                <Text style={{fontSize: 18,color: '#111',}}>
                    Free Delivery For orders Above 100</Text>
            </View>
            <View style={{margin:20}}>
                <CartProduct/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    offer: {
        marginTop: 10,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal:30,
        borderRadius:8,
        backgroundColor:'#D3F2FF'
        
    }
})