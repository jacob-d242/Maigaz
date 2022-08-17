import React from 'react';
import {
  Text, View,
} from 'react-native';
import Splash from './src/screens/auth/Splash';
import AuthNavigation from './src/navigation/AuthNavigator'
export default function App (){
  return (
     <AuthNavigation/>
  );
};
