import React from 'react'
import { View, Text } from 'react-native'
import HeroesDetailLayout from './Layout'
import { useSelector } from "react-redux";

export default function Heroes({route}) {
   //console.log(route.params)
    const theme = useSelector(s => s.theme);
    const [visible, setVisible] = React.useState(false);
    const [selected, setSelected] = React.useState("")
    const handleSelect = (text) => {
        setSelected(text);
        setVisible(!visible);
    };
    return (
        <HeroesDetailLayout
            data={route.params}
            theme={theme}
            visible={visible}
            handleSelect={handleSelect}
            selected={selected}
            setVisible={setVisible}
        />
    )
}
