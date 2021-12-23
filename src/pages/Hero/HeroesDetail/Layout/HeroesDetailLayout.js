import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './HeroesDetailLayout.styles'
export default function HeroesDetailLayout({ data }) {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri: `${data.thumbnail.path}.jpg`,
                }}
                resizeMode="cover"
                style={styles.image}
            >

                <Text>HeroesDetailPage</Text>
            </ImageBackground>
        </View>
    )
}
