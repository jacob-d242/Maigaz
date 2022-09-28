import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import {COLORS} from '../../constants/Index'
export default function Splash({navigation}) {
    return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.maititle }>MAIGAZ</Text>
                <Text style={styles.mainvision}>Your Number One option for Gas and Water</Text>
                <Button
                    onPress={() => navigation.navigate('SignUp')}
                    title ="Get Started"
                    style={styles.button}
                />                
            </SafeAreaView>
        
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        
    },
    maititle: {
        marginTop: '40%', 
        fontSize: 64,
        fontFamily:'Inter-Bold',
        color:COLORS.primary
    },
    mainvision: {
        fontFamily:'Inter-Medium',
        fontSize: 17,
        marginVertical: '20%',
        color:COLORS.lightSecondary
    },
    button: {
        fontSize: 28,
        color: '#fff',
        fontFamily:'Inter-Medium',
    }
})