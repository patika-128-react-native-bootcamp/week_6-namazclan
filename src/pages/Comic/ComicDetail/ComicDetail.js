import React from 'react';
import {View, Text} from 'react-native';
import ComicDetailLayout from './Layout';
import {constants} from '../../../configs';
import useFetch from '../../../hooks/useFetch';
export default function ComicDetail({route, navigation}) {
  const {loading, data, error} = useFetch(
    `${constants.baseUrl}/comics/${route.params.id}/characters?&ts=${constants.ts}&apikey=${constants.apikey}&hash=${constants.hash}`,
  );

  const handleBack = () => {
    navigation.goBack();
  };

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
    <ComicDetailLayout
      details={route.params}
      onPress={handleBack}
      charactersData={data.data.results}
    />
  );
}
