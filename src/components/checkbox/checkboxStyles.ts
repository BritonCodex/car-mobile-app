import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import {scale} from '../../themes/scale';

export const checkBoxStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.checkBoxBg,
      alignSelf: 'flex-start',
      borderRadius: scale(4),
      height: scale(22),
      width: scale(22),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
