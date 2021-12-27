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
    const [filteredList, setFilteredList] = React.useState([]);
    React.useEffect(() => {
        {data && setFilteredList(data.data.results)}
    },[data])
    
    

    const handleSearch = text => {
        const filtered = data.data.results.filter(product => {
            const searchedText = text.toLowerCase();
            const currentTitle = product.title.toLowerCase();
            return currentTitle.indexOf(searchedText) > -1;
        });
        setFilteredList(filtered);
    };
    
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
        <ComicsLayout data={filteredList} navigation={navigation} theme={theme} handleSearch={handleSearch}/>
    )
}
