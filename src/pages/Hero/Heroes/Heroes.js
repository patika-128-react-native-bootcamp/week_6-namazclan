import React from 'react'
import { View, Text } from 'react-native'
import HeroesLayout from './Layout'
import useFetch from '../../../hooks/useFetch';
import { constants } from "../../../configs"
import { useSelector } from 'react-redux';

export default function Heroes({navigation}) {
    const { loading, data, error } = useFetch(`${constants.baseUrl}/characters?limit=20&ts=${constants.ts}&apikey=${constants.apikey}&hash=${constants.hash}`);
    // const [comicData, setComicData] = useState(null)
    // useEffect(() => {
    //     if (data !== null) {
    //         setComicData(data.data.results);
    //     }
    // }, [data]);

    const theme = useSelector(s => s.theme);
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
        <HeroesLayout data={data.data.results} navigation={navigation} theme={theme} />
    )
}
