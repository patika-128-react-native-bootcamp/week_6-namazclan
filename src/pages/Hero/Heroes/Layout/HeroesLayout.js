import React from 'react'
import {SafeAreaView, View, Text, FlatList } from 'react-native'
import styles from './HeroesLayout.styles';
import HeroCard from '../../../../components/Cards/HeroCard';
import Header from '../../../../components/Cards/Header';
import Search from "../../../../components/Search"
import {useTranslation} from 'react-i18next';

export default function HeroesLayout({ data, navigation, theme, handleSearch }) {
    const handleCardPress = (item) => {
        navigation.navigate("HeroesDetailPage", item)
    }
    const {t} = useTranslation();

    const renderItem = ({ item }) => <HeroCard theme={theme} hero={item} onPress={() => handleCardPress(item)} />
    return (
        <View style={styles[theme].container}>
            <Header theme={theme} />
            <Search theme={theme} onChangeText={handleSearch}  placeholder= {t("Search")} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
}
