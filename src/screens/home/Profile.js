import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import Header from '../../components/Header'
import { COLORS } from '../../constants/Index';
export default function Profile() {
    return ( 
        <View style={ { backgroundColor: '#E5E5E5'}}>
            <Header
            />
            <Text style={styles.textHeader}>
                My Profile
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        marginLeft: 20,
        fontSize: 34,
        color: COLORS.lightSecondary,
        fontFamily:'Inter-Bold'
    }
})