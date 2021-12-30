import React from 'react';
import {View,FlatList} from 'react-native';
import styles from './HeroFavoriteLayout.styles';
import HeroCard from '../../../../components/Cards/HeroCard';
import Header from '../../../../components/Cards/Header';
import Search from '../../../../components/Search';
import {useTranslation} from 'react-i18next';

export default function HeroFavoriteLayout({data, navigation, theme, handleSearch,onFavPress,favoriteHeroes}) {
  const handleCardPress = item => {
    navigation.navigate('HeroesDetailPage', item);
  };
  const {t} = useTranslation();

  const renderItem = ({item}) => (
    <HeroCard theme={theme} hero={item} onPress={() => handleCardPress(item)} onFavPress={onFavPress}
    favoriteHeroes={favoriteHeroes}/>
  );
  return (
    <View style={styles[theme].container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
}
