import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import styles from './ComicCard.styles'
import { Shadow } from 'react-native-shadow-2';

export default function ComicCard({ comic, onPress }) {

    const source = comic.images[0] !== undefined ? `${comic.images[0].path}.jpg` : "https://legacycomics.com/wp-content/uploads/2019/07/marvel-comics-1000-allred-60s.png"
    return (
        <TouchableWithoutFeedback >
            <View style={styles.container}>
                <Shadow >
                    <Image
                        style={styles.image}
                        source={{ uri: source }}
                    />
                </Shadow>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.readContainer} onPress={onPress}>
                        <Text style={styles.read}>READ NOW</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.title} numberOfLines={2}>{comic.title}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
