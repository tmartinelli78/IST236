import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

//importing MovieItem.js to use data
import MovieItem from "./components/MovieItem";

export default function App() {
  //adding movie data
  const [movieItems, setMovieItems] = useState([
    {
      name: "Avatar",
      image: require("./assets/images/avatarposter.jpg"),
      rating: "9.8",
    },
    {
      name: "Avatar: Way of the Water",
      image: require("./assets/images/avatarwater.jpg"),
      rating: "7.6",
    },
    {
      name: "Lion King",
      image: require("./assets/images/lionking.jpg"),
      rating: "8",
    },
    {
      name: "Spirited Away",
      image: require("./assets/images/spiritedaway.jpg"),
      rating: "8.8",
    },
    {
      name: "Ghost in the Shell",
      image: require("./assets/images/ghostshell.jpg"),
      rating: "9.7",
    },
    {
      name: "The End of Evangelion",
      image: require("./assets/images/evangelion.jpg"),
      rating: "7.5",
    },
    {
      name: "Twilight",
      image: require("./assets/images/twilight.jpg"),
      rating: "6.3",
    },
    {
      name: "Interstellar",
      image: require("./assets/images/interstellar.jpg"),
      rating: "9.7",
    },
    {
      name: "Kiki's Delivery Service",
      image: require("./assets/images/kiki.jpg"),
      rating: "7.5",
    },
    {
      name: "Princess Mononoke",
      image: require("./assets/images/mononoke.jpg"),
      rating: "8.5",
    },
  ]);

  return (
    //adding gradient to background
    <LinearGradient
      //specifying colors
      colors={["#00076f", "#9269c6", "#ffa8bd"]}
      style={{ flex: 1 }} // flex 1 to make it cover the whole screen
    >
      <>
        {/* adding in statusbar and setting to auto */}
        <StatusBar style="auto" />
        <SafeAreaView style={styles.rootContainer}>
          <View style={styles.titleContainer}>
            {/* adding title to app */}
            <Text style={styles.title}>Top 10 Movies</Text>
          </View>
          {/* creating scrollview area for items to display */}
          <View style={styles.listContainer}>
            <ScrollView>
              {/* creating anoyn function that displays items */}
              {movieItems.map((itemData) => (
                <MovieItem
                  key={itemData.name}
                  name={itemData.name}
                  image={itemData.image}
                  rating={itemData.rating}
                />
              ))}
            </ScrollView>
          </View>
        </SafeAreaView>
      </>
    </LinearGradient>
  );
}

// creating all styling for app
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 25,
    borderWidth: 5,
    borderRadius: 80,
    borderStyle: 'dashed',
    borderColor: "#f3849e",
    backgroundColor: "#f1c3ce",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 8,
    width: "80%",
  },
});
