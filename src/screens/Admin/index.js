import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import { COLORS } from '../../constants/Index';
import Cards from './components/Cards'
import Orders from './components/Orders';
export default function Dashboard() {
    return (
        <View style={{flex:1}}>
            <Header Title='Admin Dashboard' />
            <View style={{flexDirection:'row'}}>
                <Cards
                    items="users"
                    total={20}
                />
                 <Cards
                    items="Orders"
                    total={20}
                />
                 <Cards
                    items="Delivered"
                    total={20}
                />                
            </View>
            <View style={styles.container}>
                <Orders/>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        backgroundColor: COLORS.primary
   }

})