import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import styles from './ComicCard.styles'
import { Shadow } from 'react-native-shadow-2';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';

export default function ComicCard({ comic, onPress, theme ,onFavPress}) {

    const {t, i18n} = useTranslation();
    const source = comic.images[0] !== undefined ? `${comic.images[0].path}.jpg` : "https://legacycomics.com/wp-content/uploads/2019/07/marvel-comics-1000-allred-60s.png"
    return (
        <TouchableWithoutFeedback >
            <View style={styles[theme].container}>
                <Shadow >
                    <Image
                        style={styles[theme].image}
                        source={{ uri: source }}
                        
                    />
                </Shadow>
                <View style={styles[theme].favContainer}>
                <Icon name="star" size={35} color="gray" onPress={onFavPress}/>
                </View>
                
                <View style={styles[theme].bottomContainer}>
                    <TouchableOpacity style={styles[theme].readContainer} onPress={onPress}>
                        <Text style={styles[theme].read}>{t("READNOW")}</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles[theme].title} numberOfLines={2}>{comic.title}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
