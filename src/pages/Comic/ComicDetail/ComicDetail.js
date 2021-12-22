import React from 'react'
import ComicDetailLayout from './Layout'
import { baseUrl, hash, apikey, ts } from "../../../Utils/constants";
import useFetch from '../../../hooks/useFetch';
export default function ComicDetail({ route, navigation }) {
    
    const { loading, data, error } = useFetch(`${baseUrl}/comics/${route.params.id}/characters?&ts=${ts}&apikey=${apikey}&hash=${hash}`);
    const response = data ? data.data : null
    const handleBack = () => {
        navigation.goBack();
    }
    return (
        <ComicDetailLayout details={route.params} onPress={handleBack} data={response} />
    )
}
