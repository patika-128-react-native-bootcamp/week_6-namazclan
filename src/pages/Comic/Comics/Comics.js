import React,{useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import ComicsLayout from './Layout';
import { constants } from "../../../configs"
import useFetch from '../../../hooks/useFetch/useFetch';
import { useSelector } from "react-redux"

export default function Comics({navigation}) {
    const { loading, data, error } = useFetch(`${constants.baseUrl}/comics?limit=20&ts=${constants.ts}&apikey=${constants.apikey}&hash=${constants.hash}`);
    // const [comicData, setComicData] = useState(null)
    // useEffect(() => {
    //     if (data !== null) {
    //         setComicData(data.data.results);
    //     }
    // }, [data]);
    const theme = useSelector(s => s.theme)
    
    if (loading) {
        return (
            <View>
                <Text>Loading</Text>
            </View>
       )
    }
    if (error) {
        
        return (
            <View>
                <Text>error</Text>
            </View>
        )
    }
    return (
        <ComicsLayout data={data.data.results} navigation={navigation} theme={theme} />
    )
}
