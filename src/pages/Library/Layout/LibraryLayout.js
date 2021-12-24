import React from 'react'
import {SafeAreaView, View, Text } from 'react-native'
import styles from './LibraryLayout.styles';

export default function LibraryLayout({theme}) {
    
    return (
        <SafeAreaView style={styles[theme].container}>
            <Text>Library Layout</Text>
        </SafeAreaView>
    )
}
