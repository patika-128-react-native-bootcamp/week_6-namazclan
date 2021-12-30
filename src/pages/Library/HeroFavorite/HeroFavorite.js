import React from 'react';
import {View, Text} from 'react-native';
import HeroesLayout from './Layout';
import useFetch from '../../../hooks/useFetch';
import {constants} from '../../../configs';
import {useSelector,useDispatch} from 'react-redux';

export default function HeroFavorite({navigation}) {
  const {loading, data, error} = useFetch(
    `${constants.baseUrl}/characters?limit=20&ts=${constants.ts}&apikey=${constants.apikey}&hash=${constants.hash}`,
  );

  const dispatch = useDispatch();
  const favoriteHeroes = useSelector(s => s.hero);

  const [filteredList, setFilteredList] = React.useState([]);
  React.useEffect(() => {
    {
      data && handleFilter(data.data.results);
    }
  }, [data,favoriteHeroes]);

  const handleFilter = () => {
    const filtered = data.data.results.filter(product => {
      return favoriteHeroes.includes(product.id);
    });
    setFilteredList(filtered);
  };

  const onFavPress = hero => {
    const removed = removeItemOnce(favoriteHeroes, hero);
    console.log(removed);
    dispatch({type: 'DEL_FAVORITE_HERO', payload: {hero: [...removed]}});
  };

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const theme = useSelector(s => s.theme);
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
    <HeroesLayout
      data={filteredList}
      navigation={navigation}
      theme={theme}
      onFavPress={onFavPress}
      favoriteHeroes={favoriteHeroes}
    />
  );
}
