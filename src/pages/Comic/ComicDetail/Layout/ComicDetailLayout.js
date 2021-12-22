import React from 'react'
import { SafeAreaView, View, Text, ImageBackground } from 'react-native'
import styles from './ComicDetailLayout.styles';
import Header from '../../../../components/Cards/Header'
export default function ComicDetailLayout({ details, onPress }) {
    const source = details.images[0] !== undefined ? `${details.images[0].path}/portrait_incredible.jpg` : "https://legacycomics.com/wp-content/uploads/2019/07/marvel-comics-1000-allred-60s.png"
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={{ uri: source }} resizeMode="cover" style={styles.image}>
                <View style={styles.innerContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{details.title}</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
