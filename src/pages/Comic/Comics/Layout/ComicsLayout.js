import React from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import {ComicCard} from '../../../../components/Cards';
import styles from './ComicsLayout.styles';

export default function ComicsLayout({ data }) {

    const renderItem = ({ item }) => <ComicCard comic={item} />
    console.log("data", data)
    return (
        <SafeAreaView>
            <Text>Layout</Text>
            <FlatList
                data={data}
                renderItem={renderItem}

            />
        </SafeAreaView>
    )
}




