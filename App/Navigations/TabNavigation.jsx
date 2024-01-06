import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import FavouriteScreen from '../Screen/FavouriteScreen/FavouriteScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AppMapView from '../Screen/HomeScreen/AppMapView';



const Tab = createBottomTabNavigator();


export default function TabNavigation() {
    return (

        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.BLACk,
            tabBarLabelStyle: { fontFamily: "outfit-bold" },

        }}>
            <Tab.Screen name="Home" component={HomeScreen}
            // <Tab.Screen name="Home" component={AppMapView}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="search1" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Favourite" component={FavouriteScreen}
                options={{
                    tabBarLabel: 'Favourite',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="favorite" size={size} color={color} />)
                }}
            />
            <Tab.Screen name="Profilescreen" component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />)
                }}
            />
        </Tab.Navigator>

    )
}   