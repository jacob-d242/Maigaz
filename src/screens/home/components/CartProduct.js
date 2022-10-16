import React, { useState,useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import NumericInput from 'react-native-numeric-input'
import { COLORS, IMAGES } from '../../../constants/Index'
import firestore  from '@react-native-firebase/firestore'
export default function CartProduct() {
    const [loading, setLoading] = useState(true);
    const [gas,setGas] = useState([]);
    const users = firestore().collection('Users').get();
    useEffect(() => {
        const Products = firestore()
            .collection('Products')
            .onSnapshot(() => {
                const gas = [];
                querySnapshot.forEach(documentSnapshot => {
                    gas.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setGas(gas);
                setLoading(false);
            })
        return () => gas();
     }, [])
    return (
        <View style={styles.cartProduct}>
            <Image
                resizeMode="contain"
                source={IMAGES.gas}
                style={styles.image}
            />
            <View style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                <View style={styles.topcont}>
                    <View style={{padding:20}}>
                        <Text style={styles.productdtl}>Product:</Text>
                        <Text style={styles.productdtl}>Price:</Text>
                        <Text style={styles.productdtl}>Vendor:</Text>
                        <Text style={styles.productdtl}>Delivery</Text>
                        <Text style={styles.productdtl}>Total Price:</Text>
                        <Text style={styles.productdtl}>Quantity:</Text>
                    </View>
                    <View style={{padding:20}}>
                        <Text style={styles.productdtl}>Gas Cylinder</Text>
                        <Text style={styles.productdtl}>1800</Text>
                        <Text style={styles.productdtl}>Sea Gas</Text>
                        <Text style={styles.productdtl}>200</Text>
                        <Text style={styles.productdtl}>Ksh 2000</Text>
                        <Text style={styles.productdtl}>
                        <NumericInput                       
                            totalWidth={120}
                            totalHeight={28}
                            rounded
                            rightButtonBackgroundColor={COLORS.primary}
                            leftButtonBackgroundColor={COLORS.primary}
                            textColor='#111'
                            editable={false}
                         />
                        </Text>
                    </View>

                </View>
              
                    
                
            </View>
            {/*<View style={styles.favourite}>
                <Icon
                    name="heart-plus-outline"
                    size={28}
                    style={styles.heart}
                />
            </View>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    cartProduct: {
        backgroundColor: '#FFF',
        borderRadius: 35,
        flexDirection: 'column',
        height: 420,
        alignItems: 'center',
    },
    topcont: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    quantity: {
        fontSize: 13,

    },
    heart: {
        color: COLORS.primary
    },
    image: {
        height: '50%',
        width: '40%'
    },
    favourite:{
        marginTop: 10,
        
    },
    productdtl: {
        fontSize: 18,
        margin: 2,
        fontFamily:"Inter-Bold"
    }
})