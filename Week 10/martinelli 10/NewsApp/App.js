import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookmarkScreen from "./screens/BookmarkScreen";
import ArtNewsScreen from "./screens/ArtNewsScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import USNewsScreen from "./screens/USNewsScreen";
import WorldNewsScreen from "./screens/WorldNewsScreen";
import Colors from "./constants/colors";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useCallback } from "react";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="News"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "nolluqa",
          fontSize: 40,
          colors: Colors.accent800,
        },
        sceneContainerStyle: { backgroundColor: Colors.primary300 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="News"
        component={TabsNavigator}
        options={{
          title: "All News",
          drawerLabel: "All News",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="BookmarkedNews"
        component={BookmarkScreen}
        options={{
          title: "Saved News",
          drawerLabel: "Saved News",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "playfairBold",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      <Tabs.Screen
        name="ArtNews"
        component={ArtNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-paint" size={size} color={color} />
          ),
          tabBarLabel: "Art News",
        }}
      />
      <Tabs.Screen
        name="USNews"
        component={USNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="flag" size={size} color={color} />
          ),
          tabBarLabel: "US News",
        }}
      />
      <Tabs.Screen
        name="World News"
        component={WorldNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="globe" size={size} color={color} />
          ),
          tabBarLabel: "World News",
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    playfair: require("./assets/fonts/Playfair.ttf"),
    playfairBold: require("./assets/fonts/PlayfairBold.ttf"),
    playfairItalic: require("./assets/fonts/PlayfairBoldItalic.ttf"),
    nolluqa: require("./assets/fonts/NolluqaRegular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="DrawerScreen"
            screenOptions={{
              headerTintColor: Colors.primary300,
              headerStyle: { backgroundColor: Colors.primary500 },
              contentStyle: { backgroundColor: Colors.primary300o5 },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NewsDetail"
              component={NewsDetailScreen}
              options={{
                headerBackTitleVisible: false,
              }}
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
