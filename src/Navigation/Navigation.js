import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookStack from './BookStack';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Book" component={BookStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
