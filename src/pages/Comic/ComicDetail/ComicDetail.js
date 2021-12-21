import React from 'react'
import ComicDetailLayout from './Layout'

export default function ComicDetail({route}) {
        console.log(route.params)
    return (
        <ComicDetailLayout details={route.params }/>
    )
}
