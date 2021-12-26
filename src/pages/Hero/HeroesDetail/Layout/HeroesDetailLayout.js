import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, useColorScheme } from 'react-native'
import styles from './HeroesDetailLayout.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from "../../../../configs";
import ModalCard from '../../../../components/ModalCard'
export default function HeroesDetailLayout({ data, theme, visible, setVisible, handleSelect, selected }) {
    //console.log(data)
    const iconColor = theme == "dark" ? colors.MainWhite : colors.MainRed
    const source = data.thumbnail.path == "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d" ? "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Marvel_Heroes_Key_Art.jpg/220px-Marvel_Heroes_Key_Art" : data.thumbnail.path
    return (
        <View style={styles[theme].container}>
            <ImageBackground
                source={{
                    uri: `${source}.jpg`,
                }}
                resizeMode="cover"
                style={styles[theme].image}
            >
                <View style={styles[theme].titleContainer}>
                    <Text style={styles[theme].title} >{data.name}</Text>
                </View>
                <View style={styles[theme].row}>
                    <TouchableOpacity style={styles[theme].buttonContainer} onPress={() => handleSelect("Wiki")} >
                        <Icon name="file-chart" size={30} color={iconColor} />
                        <Text style={styles[theme].subTitle}>
                            Wiki
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles[theme].buttonContainer} onPress={() => handleSelect("Comics")}>
                        <Icon name="book" size={30} color={iconColor} />
                        <Text style={styles[theme].subTitle}>
                            Comics
                        </Text>
                    </TouchableOpacity>
                </View>
                <ModalCard
                    visible={visible}
                    onClose={() => setVisible(!visible)}
                    theme={theme}
                    selected={selected}
                    description={data.description}
                    comics={data.comics}
                    name={data.name}
                />
            </ImageBackground>
        </View>
    )
}
