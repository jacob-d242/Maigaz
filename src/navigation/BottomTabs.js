import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import  Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/home/Index';
import Favourites from '../screens/home/Favourites'
import Cart from '../screens/home/Cart';
import Profile from '../screens/home/Profile'
import {COLORS} from '../constants/Index'
import DashNavigation from './DashNavigation';

const Tab = createBottomTabNavigator();
export default function BottomTabs() {
    let size = 35;
    return ( 
       
           <Tab.Navigator 
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#BCD9D1",
                    tabBarHideOnKeyboard:true,
                    tabBarInactiveTintColor: "#CDCDCD",
                    tabBarIcon: ({ focused }) => {
                    switch (route.name) {
                        case "Home":
                        return (
                            <Icon
                                name="home"
                                size={size}
                                color={focused ? COLORS.primary : "#ccc"}
                            />
                        );
                        case "Favourites":
                        return (
                            <Icon
                                name="cards-heart-outline"
                                size={size}
                                color={focused ? COLORS.primary : "#ccc"}
                            />
                            )
                            //case "Cart":
                            //    return (
                            //    <Icon
                            //        name="basket"
                            //        size={size}
                            //        color={focused ? COLORS.primary : "#ccc"}
                            //    />
                            //    )
                                case "Profile":
                                    return (
                                    <Icon
                                        name="account"
                                        size={size}
                                        color={focused ? COLORS.primary : "#ccc"}
                                    />
                                    )
                        default:
                        return null;
                    }}
                })}
                >
            <Tab.Screen name="Home" component={DashNavigation} />
            <Tab.Screen name="Favourites" component={Favourites} />   
            {/*<Tab.Screen name="Cart" component={Cart} />*/}
            <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
       
    )
}