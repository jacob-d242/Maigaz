import React from 'react'
import { SafeAreaView, View, StyleSheet,Text} from 'react-native'
import Product from './components/Product'
import SearchBar from './components/SearchBar'
import SwipeScroll from './components/SwipeScroll'

export default function Shop() {
    return (
        <SafeAreaView>
            <SearchBar />
            <View>
                <Text>Order Online </Text>
                <Text>We Collect &  Deliver </Text>
            </View>
            <SwipeScroll/>
            <Product />
        </SafeAreaView>
    )
}


const style = StyleSheet.create({

})