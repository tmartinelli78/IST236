import { useLayoutEffect, useContext } from "react";
import { ARTWORKS } from "../data/art_data";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/colors";
import LineSeparator from "../components/LineSeparator";
import FavoriteButton from "../components/FavoriteButton";
import { BookmarksContext } from "../store/context/bookmarks-context";

function ArtDetailScreen(props) {
  const bookmarkCtx = useContext(BookmarksContext);
  
  const artId = props.route.params.artId;
  const selectedArt = ARTWORKS.find((art) => art.id === artId);
  
  const isFavorite = bookmarkCtx.ids.includes(artId);

  function toggleFavoriteHandler() {
    if (isFavorite) {
      bookmarkCtx.removeFavorite(artId);
    } else {
      bookmarkCtx.addFavorite(artId);
    }
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedArt.title,
      headerRight: () => (
        <FavoriteButton
          pressed={isFavorite}
          onPress={toggleFavoriteHandler}
        />
      ),
    });
  }, [props.navigation, isFavorite, selectedArt.title]);

  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.primary800]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedArt.imageUrl }} style={styles.image} />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{selectedArt.title}</Text>
          <Text style={styles.artist}>{selectedArt.artist}</Text>

          <View style={styles.rowContainer}>
            <Text style={styles.styleText}>Style: {selectedArt.style}</Text>
            <Text style={styles.year}>Year: {selectedArt.year}</Text>
          </View>

          <Text style={styles.medium}>Medium: {selectedArt.medium}</Text>

          <LineSeparator />

          <Text style={styles.description}>{selectedArt.description}</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default ArtDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  imageContainer: {
    height: 300,
    width: "100%",
    marginBottom: 20,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontFamily: "zyra",
    color: Colors.accent500,
    textAlign: "center",
  },
  artist: {
    fontSize: 20,
    color: Colors.primary300,
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  styleText: {
    color: Colors.primary300,
    fontSize: 16,
  },
  year: {
    color: Colors.accent200,
    fontSize: 16,
    fontWeight: "bold",
  },
  medium: {
    width: "100%",
    color: Colors.primary300,
    fontSize: 14,
    fontStyle: "italic",
  },
  description: {
    color: Colors.primary300,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 15,
  },
});
