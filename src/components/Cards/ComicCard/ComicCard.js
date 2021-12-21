import React from 'react'
import { View, Text } from 'react-native'

export default function ComicCard({Comic}) {
    return (
        <View>
            <Text>{Comic.title}</Text>
        </View>
    )
}
