import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookStack from './BookStack';
import {NavigationContainer} from '@react-navigation/native';
import Library from '../pages/Library';
import Settings from '../pages/Settings';
import Search from '../pages/Search';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Book" component={BookStack} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="My Library" component={Library} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
