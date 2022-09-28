import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AnimatedLottieView from 'lottie-react-native';
import {COLORS,IMAGES,ANIMES} from '../../constants/Index'
import Icon from 'react-native-vector-icons/EvilIcons';
export default function HomeScreen({navigation}) {
    return ( 
        <SafeAreaView style={styles.topcontainer}>
            <Text style={styles.texts}>Hi Moracha 👋</Text>
            <Text style={styles.texts}>Ni Maji ama ni gas</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Maps')}
                style={{ alignItems: 'center', flexDirection: 'row', marginTop: 4, padding: 5 }}>
                <Icon
                    name="location"
                    size={30}
                    color={COLORS.primary}
                />
                <Text style={styles.location}>Mtwapa</Text>
            </TouchableOpacity>
            <AnimatedLottieView
                style={styles.animation}
                source={ANIMES.way}
                autoPlay loop
            />
           
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntitle}>Shop Now</Text>
                </TouchableOpacity>
          
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    topcontainer: {
        //marginTop: 10,
        alignItems: "center",
    },
    animation: {
        marginTop:30,
        width: 400,
        height: 400,
        color: COLORS.lightSecondary,
        
    },
    texts: {
        fontSize: 28,
        color: COLORS.primary,
        fontFamily: "Inter-Bold",
        margin:5,
    },
    btn: {
        marginTop:30,
        width: "70%",
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        alignItems: "center"
    },
    btntitle: {
        fontFamily: "Inter-Bold",
        fontSize: 35,
        color: '#fff'
    },
    location: {
        fontSize: 14,
        marginLeft: 15,
        fontFamily: "Inter-Bold",
        color: COLORS.primary
    }
})