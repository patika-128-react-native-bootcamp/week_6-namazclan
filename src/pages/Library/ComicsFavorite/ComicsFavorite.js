import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import ComicsLayout from './Layout';
import {constants} from '../../../configs';
import useFetch from '../../../hooks/useFetch/useFetch';
import {useSelector, useDispatch} from 'react-redux';

export default function ComicsFavorite({navigation}) {
  const {loading, data, error} = useFetch(
    `${constants.baseUrl}/comics?limit=20&ts=${constants.ts}&apikey=${constants.apikey}&hash=${constants.hash}`,
  );

  const dispatch = useDispatch();
  const favoriteComics = useSelector(s => s.comic);

  const theme = useSelector(s => s.theme);
  const [filteredList, setFilteredList] = React.useState([]);
  React.useEffect(() => {
    {
      data && handleFilter();
    }
  }, [data, favoriteComics]);

  const handleFilter = () => {
    const filtered = data.data.results.filter(product => {
      return favoriteComics.includes(product.id);
    });
    setFilteredList(filtered);
  };

  const onFavPress = comic => {
    const removed = removeItemOnce(favoriteComics, comic);
    console.log(removed);
    dispatch({type: 'DEL_FAVORITE_COMIC', payload: {comic: [...removed]}});
  };

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>error</Text>
      </View>
    );
  }
  return (
    <ComicsLayout
      data={filteredList}
      navigation={navigation}
      theme={theme}
      onFavPress={onFavPress}
      favoriteComics={favoriteComics}
    />
  );
}
