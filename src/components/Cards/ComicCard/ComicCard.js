import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import styles from './ComicCard.styles'
import { Shadow } from 'react-native-shadow-2';

export default function ComicCard({ comic, onPress }) {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Shadow >
                    {comic.images[0] !== undefined ? (
                        <Image
                            style={styles.image}
                            source={{ uri: `${comic.images[0].path}/portrait_incredible.jpg` }}
                        />
                    ) : (
                        <Image
                                style={styles.image}
                                source={{ uri: "https://legacycomics.com/wp-content/uploads/2019/07/marvel-comics-1000-allred-60s.png" }}
                            />

                    )}
                </Shadow>
                <TouchableOpacity style={styles.readContainer}>
                    <Text style={styles.read}>READ NOW</Text>
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} numberOfLines={5}>{comic.title.slice(0, 20)}...</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
