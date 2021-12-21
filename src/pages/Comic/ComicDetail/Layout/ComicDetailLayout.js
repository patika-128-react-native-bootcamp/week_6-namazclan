import React from 'react'
import {SafeAreaView, View, Text } from 'react-native'
import styles from './ComicDetailLayout.styles';

export default function ComicDetailLayout({details}) {
    return (
        <SafeAreaView>
            <Text>Comic Detail Layout</Text>
            <Text>{details.title}</Text>
        </SafeAreaView>
    )
}
