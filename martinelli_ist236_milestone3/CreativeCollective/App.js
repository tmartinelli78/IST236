import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useCallback } from "react";
import BookmarksContextProvider from "./store/context/bookmarks-context";
import Colors from "./constants/colors";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import ArtNewsScreen from "./screens/ArtNewsScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import ArtStylesScreen from "./screens/ArtStylesScreen";
import ArtOverviewScreen from "./screens/ArtOverviewScreen";
import ArtDetailScreen from "./screens/ArtDetailScreen";
import GenresScreen from "./screens/GenresScreen";
import SongsOverviewScreen from "./screens/SongsOverviewScreen";
import SongDetailScreen from "./screens/SongDetailScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="MainTabs"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "nolluqa",
          fontSize: 40,
        },
        sceneContainerStyle: { backgroundColor: Colors.primary300 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="MainTabs"
        component={TabsNavigator}
        options={{
          title: "Creative Collective",
          drawerLabel: "All Hubs",
          drawerIcon: ({ color, size }) => (
            <Entypo name="grid" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Bookmarks"
        component={BookmarkScreen}
        options={{
          title: "Saved Items",
          drawerLabel: "My Bookmarks",
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
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ArtTab"
        component={ArtStylesScreen}
        options={{
          tabBarLabel: "Art Gallery",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="palette" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="MusicTab"
        component={GenresScreen}
        options={{
          tabBarLabel: "Music Hub",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="library-music" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="NewsTab"
        component={ArtNewsScreen}
        options={{
          tabBarLabel: "Art News",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="news" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    zyra: require("./assets/fonts/ITZYRAVELLEDEMO-Regular.otf")
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
        <BookmarksContextProvider>
          <NavigationContainer onReady={onLayoutRootView}>
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
              <Stack.Screen name="ArtOverview" component={ArtOverviewScreen} />
              <Stack.Screen name="ArtDetail" component={ArtDetailScreen} />
              <Stack.Screen
                name="SongsOverview"
                component={SongsOverviewScreen}
              />
              <Stack.Screen name="SongDetail" component={SongDetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </BookmarksContextProvider>
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
