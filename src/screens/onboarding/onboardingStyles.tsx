import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import {scale} from '../../themes/scale';
import {FontSize} from '../../themes/font-size';
import {typography} from '../../themes/typography';

export const onboardingStyles = () =>
    StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: colors.white,
        },
        overLay: {
            flex: 1,
            paddingHorizontal: scale(18),
            justifyContent: 'space-between',
            paddingTop: scale(12),
        },
        logoContainer: {
            backgroundColor: colors.white,
            padding: scale(12),
            alignSelf: 'flex-start',
            marginTop: scale(15),
            borderRadius: 100,
            marginHorizontal: scale(8),
        },
        carLogo: {
            height: scale(36),
            width: scale(36),
        },
        textContainer: {
            marginTop: scale(30),
        },
        title: {
            color: colors.white,
            fontSize: FontSize.FONT_40Px,
            fontFamily: typography.semiBold,
        },
        title2: {
            fontSize: FontSize.FONT_30Px,
        },
        buttonStyle: {
            marginBottom: scale(32),
        },
        buttonText: {
            fontFamily: typography.bold,
        },
        infoTextContainer: {
            marginBottom: scale(42),
        },
        infoText: {
            fontSize: FontSize.FONT_13Px,
            color: colors.white,
            fontFamily: typography.regular,
        },
});