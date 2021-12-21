import React,{useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import ComicsLayout from './Layout';
import axios from 'axios'
import { baseUrl, hash, apikey, ts } from "../../../Utils/constants";
import useFetch from '../../../hooks/useFetch/useFetch';


export default function Comics() {
    const { loading, data, error } = useFetch(`${baseUrl}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`);
    const [comicData, setComicData] = useState(null)
    useEffect(() => {
        if (data !== null) {
            setComicData(data.data.results);
        }
    }, [data]);
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
        <ComicsLayout data={comicData}/>
    )
}
