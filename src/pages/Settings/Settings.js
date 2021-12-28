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
  

  function handleLanguage(text) {
    dispatch({type: 'SET_LANGUAGE', payload: {language: text}});
  }
  function handleTheme(text) {
    dispatch({type: 'SET_THEME', payload: {theme: text}});
  }

 

  return (
    <View>
      <Text>{t("text")}</Text>
      <SettingsLayout
        setLanguage={handleLanguage}
        setTheme={handleTheme}
        theme={theme}
        language={language}
        onChangeLanguage={(language) => i18n.changeLanguage(language)}
      />
    </View>
  );
}
