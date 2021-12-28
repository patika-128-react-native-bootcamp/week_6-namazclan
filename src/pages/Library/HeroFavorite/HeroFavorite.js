import React from 'react'
import {SafeAreaView, View, Text } from 'react-native'
import { useSelector } from "react-redux"
import styles from './HeroFavorite.styles'

export default function HeroFavorite() {

    const theme = useSelector(s => s.theme);

    return (
        <SafeAreaView style={styles[theme].container}>
            <Text>Hero Favorite Layout</Text>
        </SafeAreaView>
    )
}
