import React from 'react'
import{View, Text} from 'react-native'
import ComicDetailLayout from './Layout'
import { baseUrl, hash, apikey, ts } from "../../../Utils/constants";
import useFetch from '../../../hooks/useFetch';
export default function ComicDetail({ route, navigation }) {
    
    const { loading, data, error } = useFetch(`${baseUrl}/comics/${route.params.id}/characters?&ts=${ts}&apikey=${apikey}&hash=${hash}`);

    
    //const response = data ? data.data.results : null
    //const responseData=response && response.results 
    //console.log(response);
    const handleBack = () => {
        navigation.goBack();
    }

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
        <ComicDetailLayout details={route.params} onPress={handleBack} charactersData={data.data.results} />
    )
}
