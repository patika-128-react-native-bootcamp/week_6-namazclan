import React from 'react'
import { View, Text } from 'react-native'
import LibraryLayout from './Layout/'
import { useSelector } from "react-redux"
export default function Library() {
    const theme = useSelector(s => s.theme);
    return (
        <LibraryLayout theme={theme}/>
    )
}
