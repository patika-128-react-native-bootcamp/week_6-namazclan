import React from 'react'
import { SafeAreaView, View, Text, ImageBackground } from 'react-native'
import styles from './ComicDetailLayout.styles';

export default function ComicDetailLayout({ details, onPress, data }) {
    const source = details.images[0] !== undefined ? `${details.images[0].path}/portrait_incredible.jpg` : "https://legacycomics.com/wp-content/uploads/2019/07/marvel-comics-1000-allred-60s.png"
    const detail = details.textObjects[0] == undefined ? "Lorem ipsul dolor" : details.textObjects[0].text
    const pageCount = details.pageCount == 0 ? "unknown" : details.pageCount
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={{ uri: source }} resizeMode="cover" style={styles.image}>
                <View style={styles.innerContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{details.title}</Text>
                    </View>
                    <Text style={styles.descpription}>{detail.split("<br>", 1)}</Text>
                    <Text style={styles.pageCount}>Page Count: {pageCount}</Text>

                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
