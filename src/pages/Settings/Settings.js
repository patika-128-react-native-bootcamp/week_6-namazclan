import React from 'react';
import {View, Text} from 'react-native';
import SettingsLayout from './Layout/';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';

export default function Settings() {
  const dispatch = useDispatch();
  const theme = useSelector(s => s.theme);
  const language = useSelector(s => s.language);

  const {t, i18n} = useTranslation();
  

  function handleLanguage(language) {
    dispatch({type: 'SET_LANGUAGE', payload: {language: language}});
    i18n.changeLanguage(language)
  }
  function handleTheme(text) {
    dispatch({type: 'SET_THEME', payload: {theme: text}});
  }
  return (
 
      <SettingsLayout
        setLanguage={handleLanguage}
        setTheme={handleTheme}
        theme={theme}
        language={language}
      />
 
  );
}
