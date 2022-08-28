import AnimatedLottieView from 'lottie-react-native'
import React from 'react'
import {StyleSheet, Text, View } from 'react-native'
import Button from '../../../components/Button'
import { ANIMES, COLORS } from '../../../constants/Index'
export default function NoFavourite() {
    return ( 

        <View style={{ alignItems: 'center',justifyContent: 'space-evenly',margin:20}}>
            <AnimatedLottieView
                resizeMode="contain"
                source={ANIMES.empty}
                style={styles.anime}
                autoPlay loop
            />
            <Text style={styles.texts}>You Have No Favourites</Text>
            <Text style={styles.texts}>Click Below to Start An new Order</Text>
            <Button
                title="Create Order"
                style={styles.orderButton}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        marginTop: 20,
    },
    orderButton: {
        fontSize: 24,
        color: '#ffff',
        fontFamily: 'Inter-Bold'
    },
    texts: {
        marginBottom: 15,
        fontSize: 18,
        color: COLORS.lightSecondary,
        fontFamily: 'Inter-Medium',
    },
    anime: {
        height: 400,
        width: 400,
    }
})