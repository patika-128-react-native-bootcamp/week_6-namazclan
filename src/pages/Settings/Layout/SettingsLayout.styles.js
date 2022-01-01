import {StyleSheet} from 'react-native';
import {colors} from '../../../configs';
const base_style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  themeContainer: {
    marginTop: 250,
  },
  languageContainer: {
    marginBottom: 350,
  },
});
export default {
  dark: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.MainDarkGray,
    },
  }),
  light: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.MainWhite,
    },
  }),
};
