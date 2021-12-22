import React from 'react'
import {SafeAreaView, View, Text } from 'react-native'
import styles from './ComicDetailLayout.styles';
import Header from '../../../../components/Cards/Header'
export default function ComicDetailLayout({details, onPress}) {
    return (
        <SafeAreaView>
            <Header back onPress={onPress}/>
            <Text>Comic Detail Layout</Text>
            <Text>{details.title}</Text>
        </SafeAreaView>
    )
}
