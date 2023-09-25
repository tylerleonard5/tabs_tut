import * as React from 'react';
import SettingsScreen from '../Screens/Settings'
import ProfileScreen from '../Screens/Profile'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function StackNav() {

  return (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Tab1' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default StackNav;