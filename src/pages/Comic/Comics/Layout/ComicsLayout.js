import React from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import ComicCard from '../../../../components/Cards/ComicCard';
import styles from './ComicsLayout.styles';

export default function ComicsLayout({ data, onPress, navigation }) {

    const handleCardPress = (item) => {
        navigation.navigate("ComicDetailPage", item)
    }
    const renderItem = ({ item }) => <ComicCard comic={item} onPress={() => handleCardPress(item)} />

    return (
        <SafeAreaView style={styles.container}>
            <Text>Layout</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                numColumns="2"
            />
        </SafeAreaView>
    )
}




