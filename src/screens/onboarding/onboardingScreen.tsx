import React from 'react';
import { View, ImageBackground, Text, Image, Alert } from 'react-native';
import assets from '../../../assets';
import { onboardingStyles } from './onboardingStyles';
import Button from '../../components/button/buttonComponent';
import {navigate} from '../../navigators/navigationUtilities';

const OnboardingScreen = () => {
    const styles = onboardingStyles();
    const {logo, overlayBg, whiteCar}= assets;
    return (
        <ImageBackground resizeMode='cover' source={whiteCar} style={styles.container}>
            <ImageBackground resizeMode='cover' source={overlayBg} style={styles.overLay}>
                <View>
                    <View style={styles.logoContainer}>
                        <Image resizeMode='contain' source={logo} style={styles.carLogo} />
                    </View>
                
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Welcome to</Text>
                        <Text style={styles.title}>Apex Drive Ltd.</Text>
                    </View>
                </View>
                <Button onPress= {()=> 
                    {
                        console.log('succescfully pressed the get started button');
                        navigate('OnBoardingScreenTwo')
                        console.log('failed to navigate to the onboarding screen two');
                    }} text="Get Started" buttonStyles={styles.buttonStyle} textStyles={styles.buttonText}/>
            </ImageBackground>
        </ImageBackground>
    );
}

export default OnboardingScreen;
