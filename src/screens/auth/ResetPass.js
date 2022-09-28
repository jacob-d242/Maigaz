import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/Button'
import Header from '../../components/Header'
import { COLORS } from '../../constants/Index'
import Input from './components/Input'
export default function ResetPass({navigation}) {
    return ( 
        
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <Header                
                Title="Forgot Password"
            />
        <ScrollView
            contentContainerStyle={{
                paddingTop: 20,
                //paddingHorizontal: 20,
                
            }}
            >
                <View style={ {alignItems: 'center'}}>                    
                     <Text style={{alignItems: 'center', color: '#111', fontSize: 18 }}>Fill in Form to Register</Text>
               </View>
                <View style={{ alignItems:'center',}}>
                    <Input
                        label="Phone Number"
                        iconName="phone-outline"
                        placeholder="Enter Your Phone Number"
                    />
                    <Input
                        label="Password"
                        iconName="lock-outline"
                        placeholder="Enter Your Password"
                        password
                    />
                     <Input
                        label="Confirm Password"
                        iconName="lock-outline"
                        placeholder="Enter Your Password"
                        password
                    />
                </View>
                <View style={{ alignItems: 'center',marginTop:50}}>
                    <Button
                        style={styles.btn}
                        title="Reset"
                    />
                    <Text style={styles.text}>Already have an account</Text>
                    <Text style={styles.login} onPress={()=>navigation.navigate('Login')}>SignIn</Text>
                </View>
        </ScrollView>
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    btn: {
        fontSize: 24,
        color: "#FFFF",
    },
    text: {
        fontSize: 18,
        fontFamily: 'Inter-Regular',
        marginTop: 20,
        color: COLORS.lightSecondary,
    },
    login: {
        marginTop: 20,
        color: COLORS.primary,
        fontSize: 20,
        fontFamily: 'Inter-Bold',
    }
})