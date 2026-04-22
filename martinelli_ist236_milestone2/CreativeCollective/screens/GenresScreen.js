import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GENRES } from "../data/song_data";
import GenreGridTile from "../components/GenreGridTile";
import Colors from "../constants/colors";

function GenresScreen(props) {
  function renderGenreItem(itemData) {
    function pressHandler() {
      props.navigation.navigate("SongsOverview", {
        genreId: itemData.item.id,
      });
    }
    return (
      <GenreGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        source={require("../assets/images/musicbackground.jpg")}
        resizeMode="cover"
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        {/* The Sleek Fade: This gradient sits on top of the image */}
        <LinearGradient
          colors={["transparent", Colors.primary800]}
          style={styles.gradientOverlay}
        >
          <FlatList
            data={GENRES}
            keyExtractor={(item) => item.id}
            renderItem={renderGenreItem}
            numColumns={2}
            contentContainerStyle={styles.listPadding}
          />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

export default GenresScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primary800,
  },
  imageBackground: {
    flex: 1,
  },
  image: {
    opacity: 0.6,
  },
  gradientOverlay: {
    flex: 1,
    paddingTop: 20,
  },
  listPadding: {
    paddingBottom: 20,
  },
});
