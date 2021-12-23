import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComicStack from './ComicStack';
import { NavigationContainer } from '@react-navigation/native';
import Library from '../pages/Library';
import Settings from '../pages/Settings';
import HeroStack from '../Navigation/HeroStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Comics') {
              iconName = focused
                ? 'skull'
                : 'skull';
            } else if (route.name === 'Heroes') {
              iconName = focused ? 'book-open-page-variant' : 'book-open-page-variant';
            }
            else if (route.name === 'My Library') {
              iconName = focused ? 'heart-flash' : 'heart-flash';
            }
            else if (route.name === 'Settings') {
              iconName = focused ? 'cog' : 'cog';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ef4322',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >

        <Tab.Screen name="Comics" component={ComicStack} />
        <Tab.Screen name="Heroes" component={HeroStack} />
        <Tab.Screen name="My Library" component={Library} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
