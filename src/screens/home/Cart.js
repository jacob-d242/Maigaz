import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header'
import Button from '../../components/Button'
import { COLORS } from '../../constants/Index';
import CartProduct from './components/CartProduct';
export default function Cart({navigation}) {
    return ( 
        <SafeAreaView style={{alignItems:'center'}}>
            <Header
                Title="Basket"
                onPress={() => navigation.goBack()}
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
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:28,color:"#FFF",fontWeight:'Inter-Bold'}}>Order</Text>
            </TouchableOpacity>
        </SafeAreaView>
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
        
    },
    btn: {
        //marginTop: 10,
        fontSize: 22,
        color: '#FFF',
        height: 45,
        //borderWidth: 1,
        borderRadius: 13,
        backgroundColor:COLORS.primary,
        width: '70%',
        alignItems:'center',
    }
})