import React from 'react'
import { SafeAreaView, View, StyleSheet,Text, ScrollView, TouchableOpacity} from 'react-native'
import { COLORS } from '../../constants/Index'
import ProductCard from './components/ProductCard'
import SearchBar from './components/SearchBar'

export default function Shop() {
    return (
        <TouchableOpacity
                    >
            <SearchBar />
            <View style={{alignItems:'center'}}>
                <Text style={styles.text}>Order Online </Text>
                <Text style={styles.text}>We Collect &  Deliver </Text>
            </View>       
            <View style={{flexDirection:'row'}}>
                <ProductCard />
               
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {
        fontFamily: "Inter-Bold",
        fontSize: 18,
        color:COLORS.primary
    }
})