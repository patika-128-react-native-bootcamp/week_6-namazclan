import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ComicStack from './ComicStack';
import {NavigationContainer} from '@react-navigation/native';
import Settings from '../pages/Settings';
import HeroStack from '../Navigation/HeroStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {colors} from '../configs';
import LibraryTopTab from './LibraryTopTab';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

function Navigation() {
  const {t} = useTranslation();
  const theme = useSelector(s => s.theme);

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor:
            theme == 'dark' ? colors.MainBlack : colors.MainWhite,
          inactiveBackgroundColor:
            theme == 'dark' ? colors.MainBlack : colors.MainWhite,
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === t('comicName')) {
              iconName = focused ? 'skull' : 'skull';
            } else if (route.name === t('heroName')) {
              iconName = focused
                ? 'book-open-page-variant'
                : 'book-open-page-variant';
            } else if (route.name === t('favoriteName')) {
              iconName = focused ? 'heart-flash' : 'heart-flash';
            } else if (route.name === t('settingsName')) {
              iconName = focused ? 'cog' : 'cog';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ef4322',
          tabBarInactiveTintColor: theme == 'dark' ? 'white' : 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name={t('comicName')} component={ComicStack} />
        <Tab.Screen name={t('heroName')} component={HeroStack} />
        <Tab.Screen name={t('favoriteName')} component={LibraryTopTab} />
        <Tab.Screen name={t('settingsName')} component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
