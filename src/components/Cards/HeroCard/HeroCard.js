import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './HeroCard.style'
import { Shadow } from 'react-native-shadow-2';
import { constants } from "../../../configs" 
import {useSelector} from "react-redux"
export default function HeroCard({ hero, onPress }) {
    const theme = useSelector(s => s.theme);
    const source = hero.thumbnail.path == "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d" ? "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Marvel_Heroes_Key_Art.jpg/220px-Marvel_Heroes_Key_Art" : hero.thumbnail.path
    //const source = hero.thumbnail !== undefined ? `${hero.thumbnail.path}/portrait_incredible.jpg` : "https://legacycomics.com/wp-content/uploads/2019/07/marvel-comics-1000-allred-60s.png"
    return (
        <Shadow viewStyle={{ width: '100%', flex: 1 }} containerViewStyle={{ margin: 20 }}  >
            <View style={styles[theme].container}>
                <Image
                    style={styles[theme].image}
                    source={{ uri: `${source}.jpg`, }}
                    resizeMode="cover"
                />
                <View style={styles[theme].rightContainer}>
                    <View>
                        <Text style={styles[theme].title}>
                            {hero.name}
                        </Text>
                        <Text style={styles[theme].numbers}>
                            Comics: {hero.comics.items.length} | Stories: {hero.stories.items.length}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles[theme].description} numberOfLines={3}>
                            {hero.description ? hero.description : constants.emptyText}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles[theme].button} onPress={onPress} >
                        <Text style={styles[theme].read}>READ MORE</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Shadow>
    )
}
