import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingScreen from './src/screens/onboarding/onboardingScreen';
import OnBoardingScreenTwo from './src/screens/onboarding/onboardingScreenTwo';
import SigninScreen from './src/screens/signin/signinScreen'
import {AppNavigator} from './src/navigators/appNavigator'

export default function App() {
  return (
      <SafeAreaView style={{flex:1}}>
        <AppNavigator/>
           {/* <OnboardingScreen />  */}
          {/* <OnBoardingScreenTwo /> */}
          {/* <SigninScreen /> */}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
