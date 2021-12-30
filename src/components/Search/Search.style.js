import {StyleSheet} from 'react-native';
import {colors} from '../../configs';
const base_style = StyleSheet.create({
  container: {
    padding: 5,
  },
  input: {
    borderRadius: 10,
    margin: 10,
    paddingLeft: 10,
  },
});
export default {
  dark: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
    },
    input: {
      ...base_style.input,
      backgroundColor: colors.MainGray,
    },
  }),
  light: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
    },
    input: {
      ...base_style.input,
      backgroundColor: '#eceff1',
    },
  }),
};
