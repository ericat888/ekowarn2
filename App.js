import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Apps/Screens/LoginScreen';
// import {ClerkProvider} from '@clerk/clerk-expo';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './Apps/Navigators/TabNavigation';


export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_cGVyZmVjdC1sYW1wcmV5LTY1LmNsZXJrLmFjY291bnRzLmRldiQ'>
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto" />
      <SignedIn>
        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
        </SignedIn>
        <SignedOut>
        <LoginScreen/>
        </SignedOut>
    </View>
    </ClerkProvider>
  );
}
