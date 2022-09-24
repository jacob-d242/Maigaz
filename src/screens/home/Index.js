import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AnimatedLottieView from 'lottie-react-native';
import {COLORS,IMAGES,ANIMES} from '../../constants/Index'
export default function HomeScreen() {
    return ( 
        <SafeAreaView style={styles.topcontainer}>
            <Text style={styles.texts}>Ni Maji ama ni gas</Text>
            <AnimatedLottieView
                style={styles.animation}
                source={ANIMES.way}
                autoPlay loop
            />
            <View>
                
            </View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    topcontainer: {
        marginTop: 20,
        alignItems: "center",
    },
    animation: {
        marginTop:30,
        width: 400,
        height: 400,
        color: COLORS.lightSecondary
    },
    texts: {
        fontSize: 28,
        color: COLORS.primary,
        fontFamily: "Inter-Bold",
        marginTop:15,
    }
})