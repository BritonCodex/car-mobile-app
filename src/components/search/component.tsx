import React from 'react';
import {Pressable, View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import {colors} from '../../themes/colors';
import {scale} from '../../themes/scale';
import InputComponent from '../input/component';
import {searchStyles} from './searchStyles';
import {ISearchProps} from './ISearchProps';


const SearchComponent = ({onFilterPress}: ISearchProps) => {
    const styles = searchStyles();
    return (
        <View style={[styles.flexRow]}>
            <InputComponent
                onChangeText={e => console.log(e)}
                leftAction={
                    <MaterialIcons color={colors.gray} name="search" size={scale(22)} />
                }
                containerStyle={styles.inputContainer}
                placeholder="Search your dream car....."
            />
            <Pressable
                onPress={onFilterPress}
                style={[styles.borderRound, styles.wh]}>
                <MaterialCommunityIcons
                    name="filter-outline"
                    size={scale(26)}
                    color={colors.gray}
                />
            </Pressable>
        </View>
);
};

export default SearchComponent;