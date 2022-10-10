import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import  Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button'
import { COLORS } from '../../constants/Index'
import Input from './components/Input'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
export default function SignUp() {
    const [formData, setFormData] = useState({email: "", password: ""})
    const [isLoading, setIsLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const createAccount = () => {
        Keyboard.dismiss()
        if(formData.password !== confirmPassword) return setError("Passwords do not match")
        setIsLoading(true)
        auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(data => {
            saveUserToDb(data.user)
        })
        .catch(error => {
            setIsLoading(false)
            if (error.code === 'auth/email-already-in-use') {
                setError('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                setError('That email address is invalid!');
            }

            console.error(error);
        });
    }

    const saveUserToDb = response => { 
       // const role = route?.params
        const userDetails = { email: formData.email, password: formData.password,  uid: response.uid }
        firestore().collection("Users").add(userDetails)
            .then(() => {
                console.log("Successfully added")
                dispatch({ type: "AUTHENTICATION" , payload: userDetails })
                    
        })
        .catch(error => console.error(error))
    }



    return ( 
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
                <KeyboardAvoidingView
                    style={styles.cont}
                    behavior={Platform.OS === 'ios' ? "padding" : "height" }
                >
        
                <View style={ {alignItems: 'center'}}>                    
                     <Text style={{alignItems: 'center', color: '#111', fontSize: 22,fontFamily:'Inter-Bold' }}>Fill in Form to Register</Text>
               </View>
                    <View style={{ alignItems: 'center', }}>
                    <Text style={styles.error}>{error }</Text>
                    <Input
                        icon="phone" 
                        placeholder="Enter your email address" 
                            onChangeText={text => setFormData({ ...formData, email: text })}
                        />
                    <Input
                        label="Password"
                        icon="lock"
                        placeholder="Enter Your Password"
                        onChangeText={text => setFormData({ ...formData, password: text })}
                    />
                     <Input
                        label="confirmPassword"
                        icon="lock"
                        placeholder=" Confirm  Your Password"
                        onChangeText={text => setConfirmPassword(text)}
                        onSubmitEditing={createAccount}
                    />
                   
                    
                </View>
                <View style={{ alignItems: 'center',marginTop:20}}>
                    <Button
                        style={styles.btn}
                        title={isLoading ? "SIGNING UP .." : "SIGN UP"}
                        //title={SignUp}
                        onPress={createAccount}
                    />
                    <Text style={styles.text}>Already have an account</Text>
                    <Text style={styles.login} onPress={()=>navigation.navigate('Login')}>SignIn</Text>
                    </View>
                    </KeyboardAvoidingView>
            </SafeAreaView>
            </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    cont: {
        flex: 1,
        //backgroundColor: COLORS.primary,
        //paddingHorizontal: "20@ms",
        justifyContent: "space-evenly"
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
    error: {
        fontFamily: "Inter-Medium",
        color: "red",
        //fontSize: "14",
        textAlign: "center"
    }
})