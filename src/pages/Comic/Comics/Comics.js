import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import ComicsLayout from './Layout';
import {constants} from '../../../configs';
import useFetch from '../../../hooks/useFetch/useFetch';
import {useSelector, useDispatch} from 'react-redux';

export default function Comics({navigation}) {
  const {loading, data, error} = useFetch(
    `${constants.baseUrl}/comics?limit=20&ts=${constants.ts}&apikey=${constants.apikey}&hash=${constants.hash}`,
  );

  const dispatch = useDispatch();
  const favoriteComics = useSelector(s => s.comic);

  const theme = useSelector(s => s.theme);
  const [filteredList, setFilteredList] = React.useState([]);
  React.useEffect(() => {
    {
      data && setFilteredList(data.data.results);
    }
  }, [data]);

  const handleSearch = text => {
    const filtered = data.data.results.filter(product => {
      const searchedText = text.toLowerCase();
      const currentTitle = product.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setFilteredList(filtered);
  };

  const onFavPress = comic => {
    if (favoriteComics.includes(comic)) {
      const removed = removeItemOnce(favoriteComics, comic);
      dispatch({type: 'DEL_FAVORITE_COMIC', payload: {comic: [...removed]}});
    } else {
      dispatch({
        type: 'ADD_FAVORITE_COMIC',
        payload: {comic: [...favoriteComics, comic]},
      });
    }
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
      handleSearch={handleSearch}
      onFavPress={onFavPress}
      favoriteComics={favoriteComics}
    />
  );
}
