import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './HeroCard.style'
import { Shadow } from 'react-native-shadow-2';
import { emptyText } from '../../../Utils/constants';
export default function HeroCard({ hero, onPress }) {
    const source = hero.thumbnail !== undefined ? `${hero.thumbnail.path}/portrait_incredible.jpg` : "https://legacycomics.com/wp-content/uploads/2019/07/marvel-comics-1000-allred-60s.png"
    return (
        <Shadow viewStyle={{ width: '100%', flex: 1 }} containerViewStyle={{ margin: 20 }}  >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: source }}
                    resizeMode="cover"
                />
                <View style={styles.rightContainer}>
                    <View>
                        <Text style={styles.title}>
                            {hero.name}
                        </Text>
                        <Text style={styles.numbers}>
                            Comics: {hero.comics.items.length} | Stories: {hero.stories.items.length}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.description} numberOfLines={3}>
                            {hero.description ? hero.description : emptyText}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={onPress} >
                        <Text style={styles.read}>READ MORE</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Shadow>
    )
}
