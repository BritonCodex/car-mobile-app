import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingScreen from './src/screens/onboarding/onboardingScreen';
import OnBoardingScreenTwo from './src/screens/onboarding/onboardingScreenTwo';

export default function App() {
  return (
      <SafeAreaView style={{flex:1}}>
          <OnBoardingScreenTwo />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
