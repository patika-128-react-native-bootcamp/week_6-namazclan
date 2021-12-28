import React from 'react'
import {SafeAreaView, View, Text } from 'react-native'
import { useSelector } from "react-redux"
import styles from './ComicsFavorite.styles'

export default function ComicsFavorite() {

    const theme = useSelector(s => s.theme);

    return (
        <SafeAreaView style={styles[theme].container}>
            <Text>Comics Favorite Layout</Text>
        </SafeAreaView>
    )
}
