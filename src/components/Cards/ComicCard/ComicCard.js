import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import styles from './ComicCard.styles'
import { Shadow } from 'react-native-shadow-2';

export default function ComicCard({ comic, onPress }) {

    const source = comic.images[0] !== undefined ? `${comic.images[0].path}/portrait_incredible.jpg` : "https://legacycomics.com/wp-content/uploads/2019/07/marvel-comics-1000-allred-60s.png"
    return (
        <TouchableWithoutFeedback >
            <View style={styles.container}>
                <Shadow >
                    <Image
                        style={styles.image}
                        source={{ uri: source }}
                    />
                </Shadow>
                <TouchableOpacity style={styles.readContainer} onPress={onPress}>
                    <Text style={styles.read}>READ NOW</Text>
                </TouchableOpacity>

                <Text style={styles.title} numberOfLines={2}>{comic.title.slice(0, 20)}...</Text>

            </View>
        </TouchableWithoutFeedback>
    )
}
