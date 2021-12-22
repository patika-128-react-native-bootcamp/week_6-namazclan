import React from 'react'
import { View, Text, Image,TouchableOpacity } from 'react-native'
import styles from "./Header.style"
import Icon from "react-native-vector-icons/Ionicons"
import { createSquare } from 'react-native/Libraries/StyleSheet/Rect'
export default function Header({back, onPress}) {
    return (
        <View style={styles.container}>
            {back ? (
                <TouchableOpacity onPress={onPress}>
                    <Icon name="chevron-back" size={28} color="#ef4322" />
                </TouchableOpacity>
            ) :( <View />)}
            <Image
                style={styles.image}
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" }}
            />
            <View />
        </View>
    )
}
