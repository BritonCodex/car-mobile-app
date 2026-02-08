import React from 'react';
import { View, ImageBackground, Text, Image, Alert } from 'react-native';
import assets from '../../../assets';
import { onboardingStyles } from './onboardingStyles';
import Button from '../../components/button/buttonComponent';
import {navigate} from '../../navigators/navigationUtilities';

const OnBoardingScreenTwo = () => {
    const styles = onboardingStyles();
    const {logo, overlayBg, carBg}= assets;
    return (
        <ImageBackground resizeMode='cover' source={carBg} style={styles.container}>
                    <ImageBackground resizeMode='cover' source={overlayBg} style={styles.overLay}>
                        <View>
                            <View style={styles.logoContainer}>
                                <Image resizeMode='contain' source={logo} style={styles.carLogo} />
                            </View>
                        
                            <View style={styles.textContainer}>
                                <Text style={[styles.title,styles.title2]}>Let's Start</Text>
                                <Text style={[styles.title,styles.title2]}>A New Experience</Text>
                                <Text style={[styles.title,styles.title2]}>With Car Rental</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.infoTextContainer}>
                                <Text style={[styles.infoText]}>
                                    Discover your next adventure with Apex Drive Ltd. We’re
                                </Text>
                                <Text style={[styles.infoText]}>
                                    here to provide you with a seamless car rental experience.
                                </Text>
                                <Text style={[styles.infoText]}>
                                    Let’s get started on your journey.
                                </Text>
                                </View>
                                <Button onPress= {()=> 
                                {
                                    console.log('succescfully pressed the get started button');
                                    navigate('OnBoardingScreenTwo')
                                    console.log('failed to navigate to the onboarding screen two');
                                }} text="Get Started" buttonStyles={styles.buttonStyle} textStyles={styles.buttonText}/>
                        </View>
                    </ImageBackground>
                </ImageBackground>
    );
}


export default OnBoardingScreenTwo;
