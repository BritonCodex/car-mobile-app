import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import assets from '../../../assets';
import {colors} from '../../themes/colors';
import {scale} from '../../themes/scale';
import {renderMarginBottom} from '../../utils/ui-utils';
import {carStyles} from './carStyles';
import {ICarComponentProps} from './ICarProps';
import FavouriteComponent from '../favourite/component';

const CarComponent = ({bottomActions, onPress}: ICarComponentProps) => {
  const styles = carStyles();
  const {ferrari} = assets;

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <FavouriteComponent favStyles={{} as import('react-native').ViewStyle} />
      <View style={styles.carBackground}>
        <Image source={ferrari} resizeMode="contain" style={styles.carImage} />
      </View>
      <View style={styles.textContainer}>
        {renderMarginBottom(4)}
        <Text style={styles.title}>Ferrari</Text>
        {renderMarginBottom(4)}
        <View style={styles.flex}>
          <Text style={styles.title}>5.0</Text>
          <FontAwesome name="star" size={scale(14)} color={colors.star} />
        </View>
        {renderMarginBottom(4)}
        <View style={[styles.flex]}>
          <MaterialIcons
            name="location-pin"
            size={scale(16)}
            color={colors.gray}
          />
          <Text style={styles.text}>Nairobi karen</Text>
        </View>
        {renderMarginBottom(6)}
        {bottomActions ? (
          bottomActions
        ) : (
          <View style={[styles.flex, styles.priceContainer]}>
            <View style={[styles.flex]}>
              <MaterialCommunityIcons
                name="sofa-single-outline"
                size={scale(16)}
                color={colors.gray}
              />
              <Text style={[styles.text, styles.textBold]}>4 Seats</Text>
            </View>
            <View style={[styles.flex]}>
              <Pressable style={styles.dollarContainer}>
                <Fontisto name="dollar" size={scale(8)} color={colors.gray} />
              </Pressable>
              <Text style={[styles.text, styles.textBold, styles.price]}>
                $200/Day
              </Text>
            </View>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default CarComponent;
