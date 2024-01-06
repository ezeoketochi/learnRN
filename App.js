import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import LoginScreen from './App/Screen/LoginScreen/LoginScreen.jsx';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation.jsx';
import * as Location from 'expo-location';
import { UserLocationContext } from './App/Context/UserLocationContext.jsx';


SplashScreen.preventAutoHideAsync();


export default function App() {

  const [fontsLoaded] = useFonts({
    'outfit-black': require('./assets/fonts/Outfit-Black.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-extrabold': require('./assets/fonts/Outfit-ExtraBold.ttf'),
    'outfit-extralight': require('./assets/fonts/Outfit-ExtraLight.ttf'),
    'outfit-light': require('./assets/fonts/Outfit-Light.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-regular': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-semibold': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-thin': require('./assets/fonts/Outfit-Thin.ttf'),
  });

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      console.log(location);
    })();
  }, []);

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location != null) {
  //   text = JSON.stringify(location);
  // }


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const tokenCache = {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={'pk_test_c3VpdGFibGUtd2FsbGFieS03Mi5jbGVyay5hY2NvdW50cy5kZXYk'}>
        <UserLocationContext.Provider value = {{location, setLocation}}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
        <StatusBar style="default" />
      </View>
      </UserLocationContext.Provider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: '#fff',
  },
 
});
