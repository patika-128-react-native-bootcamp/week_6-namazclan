import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComicStack from './ComicStack';
import {NavigationContainer} from '@react-navigation/native';
import Library from '../pages/Library';
import Settings from '../pages/Settings';
import Search from '../pages/Search';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen name="Comic" component={ComicStack} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="My Library" component={Library} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
