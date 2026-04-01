import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useLayoutEffect } from "react";
import { NEWS } from "../data/dummy_data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";

function NewsDetailScreen(props) {
  const newsId = props.route.params.newsId;
  const selectedNews = NEWS.find((news) => news.id === newsId);

  const [pressed, setPressed] = useState(false);

  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedNews.imageUrl }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.headline}>
          {selectedNews.headline}
        </Text>
        <Text style={styles.details}>
          {selectedNews.date} | {selectedNews.author} |{" "}
          {selectedNews.agency}
        </Text>


        <Text style={styles.description}>
            {selectedNews.description}
        </Text>
      </View>
    </View>
  );
}
export default NewsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
    width: '100%'
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
  },
  headline: {
    color: Colors.accent500,
    fontSize: 35,
    fontFamily: "playfairBold",
    paddingBottom: 5,
  },
  details: {
    color: Colors.accent500,
    fontSize: 25,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  description: {
    color: Colors.accent500,
    width: "90%",
    textAlign: "justify",
    fontSize: 15,
    fontFamily: "playfair",
  }
});
