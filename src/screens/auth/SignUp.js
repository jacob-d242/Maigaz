import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/Button'
import Header from '../../components/Header'
import { COLORS } from '../../constants/Index'
import Input from './components/Input'
export default function SignUp({navigation}) {
    return ( 
        
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <Header
                
                Title="Sign Up"
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
                        label="Name"
                        iconName="account"
                        placeholder="Enter Your Name"
                    />
                    <Input
                        label="Phone Number"
                        iconName="phone-outline"
                        placeholder="Enter Your Phone Number"
                    />
                    <Input
                        label="Email"
                        iconName="email-outline"
                        placeholder="Enter Your Name"
                    />
                    <Input
                        label="Password"
                        iconName="lock-outline"
                        placeholder="Enter Your Password"
                        password
                    />
                </View>
                <View style={{ alignItems: 'center',marginTop:50}}>
                    <Button
                        style={styles.btn}
                        title="Sign Up"
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