import React, { useState } from 'react'
import { Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/Button'
import Header from '../../components/Header'
import { COLORS } from '../../constants/Index'
import Input from './components/Input'
import Auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
export default function SignUp() {
    const [formData, setFormData] = useState({email: "", password: ""})
    const [isLoading, setIsLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const createAccount = () =>{
        Keyboard.dismiss()
        if (formData.password !== confirmPassword) return setError("Passwords do not match")
        setIsLoading(true)
        Auth()
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then((data) => {
                saveUserToDb(data.user)
            })
            .catch(error => {
                setIsLoading(false)
                if (error.code === 'auth/email-already-in-use') {
                    setError("Email Already In Use!");
                }
                if (error.code === 'auth/invalid-email') {
                    setError("Invalid Email!");
                }
                console.log(error);
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
                    {/*<Input
                        label="Name"
                        iconName="account"
                        placeholder="Enter Your Name"
                        onChange={text => setFormData({ ...formData, name: text})}
                    />*/}
                    {/*<Input
                        label="Phone Number"
                        iconName="phone-outline"
                        placeholder="Enter Your Phone Number"
                        onChange={(text) => setFormData({ ...formData, phone: text })}
                    />*/}
                    <Input
                        label="Email"
                        iconName="email-outline"
                        placeholder="Enter Your Email Address"
                        onChange={(text) => setFormData({ ...formData, email: text })}
                    />
                    <Input
                        label="Password"
                        iconName="lock-outline"
                        placeholder="Enter Your Password"
                        password
                        onChange={(text) => setFormData({ ...formData, password: text })}
                    />
                     <Input
                        label="confirmPassword"
                        iconName="lock-outline"
                        placeholder=" Confirm  Your Password"
                        password
                        onChange={(text) => setConfirmPassword(text)}
                        //error={setError}
                    />
                    
                </View>
                <View style={{ alignItems: 'center',marginTop:50}}>
                    <Button
                        style={styles.btn}
                        title={isLoading ? "SIGNING UP .." : "SIGN UP"}
                        //title={SignUp}
                        onPress={createAccount}
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