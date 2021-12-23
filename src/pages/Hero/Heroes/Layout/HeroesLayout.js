import React from 'react'
import {SafeAreaView, View, Text, FlatList } from 'react-native'
import styles from './HeroesLayout.styles';
import HeroCard from '../../../../components/Cards/HeroCard'
import Header from '../../../../components/Cards/Header'
export default function HeroesLayout({ data, navigation }) {
    const handleCardPress = (item) => {
        navigation.navigate("HeroesDetailPage", item)
    }
    const renderItem = ({ item }) => <HeroCard hero={item} onPress={() => handleCardPress(item)} />

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
            />

        </View>
    )
}
