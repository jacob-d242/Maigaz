import React from 'react'
import { SafeAreaView, View, StyleSheet,Text} from 'react-native'
import { COLORS } from '../../constants/Index'
import CartProduct from './components/CartProduct'
import ProductCard from './components/ProductCard'

import SearchBar from './components/SearchBar'
import SwipeScroll from './components/Water'

export default function Shop() {
    return (
        <SafeAreaView>
            <SearchBar />
            <View style={{alignItems:'center'}}>
                <Text style={styles.text}>Order Online </Text>
                <Text style={styles.text}>We Collect &  Deliver </Text>
            </View>       
            <View>
               <ProductCard/>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    text: {
        fontFamily: "Inter-Bold",
        fontSize: 18,
        color:COLORS.primary
    }
})