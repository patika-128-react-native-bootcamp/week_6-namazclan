import React from 'react'
import { View, Text } from 'react-native'

export default function ComicCard({comic}) {
    return (
        <View>
            <Text>{comic.title}</Text>
        </View>
    )
}
