import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useLayoutEffect, useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { NEWS } from "../data/news_data";
import FavoriteButton from "../components/FavoriteButton"; 
import Colors from "../constants/colors";
import { BookmarksContext } from "../store/context/bookmarks-context";
import LineSeparator from "../components/LineSeparator";

function NewsDetailScreen(props) {
  const bookmarkedNewsCtx = useContext(BookmarksContext);
  const newsId = props.route.params.newsId;
  const selectedNews = NEWS.find((news) => news.id === newsId);
  const newsIsBookmarked = bookmarkedNewsCtx.ids.includes(newsId);

  function changeBookmarkStatusHandler() {
    if (newsIsBookmarked) {
      bookmarkedNewsCtx.removeFavorite(newsId);
    } else {
      bookmarkedNewsCtx.addFavorite(newsId);
    }
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => (
        <FavoriteButton 
          pressed={newsIsBookmarked} 
          onPress={changeBookmarkStatusHandler} 
        />
      ),
    });
  }, [props.navigation, newsIsBookmarked, changeBookmarkStatusHandler]);

  if (!selectedNews) {
    return (
      <View style={styles.rootContainer}>
        <Text style={{color: 'white', textAlign: 'center', marginTop: 50}}>News not found.</Text>
      </View>
    );
  }

  return (
    <LinearGradient colors={[Colors.primary500, Colors.primary800]} style={styles.rootContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: selectedNews.imageUrl }} />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{selectedNews.headline}</Text>
          
          <Text style={styles.details}>
            {selectedNews.date} | {selectedNews.author}
          </Text>
          <Text style={styles.agency}>{selectedNews.agency}</Text>

          <LineSeparator />

          <Text style={styles.description}>{selectedNews.description}</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default NewsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    marginBottom: 15,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  headline: {
    color: Colors.accent500,
    fontSize: 28,
    fontFamily: "zyra",
    textAlign: "center",
    marginBottom: 10,
  },
  details: {
    color: Colors.primary300,
    fontSize: 16,
    fontFamily: "zyra",
    marginBottom: 2,
  },
  agency: {
    color: Colors.accent200,
    fontSize: 14,
    fontFamily: "zyra",
    marginBottom: 15,
  },
  description: {
    color: Colors.primary300,
    fontSize: 16,
    fontFamily: "zyra",
    lineHeight: 24,
    textAlign: "justify",
    marginTop: 10,
  },
});
