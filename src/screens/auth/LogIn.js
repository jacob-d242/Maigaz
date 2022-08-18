import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import Fontisto from "react-native-vector-icons/Fontisto";
import Button from '../../components/Button'
import Header from '../../components/Header'
import { COLORS } from '../../constants/Index'
import Input from './components/Input'

export default function Login({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
                    <Header
                        Title="Login"
                    />
                    <View style={ {alignItems: 'center'}}>                    
                        <Text style={styles.title}>Enter Details To Login</Text>
                   </View>
            <ScrollView
                contentContainerStyle={{
                    paddingTop: 20,  
                    justifyContent:'space-around'
                }}
            >
                <View style={ {alignItems: 'center',marginTop:20,paddingTop:30}}>
                <Input
                        label="Phone Number or Email"
                        iconName="account"
                        placeholder="Enter Your Phone or Email "
                    />
                    <Input
                        label="Phone Number or Email"
                        iconName="lock-outline"
                        placeholder="Enter Your password" 
                        password
                    />
                </View>
                <View style={{ alignItems: 'center',marginTop: 50}}>
                    <Button
                        title="Login"
                        style={styles.btn}
                    />
                    <View style={{ alignItems: 'center',flexDirection: 'row',justifyContent: 'space-between' }}>
                        <Text style={styles.pass}>Forgot Password ?</Text>
                        <Text
                            onPress={()=>navigation.navigate('ResetPassword')}
                            style={styles.reset}>Reset</Text>
                    </View>
                    <Text style={{fontSize:22,fontFamily:'Inter-Bold',color:COLORS.lightSecondary}}>Or</Text>
                    <View style={{ flexDirection: "row",alignItems: 'center',marginTop:20 }}>
                        <TouchableOpacity style={styles.social}>
                            <Fontisto name="facebook" size={30} color="blue" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.social}>
                            <Fontisto name="google" size={30} color="blue" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center',flexDirection: 'row',justifyContent: 'space-between' }}>
                        <Text style={styles.pass}>Dont have an Account?</Text>
                        <Text
                            onPress={()=>navigation.navigate('SignUp')}
                            style={styles.reset}>Signup</Text>
                    </View>
                 
                </View>
            </ScrollView>
        </SafeAreaView>

       
    )
}

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        color: '#111',
        fontSize: 19,
        fontFamily: 'Inter-Medium'
    },
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
    },
    pass: {
        padding:8,
        fontSize: 18,
        fontFamily: 'Inter-Regular',
        color: COLORS.lightSecondary,
    },
    reset: {
        padding:8,
        fontSize: 18,
        fontFamily: 'Inter-Bold',
        color: COLORS.primary,
    },
    social: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        borderRadius: 20,
        marginHorizontal: 5
    }
})