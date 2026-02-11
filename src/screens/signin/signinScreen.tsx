import React from 'react';
import { Image, ScrollView, Text, StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import assets from '../../../assets';
import { signinStyles } from './signinStyles';
import Button from '../../components/button/buttonComponent';
import InputComponent from '../../components/input/component';
import {scale} from '../../theme/scale';
import {useSignin} from './signinHook';

const SigninScreen = () => {
    const styles = signinStyles();
      const {isSecure, setIsSecure} = useSignin();
    //logo for the sign-in screen
    const {logo_black} = assets;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.flexRow}>
                <Image source={logo_black} style={styles.carLogo} />
                <Text style={styles.titleStyle}>Apex Drive Ltd.</Text>
            </View>
            {/* welcome back text */}
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>Welcome Back</Text>
                <Text style={styles.textStyle}>Ready to hit the road.</Text>
            </View>
            {/* input section for the credentials */}
            <View style={styles.inputContainer}>
                <InputComponent
                    onChangeText={e => console.log(e)}
                    placeholder={'Email/Phone Number'}
                />

                <InputComponent
                    isSecure
                    secureTextEntry={isSecure}
                    onChangeText={e => console.log(e)}
                    placeholder={'Password'}
                    onSecurePress={() => setIsSecure(!isSecure)}
                />
            </View>

                
        </ScrollView>
    );
}

export default SigninScreen;
