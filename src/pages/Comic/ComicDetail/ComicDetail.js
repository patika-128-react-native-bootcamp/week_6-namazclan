import React from 'react'
import ComicDetailLayout from './Layout'

export default function ComicDetail({route,navigation}) {
    const handleBack = () => {
        navigation.goBack();
    }
    return (
        <ComicDetailLayout details={route.params } onPress={handleBack}/>
    )
}
