import React, { useState,useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import NumericInput from 'react-native-numeric-input'
import { COLORS, IMAGES } from '../../../constants/Index'
import SelectList from 'react-native-dropdown-select-list'
import firestore  from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'
export default function ProductCard() {
    const [selected, setSelected] = useState({brand:'',category:'',subcategory:''});
    const [formData,setFormData] = useState();
    const [category, setCategory] = useState();
    const [subcategory, setSubCategory] = useState();
    const [brand,setBrand] = useState();
    const navigation = useNavigation();
    const vendor = [
        { key :'SA' , value :'SeaGas'},
        { key :'TT' , value :'Total'},
        { key :'MP' , value :'Mpishi'},
    ]
    const categories = [
        { key :'A' , value :'6'},
        { key :'B' , value :'8'},
        { key :'C' , value :'12'},
        { key :'D' , value :'15'},
        { key :'E' , value :'16'}
    ]
    const subCategories = {
        "A": [{ key: '1', value: '1200' }],
        "B": [{ key: '2', value: '1800' }],
        "C": [{ key: '3', value: '3200' }],
        "D": [{ key: '4', value: '3800' }],
        "E": [{ key: '5', value: '4800' }],
    }
    const orderHandler = () => {
        console.log(selected)
       {navigation.navigate('OrderAdress',{formData:selected})}
    }
    return (
        <View style={styles.cartProduct}>
            <Image
                resizeMode="contain"
                source={IMAGES.gas}
                style={styles.image}
            />
            <View>
                <Text>13 Kg Gas Clylinder</Text>
           </View>
            {/*<TouchableOpacity style={styles.btn}
                onPress={orderHandler}
            >
                <Text style={{fontSize:28,color:"#FFF",fontWeight:'Inter-Bold'}}>Next</Text>
            </TouchableOpacity>*/}
            
        </View>
    )
}

const styles = StyleSheet.create({
    cartProduct: {
        backgroundColor: '#FFF',
        borderRadius: 35,
        flexDirection: 'column',
        height: 350,
        width:'80%',
        alignItems: 'center',
        marginHorizontal:'10%'
    },
    topcont: {
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    quantity: {
        fontSize: 13,

    },
    image: {
        height: '40%',
        width: '100%'
    },
    btn: {
        marginTop: 60,
        fontSize: 22,
        color: '#FFF',
        height: 45,
        //borderWidth: 1,
        borderRadius: 13,
        backgroundColor:COLORS.primary,
        width: '40%',
        alignItems:'center',
    }
})