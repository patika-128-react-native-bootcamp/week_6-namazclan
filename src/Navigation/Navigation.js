import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComicStack from './ComicStack';
import { NavigationContainer } from '@react-navigation/native';
import Library from '../pages/Library';
import Settings from '../pages/Settings';
import HeroStack from '../Navigation/HeroStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from "react-redux"
import {colors} from "../configs"
const Tab = createBottomTabNavigator();

export default function Navigation() {
  const language = useSelector(s => s.language);
  const theme = useSelector(s => s.theme);

  const comicName = language == "tr" ? "ÇizgiRoman" : "Comics"
  const heroName = language == "tr" ? "Kahramanlar" : "Heroes"
  const favoriteName = language == "tr" ? "Kitaplığım" : "My Library"
  const settingsName = language == "tr" ? "Ayarlar" : "Settings"
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{

          activeBackgroundColor: theme == "dark" ? colors.MainBlack : colors.MainWhite,
          inactiveBackgroundColor: theme == "dark" ? colors.MainBlack : colors.MainWhite,

        }}
        screenOptions={({ route }) => ({


          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === comicName) {
              iconName = focused
                ? 'skull'
                : 'skull';
            } else if (route.name === heroName) {
              iconName = focused ? 'book-open-page-variant' : 'book-open-page-variant';
            }
            else if (route.name === favoriteName) {
              iconName = focused ? 'heart-flash' : 'heart-flash';
            }
            else if (route.name === settingsName) {
              iconName = focused ? 'cog' : 'cog';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ef4322',
          tabBarInactiveTintColor: theme == "dark" ? 'white' : "gray",
          headerShown: false
        })}
      >

        <Tab.Screen name={comicName} component={ComicStack} />
        <Tab.Screen name={heroName} component={HeroStack} />
        <Tab.Screen name={favoriteName} component={Library} />
        <Tab.Screen name={settingsName} component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
