import React from 'react'
import { View, Text } from 'react-native'
import HeroesLayout from './Layout'
import useFetch from '../../../hooks/useFetch';
import { baseUrl, hash, apikey, ts } from "../../../Utils/constants"
export default function Heroes({navigation}) {
    const { loading, data, error } = useFetch(`${baseUrl}/characters?limit=20&ts=${ts}&apikey=${apikey}&hash=${hash}`);
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
        <HeroesLayout data={data.data.results} navigation={navigation} />
    )
}
