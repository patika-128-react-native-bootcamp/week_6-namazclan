import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ComicsFavorite from '../../pages/Library/ComicsFavorite';
import HeroFavorite from '../../pages/Library/HeroFavorite';

const Tab = createMaterialTopTabNavigator();

export default function LibraryTopTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ComicsPage" component={ComicsFavorite} />
      <Tab.Screen name="HeroesPage" component={HeroFavorite} />
    </Tab.Navigator>
  );
}
