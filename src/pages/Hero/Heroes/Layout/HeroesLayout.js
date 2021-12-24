import React from 'react'
import {SafeAreaView, View, Text, FlatList } from 'react-native'
import styles from './HeroesLayout.styles';
import HeroCard from '../../../../components/Cards/HeroCard'
import Header from '../../../../components/Cards/Header'


export default function HeroesLayout({ data, navigation, theme }) {
    const handleCardPress = (item) => {
        navigation.navigate("HeroesDetailPage", item)
    }

    const renderItem = ({ item }) => <HeroCard theme={theme} hero={item} onPress={() => handleCardPress(item)} />
    return (
        <View style={styles[theme].container}>
            <Header theme={theme} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
            />

        </View>
    )
}
