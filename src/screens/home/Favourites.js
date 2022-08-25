import React from 'react'
import { Image, Text, View,StyleSheet } from "react-native";
import { COLORS, IMAGES } from "../../constants/Index"
import Header from "../../components/Header"
import NoFavourite from './components/NoFav';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Favourites() {
    return ( 
        <SafeAreaView>
            
           <NoFavourite/>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
   
})