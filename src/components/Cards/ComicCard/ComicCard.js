import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './ComicCard.styles'
export default function ComicCard({ comic, onPress }) {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View>
                {comic.images[0] !== undefined ? (
                    <Image
                        style={{ width: 150, height: 250, resizeMode: 'stretch' }}
                        source={{ uri: `${comic.images[0].path}/portrait_incredible.jpg` }}
                    />
                ) : (
                    <Image
                        style={{ width: 150, height: 250, resizeMode: 'stretch' }}
                        source={{ uri: "https://legacycomics.com/wp-content/uploads/2019/07/marvel-comics-1000-allred-60s.png" }}
                    />

                )}
            </View>
            <View>
                <Text>{comic.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
