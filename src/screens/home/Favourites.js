import React from 'react'
import { Image, Text, View,StyleSheet } from "react-native";
import { COLORS, IMAGES } from "../../constants/Index"
import Header from "../../components/Header"
import NoFavourite from './components/NoFav';
export default function Favourites() {
    return ( 
        <View>
            <Header/>
           <NoFavourite/>
        </View>
    )
}


const styles = StyleSheet.create({
   
})