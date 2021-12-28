import React from 'react'
import {SafeAreaView, View, Text, Button, Switch} from 'react-native'
import styles from './SettingsLayout.styles';
import SwitchSelector from "react-native-switch-selector";



export default function SettingsLayout({ setLanguage, setTheme, theme, language,onChangeLanguage}) {
   
    const options = [
        { label: "Light Mode", value: "light" },
        { label: "Dark Mode", value: "dark" },
      ];

    const languageOptions = [
        { label: "tr", value: "tr" },
        { label: "en", value: "en" },
      ];

    return (
        <SafeAreaView style={styles[theme].container}>
           
            
            {/* <Button title="setTheme" onPress={() => setTheme( theme=="dark" ? "light": "dark")} /> */}
            <SwitchSelector
            textColor='white'
            selectedColor='#ffffff'
            buttonColor='#ef4322'
            backgroundColor='gray'
            options={options}
            initial={0}
            onPress={(value) => setTheme( theme=="light" ? value:value)}
            />
            <SwitchSelector
            textColor='white'
            selectedColor='#ffffff'
            buttonColor='#ef4322'
            backgroundColor='gray'
            options={languageOptions}
            initial={0}
            onPress={onChangeLanguage}
            />
           
        </SafeAreaView>
    )
}
