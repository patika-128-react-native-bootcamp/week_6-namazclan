import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ComicsFavorite from '../../pages/Library/ComicsFavorite';
import HeroFavorite from '../../pages/Library/HeroFavorite';
import { useSelector } from "react-redux"
import {colors} from '../../configs/colors'

const Tab = createMaterialTopTabNavigator();

export default function LibraryTopTab() {
    const theme = useSelector(s => s.theme);
    return (
        <Tab.Navigator>
        <Tab.Screen name="ComicsPage" component={ComicsFavorite} />
        <Tab.Screen name="HeroesPage" component={HeroFavorite} />
        </Tab.Navigator>
    )
}
