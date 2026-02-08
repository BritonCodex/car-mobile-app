import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import {scale} from '../../themes/scale';
import {FontSize} from '../../themes/font-size';

export const buttonStyles = () =>
    StyleSheet.create({
        container:{
            backgroundColor: colors.button,
            borderRadius: scale(30),
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: scale(14),
        },
        text:{
            color: colors.white,
            fontSize: FontSize.FONT_16Px,
            fontWeight: '400',
        },
    });