import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import {
    Keyboard,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native'
import Fontisto from "react-native-vector-icons/Fontisto";
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { useDispatch } from 'react-redux';
import Input from './components/Input'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Button from '../../components/Button'
import { COLORS } from '../../constants/Index'

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const loginUser = ()=>{
        Keyboard.dismiss();
        setLoading(true);
        auth()
            .signInWithEmailAndPassword(formData.email, formData.password)
            .then((data) => {
                console.log('User created succesfully & signed in', data);
                fetchUserDetails(data.user.uid);
            })
            .catch((err) => {
                setLoading(false);
                switch (err.code) { 
                    case 'auth/invalid':
                        return setError('Invalid Email Address')
                    case 'auth/email-already-in-use':
                        return setError('Email already in use')
                    case 'auth/user-not-found':
                        return setError('User not found')
                    case 'auth/invalid-password':
                        return setError('Invalid Password')
                    case 'auth/wrong-password':
                        return setError('Invalid Password')
                    default:
                        return console.error(err);
                }
            });
        
    }
    const fetchUserDetails = () => {
        firestore().collection('Users').get()
            .then(querySnapshot => {
                let productData = [];
                let user;
                querySnapshot.forEach(documentSnapShot => {
                    productData.push(documentSnapShot.data())
                })
                //if (productData) {
                //    user = productData.find(data => data.uid === uid)
                //}
                dispatch({ type: "AUTHENTICATION",payload:user })
        })
    }
    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
            >
                    <View style={{ alignItems: 'center' }}>
                    <Text style={styles.title}>Welcome Back {"\n"}Enter Details To Login</Text>
                    </View>
                
                <View style={{ alignItems: 'center' }}>
                    
                            <Input
                                icon="user"
                                placeholder="Enter Your Phone or Email "
                                onChangeText={text => setFormData({ ...formData, email: text })}
                            />
                            <Input
                                icon="lock"
                                placeholder="Enter Your password"
                                onChangeText={text => setFormData({ ...formData, password: text })}
                            />
                    <Text style={{ color:'red',fontSize:15}}>{error}</Text>
                </View>
                
                        <View style={{ alignItems: 'center' }}>
                            <Button
                                title={loading ? 'LoggingIn...' : 'Login'}
                                style={styles.btn}
                                 onPress={loginUser}
                            />
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.pass}>Forgot Password ?</Text>
                                <Text
                                    onPress={() => navigation.navigate('ResetPassword')}
                                    style={styles.reset}>Reset</Text>
                            </View>
                            <Text style={{ fontSize: 22, fontFamily: 'Inter-Bold', color: COLORS.lightSecondary }}>Or</Text>
                            <View style={{ flexDirection: "row", alignItems: 'center',marginTop:5}}>
                                <TouchableOpacity style={styles.social}>
                                    <Fontisto name="facebook" size={30} color="blue" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.social}>
                                    <Fontisto name="google" size={30} color="blue" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.pass}>Dont have an Account?</Text>
                                <Text
                                    onPress={() => navigation.navigate('SignUp')}
                                    style={styles.reset}>Signup</Text>
                            </View>

                        </View>
                   
               
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
       // paddingHorizontal:20,
    },
    title: {
        alignItems: 'center',
        color: '#111',
        fontSize: 30,
        fontFamily: 'Inter-Bold'
    },
    btn: {
        fontSize: 24,
        color: "#FFFF",
    },
    text: {
        fontSize: 18,
        fontFamily: 'Inter-Regular',
        //marginTop: 20,
        color: COLORS.lightSecondary,
    },
    login: {
        //marginTop: 20,
        color: COLORS.primary,
        fontSize: 20,
        fontFamily: 'Inter-Bold',
    },
    pass: {
        padding: 8,
        fontSize: 18,
        fontFamily: 'Inter-Regular',
        color: COLORS.lightSecondary,
    },
    reset: {
        padding: 8,
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