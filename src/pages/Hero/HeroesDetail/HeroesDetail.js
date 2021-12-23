import React from 'react'
import { View, Text } from 'react-native'
import HeroesDetailLayout from './Layout'
import useFetch from '../../../hooks/useFetch';
import { baseUrl, hash, apikey, ts } from "../../../Utils/constants"
export default function Heroes({route}) {
   console.log(route.params)
    return (
        <HeroesDetailLayout data={route.params}/>
    )
}
