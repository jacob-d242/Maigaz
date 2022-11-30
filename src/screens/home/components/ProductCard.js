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
            <View style={{ alignItems: 'center', justifyContent: 'space-evenly', width: 500 }}>
                        <SelectList
                               dropdownStyles={{position:'relative'}}
                                setSelected={setBrand}
                                data={vendor}
                                
                                placeholder='Select Type of Gas '
                                arrowicon={<Icon name="chevron-down" size={22} color={'black'} />} 
                                search={false} 
                                boxStyles={{ borderRadius: 8, width:300, height: 45 ,margin:10}} 
                                inputStyles={{ color: '#111', fontSize: 14 }}
                            />
                            
                            <SelectList
                                dropdownStyles={{position:'relative',width:250}}
                                setSelected={setCategory}
                                data={categories}
                                
                                placeholder='Select  Size (KG)'
                                arrowicon={<Icon name="chevron-down" size={22} color={'black'} />} 
                                search={false} 
                                boxStyles={{ borderRadius: 8, width:300, height: 45 ,margin:10}} 
                                inputStyles={{ color: '#111', fontSize: 14 }}
                            />
              
                            
                
                            <SelectList
                                dropdownStyles={{position:'absolute'}}
                                setSelected={setSubCategory}
                                data={subCategories[category]}
                               
                                placeholder='Gas Vendor'
                                arrowicon={<Icon name="chevron-down" size={22} color={'black'} />} 
                                search={false} 
                                boxStyles={{ borderRadius: 8, width: 300, height: 45 }} 
                                inputStyles={{ color: '#111', fontSize: 14 }}
                            />         
                
            </View>
            <TouchableOpacity style={styles.btn}
                onPress={orderHandler}
            >
                <Text style={{fontSize:28,color:"#FFF",fontWeight:'Inter-Bold'}}>Next</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    cartProduct: {
        backgroundColor: '#FFF',
        borderRadius: 35,
        flexDirection: 'column',
        height: 350,
        alignItems: 'center',
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
        height: '30%',
        width: '40%'
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