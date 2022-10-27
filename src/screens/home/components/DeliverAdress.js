import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Dimensions, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Input from '../../../components/Input';
import { COLORS } from '../../../constants/Index';
export default function DeliverAdress() {
    const [formData, setFormData] = useState({ location: "", street: '', phone: '' });
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const route = useRoute();
   // const { gasData } = route.params;
    const handleSubmit=()=>{
        if (!formData.location) return setError("Invalid Delivery Adress")
        if (!formData.street) return setError("Invalid Delivery Street")
        if (!formData.phone) return setError("Invalid phoneNumber")
    }

    return (
        <KeyboardAvoidingView
            style={styles.main}
            behavior={Platform.OS === "ios" ? "padding" : "height" }
        >
                <View style={styles.cont}>
                <Text style={{ fontSize: 28, color: "#111", fontWeight: 'Inter-Bold', margin: 20 }}>Delivery Adress</Text>
                <Input
                    placeholder='Your Location'
                    onChangeText={text => setFormData({ ...formData, location: text })}
                />
                <Input
                    placeholder='Street Name'
                    onChangeText={text => setFormData({ ...formData, street: text })}
                />
                <Input
                    placeholder='Phone number'
                    onChangeText={text => setFormData({ ...formData, phone: text })}
                    keyboardType={"number-pad"}
                />
                <Text>{console.log(route.params.formData)}</Text>
                <Text style={styles.err}>{error}</Text>
                <TouchableOpacity style={styles.btn}
                    onPress={handleSubmit}
                >
                    <Text style={{ fontSize: 28, color: "#FFF", fontWeight: 'Inter-Bold' }}>Order Now</Text>
                    </TouchableOpacity>
                    </View>
        </KeyboardAvoidingView>
    )
}
const { height } = Dimensions.get("screen");
const styles = ScaledSheet.create({
    main: {
        flex: 1,
        //backgroundColor: COLORS.primary,
    },
    cont: {
        alignItems: 'center',        
        justifyContent: 'center',
        margin: 12,
        marginTop:10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        height: '100%'
    },
    btn: {
        marginTop: 25,
        fontSize: 22,
        color: '#FFF',
        height: 45,
        //borderWidth: 1,
        borderRadius: 13,
        backgroundColor: COLORS.primary,
        width: '70%',
        alignItems: 'center',
    },
    err: {
        color: 'red',
        fontSize: 18,
    }

})