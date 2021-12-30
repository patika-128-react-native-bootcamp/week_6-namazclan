import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import ComicCard from '../../../../components/Cards/ComicCard';
import Header from '../../../../components/Cards/Header';
import styles from './ComicsFavoriteLayout.styles';
import Search from '../../../../components/Search';
import {useTranslation} from 'react-i18next';

export default function ComicsFavoriteLayout({
  data,
  onPress,
  navigation,
  theme,
  onFavPress,
  favoriteComics,
}) {
  const {t, i18n} = useTranslation();
  const handleCardPress = item => {
    navigation.navigate('ComicDetailPage', item);
  };
  const renderItem = ({item}) => (
    <ComicCard
      comic={item}
      onPress={() => handleCardPress(item)}
      theme={theme}
      onFavPress={onFavPress}
      favoriteComics={favoriteComics}
    />
  );

  return (
    <View style={styles[theme].container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        numColumns="2"
      />
    </View>
  );
}
