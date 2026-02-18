import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import Colors from "./constants/colors";

export default function App() {
  //set up custom fonts
  const [fontsLoaded] = useFonts({
    hotelio: require("./assets/fonts/TheHotelio.ttf"),
  });

  //set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  if (!fontsLoaded) return null;

  //creating handlers for menuscreen
  function menuScreenHandler() {
    setCurrentScreen("menu");
  }

  //creating handlers for homescreen
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  //determine which screen to be on
  let screen = <HomeScreen onNext={menuScreenHandler} />;

  //if statement to check if currentscreen is equal to menu
  if (currentScreen === "menu") {
    //displaying homescreen for next onpress
    screen = <MenuScreen onNext={homeScreenHandler} />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}> {screen} </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.primary500,
    alignItems: "center",
    justifyContent: "center",
  },
});
