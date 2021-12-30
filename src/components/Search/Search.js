import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Search.style';

export default function Search({onChangeText, placeholder, theme}) {
  return (
    <View style={styles[theme].container}>
      <TextInput
        style={styles[theme].input}
        placeholder={placeholder}
        onChangeText={text => onChangeText(text)}
        placeholderTextColor={'black'}
      />
    </View>
  );
}
