import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../../components/Input';
import { COLORS } from '../../constants/Index';
import { useSelector } from 'react-redux';
export default function ProductAdd({ navigation }) {
    const { user } = useSelector(state => state.user);
    const [formData, setFormData] = useState({ vendor: '', kg: '', price: '', location: '' });
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false);
    const addProduct = () => {
       // console.log(formData);
        if (!formData.vendor) return setError("Enter Gas Vendor");
        if (!formData.kg) return setError("Enter gas size");
        if (!formData.price) return setError("Enter gas price");
        if (!formData.location) return setError("Enter shop location");
        try {
            firestore()
        .collection('product')
            .add({
                formData,
                //user:user.uid,
                AddTime: firestore.Timestamp.fromDate(new Date())
            })
                .then(() => {
                setLoading(true);
            console.log("added succesfully",formData)
            })
        } catch (error) {
           console.log(error) 
        }
    }
    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >
            <KeyboardAvoidingView
             behavior={Platform.OS === 'ios' ? "padding" : "height"}>
                <Icon
                    name="close-circle"
                    size={40}
                    style={styles.closeCircle}
                    onPress={() => navigation.goBack()}
                />
                <View style={styles.container}>
                    <Text style={{ fontFamily: 'Inter-Bold', fontSize: 18, marginTop: 10 }}>Add a new Product Below</Text>
                    <Input
                        label="Product Name"
                        placeholder="Product Name"
                        value={formData.vendor}
                        onChangeText={text => setFormData({ ...formData, vendor: text })}
                    />
                    <Input
                        label="Product Quantity"
                        placeholder="Product Quantity"
                        value={formData.kg}
                        onChangeText={text => setFormData({ ...formData, kg: text })}
                    />
                    <Input
                        label="Product Price"
                        placeholder="Price"
                        value={formData.price}
                        onChangeText={text => setFormData({ ...formData, price: text })}
                    />
                    <Input
                        label="Store adress"
                        placeholder="Store Physical Location"
                        value={formData.location}
                        onChangeText={text => setFormData({ ...formData, location: text })}
                    />
                    <View style={{ alignItems: 'center', marginTop: 15 }}>
                        <Text style={{ fontFamily: 'Inter-Regular', fontSize: 17 }}>Click Below to Upload Image</Text>
                        <Icon
                            name="file-upload"
                            size={100}
                            style={{ color: COLORS.lightPrimary }}
                        />
                    </View>
                    <Text style={{color:'red',fontSize:15}}>{error }</Text>
                    <TouchableOpacity
                        onPress={addProduct}
                        style={styles.btn}>
                        <Text style={styles.btntxt}>Upload</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        paddingBottom: 10
    },
    closeCircle: {
        color: COLORS.lightPrimary,
        margin: 5,
    },
    btn: {
        borderRadius: 24,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        backgroundColor: COLORS.primary,
        marginTop: 10,
    },
    btntxt: {
        color: '#FFF',
        fontSize: 26,
        fontFamily: 'Inter-Bold'
    }

})