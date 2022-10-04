
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AuthNavigation from "./AuthNavigator";
import MainNavigation from "./MainNavigation";



export default function RootNavigation () {
    const user = useSelector(state => state.user);
    return (
        <NavigationContainer>
            {user.isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
            {/*<AuthNavigation />*/}
            {/*<MainNavigation/>*/}
        </NavigationContainer>
    )
}