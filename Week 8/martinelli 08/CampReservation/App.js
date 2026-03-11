import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Colors from "./constants/colors";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  //importing fonts
  const [fontsLoaded, fontError] = useFonts({
    campground: require("./assets/fonts/CookieCrisp-L36ly.ttf"),
  });

  //checking if fonts are loaded in
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  //setting screen to homescreen
  let screen = <HomeScreen />;

  //checking if either doesnt match
  if (!fontsLoaded && !fontError) {
    //returning null
    return null;
  } else {
    //if no errors returning screen display
    return (
      <>
        <StatusBar style="auto" />
          <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});
