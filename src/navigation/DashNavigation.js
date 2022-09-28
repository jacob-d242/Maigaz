import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/Index"
import ProductAdd from "../screens/Seller/ProductAdd";
import MapView from "../screens/home/components/MapView";

const Stack = createNativeStackNavigator();

export default function DashNavigation () {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeComponent" component={HomeScreen}/>
            <Stack.Screen name="addProduct" component={ProductAdd} />
            <Stack.Screen name="Maps" component={MapView} />
            <Tab.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    )
}