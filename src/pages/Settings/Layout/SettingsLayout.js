import React from 'react'
import {SafeAreaView, View, Text, Button, Switch} from 'react-native'
import styles from './SettingsLayout.styles';
import SwitchSelector from "react-native-switch-selector";
import {useTranslation} from 'react-i18next';


export default function SettingsLayout({ setLanguage, setTheme, theme, language,onChangeLanguage}) {
   
    const {t} = useTranslation();

    const options = [
        { label: t("Light_Mode"), value: "light" },
        { label: t("Dark_Mode"), value: "dark" },
      ];

      {t("Search")}

    const languageOptions = [
        { label: t("tr"), value: "tr" },
        { label: t("en"), value: "en" },
      ];

    return (
        <SafeAreaView style={styles[theme].container}>
            <View style={styles[theme].themeContainer}>

            <SwitchSelector
            textColor='white'
            selectedColor='#ffffff'
            buttonColor='#ef4322'
            backgroundColor='gray'
            options={options}
            initial={theme=="light" ? 0 : 1}
            onPress={(value) => setTheme( value)}
            />
            </View>
            <View style={styles[theme].languageContainer}>

            <SwitchSelector
            textColor='white'
            selectedColor='#ffffff'
            buttonColor='#ef4322'
            backgroundColor='gray'
            options={languageOptions}
            initial={language=="tr" ? 0 :1}
            onPress={(value) => setLanguage( value)}
            />
            </View>
           
        </SafeAreaView>
    )
}
