import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import VacationDestinationsOverview from "./screens/VacationDestinationsOverview";
import Colors from "./constants/colors";

//creating variable to call stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  //import fonts
  const [fontsLoaded, fontError] = useFonts({
    mountain: require("./assets/fonts/Runethia.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        {/* building directory of pages */}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
              headerStyle: {backgroundColor: Colors.accent800},
              headerTintColor: Colors.primary300,
              headerTitleStyle: {fontFamily: "mountain", fontSize: 40},
              contentStyle: {backgroundColor: Colors.accent300}
            }}
          >
            <Stack.Screen
              //id name of the page
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Vacation Destinations",
              }}
            />
            <Stack.Screen
              name="VacationDestinationsOverview"
              component={VacationDestinationsOverview}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
