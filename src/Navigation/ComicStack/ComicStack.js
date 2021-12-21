import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Comics from '../../pages/Comic/Comics';
import ComicDetail from '../../pages/Comic/ComicDetail';

const Stack=createNativeStackNavigator();

export default function Comicstack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ComicsPage" component={Comics} />
            <Stack.Screen name="ComicDetailPage" component={ComicDetail} />
        </Stack.Navigator>
    )
}
