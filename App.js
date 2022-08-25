import React from 'react';
import {
  Text, View,
} from 'react-native';
import Splash from './src/screens/auth/Splash';
import AuthNavigation from './src/navigation/AuthNavigator'
import RootNavigation from './src/navigation/RootNavigation';
export default function App (){
  return (
     <RootNavigation/>
  );
};
