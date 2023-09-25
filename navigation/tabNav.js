import React from 'react'
import HomeScreen from '../Screens/Home';
import NotificationScreen from '../Screens/Notification';
import ProfileScreen from '../Screens/Profile';
import SearchScreen from '../Screens/Search';
import stackNav from './stackNav'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function tabNav() {
    const theme = useTheme();
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                activeTintColor: theme.colors.primary,
                inactiveTintColor: theme.colors.disabled,
                style: { backgroundColor: theme.colors.surface },
                showLabel: false, // Hide the labels under the icons
            }}>
                <Tab.Screen name="Home" component={HomeScreen} 
                            options={{
                                tabBarIcon: ({ color, size }) => {
                                    return <MaterialCommunityIcons name="home" color={color} size={26}/>
                                },
                            }}
                />
                <Tab.Screen name="Notification" component={NotificationScreen} 
                            options={{
                                tabBarIcon: ({ color, size }) => {
                                    return <MaterialCommunityIcons name="heart" color={color} size={26}/>
                                },
                                tabBarBadge: '',
                                tabBarBadgeStyle: {
                                minWidth: 10,
                                minHeight: 10,
                                maxWidth: 10,
                                maxHeight: 10,
                                borderRadius: 5,
                                },
                            }}
                />
                <Tab.Screen name="Search" component={SearchScreen} 
                            options={{
                                tabBarIcon: ({ color, size }) => {
                                    return <MaterialCommunityIcons name="magnify" color={color} size={26}/>
                                },
                            }}
                />
                <Tab.Screen name="Profile" component={stackNav} 
                            options={{
                                tabBarIcon: ({ color, size }) => {
                                    return <MaterialCommunityIcons name="account-circle" color={color} size={26}/>
                                },
                            }}
                />
            </Tab.Navigator>

        </NavigationContainer>
    );
}

export default tabNav;
