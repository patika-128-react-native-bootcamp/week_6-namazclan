import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Heroes from '../../pages/Hero/Heroes';
import HeroesDetail from '../../pages/Hero/HeroesDetail';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack=createNativeStackNavigator();

export default function Herostack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HeroesPage" component={Heroes}/>
            <Stack.Screen name="HeroesDetailPage" component={HeroesDetail} />
        </Stack.Navigator>
    )
}
