import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/Index"
import ProductAdd from "../screens/Seller/ProductAdd";
import MapView from "../screens/home/components/MapView";
import Cart from "../screens/home/Cart";
import DeliverAdress from '../screens/home/components/DeliverAdress'
import TopBar from "./TopBar";
const Stack = createNativeStackNavigator();

export default function DashNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeComponent" component={HomeScreen} />
            <Stack.Screen name="addProduct" component={ProductAdd} />
            <Stack.Screen name="Maps" component={MapView} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="OrderAdress" component={DeliverAdress} />
            <Stack.Screen name="Shop" component={TopBar} />
        </Stack.Navigator>
    )
}