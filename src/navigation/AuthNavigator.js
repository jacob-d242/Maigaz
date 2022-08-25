import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';  
import { NativeScreenNavigationContainer } from 'react-native-screens';
import Splash from '../screens/auth/Splash';
import Login from '../screens/auth/LogIn';  
import SignUp from '../screens/auth/SignUp';
import ResetPass from '../screens/auth/ResetPass';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();
export default  function AuthNavigation(){
    return(
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="OnBoarding" component={Splash} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ResetPassword" component={ResetPass}/>
            </Stack.Navigator>
    )
}