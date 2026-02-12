import React from 'react';
import {Pressable, ViewStyle} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {scale} from '../../themes/scale';
import {favouriteStyles} from './favouriteStyles';

interface IFav {
    favStyles: ViewStyle;
}

const FavouriteComponent = ({favStyles}: IFav) => {
        const styles = favouriteStyles();
    return (
        <Pressable style={[styles.favContainer, favStyles]}>
            <MaterialCommunityIcons name={'cards-heart-outline'} size={scale(18)} />
        </Pressable>
    );
};

export default FavouriteComponent;
