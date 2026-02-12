import React from 'react';
import {FlatList, Text, View} from 'react-native';
import assets from '../../../assets';
import {homeStyles} from './homeStyles';
import HeaderComponent from '../../components/header/component';
import SearchComponent from '../../components/search/component';
import CarBrandComponent from '../../components/carBrand/component';
import CarComponent from '../../components/car/component';

const HomeScreen = () => {
    const styles = homeStyles();
    const {tesla} = assets;
    return (
        <View style={styles.container}>
            <HeaderComponent title="Apex Drive" />
            <View style={styles.main}>
                <SearchComponent />
                <View style={[styles.showCase, styles.p18]}>
                    <Text style={styles.text}>Brands</Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={[1, 2, 3, 4, 5]}
                        renderItem={({item}) => <CarBrandComponent text="Tesla" />}
                    />
                </View>
                <View style={[styles.showCaseCars, styles.p18]}>
                    <View style={styles.viewContainer}>
                        <Text style={styles.text}>Best Cars</Text>
                        <Text style={styles.viewAll}>View All</Text>
                    </View>
                    <View style={styles.flexRow}>
                        <CarComponent />
                        <CarComponent />
                    </View>
                    <View style={styles.flexRow}>
                        <CarComponent />
                        <CarComponent />
                    </View>
                </View>
            </View>
        </View>
        );
    };
export default HomeScreen;