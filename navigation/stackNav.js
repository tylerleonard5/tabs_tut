import * as React from 'react';
import { View, Text } from 'react-native';
import SettingsScreen from '../Screens/Settings'
import ProfileScreen from '../Screens/Profile'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Tab1' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default StackNav;