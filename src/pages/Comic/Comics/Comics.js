import React,{useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import ComicsLayout from './Layout';
import { baseUrl, hash, apikey, ts } from "../../../Utils/constants";
import useFetch from '../../../hooks/useFetch/useFetch';


export default function Comics({navigation}) {
    const { loading, data, error } = useFetch(`${baseUrl}/comics?limit=20&ts=${ts}&apikey=${apikey}&hash=${hash}`);
    // const [comicData, setComicData] = useState(null)
    // useEffect(() => {
    //     if (data !== null) {
    //         setComicData(data.data.results);
    //     }
    // }, [data]);

    
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
        <ComicsLayout data={data.data.results} navigation={navigation} />
    )
}
