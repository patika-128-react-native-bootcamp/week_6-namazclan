import React, {useEffect} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userProvider = ({children}) => {
  const [language, setLanguage] = React.useState('en');
  const [theme, setTheme] = React.useState('dark');
  const [comic, setComic] = React.useState([]);
  const [hero, setHero] = React.useState([]);

  useEffect(() => {
    AsyncStorage.getItem('@LANGUAGE').then(l => {
      l && setLanguage(JSON.parse(l));
    });
    AsyncStorage.getItem('@THEME').then(t => {
      t && setTheme(JSON.parse(t));
    });
    AsyncStorage.getItem('@COMIC').then(c => {
      c && setComic(JSON.parse(c));
    });
    AsyncStorage.getItem('@HERO').then(h => {
      h && setHero(JSON.parse(h));
    });
  }, []);

  const stores = createStore(reducer, {language, theme, comic, hero});
  return <Provider store={stores}>{children}</Provider>;
};

export default userProvider;
