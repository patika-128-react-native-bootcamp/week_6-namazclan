import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Books from '../../pages/Book/Books';
import BookDetail from '../../pages/Book/BookDetail';

const Stack=createNativeStackNavigator();

export default function Bookstack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="BooksPage" component={Books} />
            <Stack.Screen name="BookDetailPage" component={BookDetail} />
        </Stack.Navigator>
    )
}
