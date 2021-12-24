import React from 'react'
import {SafeAreaView, View, Text, Button, } from 'react-native'
import styles from './SettingsLayout.styles';

export default function SettingsLayout({ setLanguage, setTheme, theme, language }) {
    


    return (
        <SafeAreaView style={styles[theme].container}>
            <Text>Settings Layout</Text>
            <Button title="setLanguage" onPress={() => setLanguage(language=="en" ? "tr" : "en")} />
            <Button title="setTheme" onPress={() => setTheme( theme=="dark" ? "light": "dark")} />
        </SafeAreaView>
    )
}
