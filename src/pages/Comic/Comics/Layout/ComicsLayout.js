import React from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import ComicCard from '../../../../components/Cards/ComicCard';
import Header from '../../../../components/Cards/Header'
import styles from './ComicsLayout.styles';

export default function ComicsLayout({ data, onPress, navigation , theme}) {

    
    const handleCardPress = (item) => {
        navigation.navigate("ComicDetailPage", item)
    }
    const renderItem = ({ item }) => <ComicCard comic={item} onPress={() => handleCardPress(item)} theme={theme} />

    return (
        <View style={styles[theme].container}>
            <Header theme={theme} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                numColumns= "2"
            />

        </View>
    )
}




