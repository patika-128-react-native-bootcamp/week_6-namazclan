import React from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import ComicCard from '../../../../components/Cards/ComicCard';
import Header from '../../../../components/Cards/Header'
import styles from './ComicsLayout.styles';
import Search from "../../../../components/Search"

export default function ComicsLayout({ data, onPress, navigation , theme,handleSearch,onFavPress}) {

    
    const handleCardPress = (item) => {
        navigation.navigate("ComicDetailPage", item)
    }
    const renderItem = ({ item }) => <ComicCard comic={item} onPress={() => handleCardPress(item)} theme={theme} onFavPress={onFavPress} />

    return (
        <View style={styles[theme].container}>
           
            <Header theme={theme} />
            <Search theme={theme} onChangeText={handleSearch}  placeholder= "Search..." />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                numColumns= "2"
            />

        </View>
    )
}




