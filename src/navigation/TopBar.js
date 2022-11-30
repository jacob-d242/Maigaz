import React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Shop from '../screens/home/Shop'
import { COLORS } from '../constants/Index';
function FeedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

export default function TopBar() {
    const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
    initialRouteName="Shop"
    screenOptions={{
      tabBarActiveTintColor: COLORS.primary,
      tabBarLabelStyle: { fontSize: 16 ,fontFamily:'Inter-Bold' },
      tabBarStyle: { backgroundColor: COLORS.secondary },
    }}
  >
    <Tab.Screen
      name="Shop"
      component={Shop}
      options={{ tabBarLabel: 'Hot Deals' }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{ tabBarLabel: 'Gas' }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ tabBarLabel: 'Water' }}
    />
  </Tab.Navigator>
  )
}
