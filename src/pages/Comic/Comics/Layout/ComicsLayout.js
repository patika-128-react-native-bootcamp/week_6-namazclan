import React from 'react'
import {SafeAreaView, View, Text } from 'react-native'
import styles from './ComicsLayout.styles';

export default function ComicsLayout({data}) {
    return (
        <SafeAreaView>
            <Text>{data.data}</Text>
        </SafeAreaView>
    )
}
