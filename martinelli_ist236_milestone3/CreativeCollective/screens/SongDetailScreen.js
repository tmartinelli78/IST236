import { useLayoutEffect, useContext } from "react";
import { SONGS } from "../data/song_data";
import FavoriteButton from "../components/FavoriteButton";
import { ImageBackground, StyleSheet, View, Image, Text, Pressable, Linking } from "react-native";
import Colors from "../constants/colors";
import LineSeparator from "../components/LineSeparator"; 
import { Entypo } from "@expo/vector-icons";
import { BookmarksContext } from "../store/context/bookmarks-context"; 

function SongDetailScreen(props) {
  const bookmarkCtx = useContext(BookmarksContext);
  const songId = props.route.params?.songId;
  const selectedSong = SONGS.find((song) => String(song.id) === String(songId));
  const isBookmarked = bookmarkCtx.ids.includes(songId);

  function headerButtonPressHandler() {
    if (isBookmarked) {
      bookmarkCtx.removeFavorite(songId);
    } else {
      bookmarkCtx.addFavorite(songId);
    }
  }

  if (!selectedSong) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: Colors.accent800 }}>Loading song details...</Text>
      </View>
    );
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => (
        <FavoriteButton
          pressed={isBookmarked}
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [props.navigation, isBookmarked]); 

  return (
    <ImageBackground
      source={require("../assets/images/musicbackground.jpg")}
      resizeMode="cover"
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedSong?.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.artist}>{selectedSong?.artist}</Text>
          <Text style={styles.titles}>{selectedSong?.title}</Text>
          
          <View style={styles.rowContainer}>
            <Text numberOfLines={1} style={styles.album}>
              Album: {selectedSong?.album}
            </Text>
            <Text numberOfLines={1} style={styles.year}>
              Year: {selectedSong?.releaseYear}
            </Text>
          </View>
          
          <Text numberOfLines={1} style={styles.producer}>
            Produced By: {selectedSong?.producer}
          </Text>
          <Text numberOfLines={1} style={styles.label}>
            Label: {selectedSong?.label}
          </Text>

          <LineSeparator />

          <View style={styles.rowContainer}>
            <Pressable onPress={() => selectedSong?.youtubeUrl && Linking.openURL(selectedSong.youtubeUrl)}>
              <Entypo name="youtube" size={60} color={Colors.accent200} />
            </Pressable>
            <Pressable onPress={() => selectedSong?.spotifyUrl && Linking.openURL(selectedSong.spotifyUrl)}>
              <Entypo name="spotify" size={60} color={Colors.accent200} />
            </Pressable>
            <Pressable onPress={() => selectedSong?.internal && Linking.openURL(selectedSong.internal)}>
              <Entypo name="folder-music" size={60} color={Colors.accent200} />
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
export default SongDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backgroundImage: {
    opacity: 0.1,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1, 
    alignItems: "center"
  },
  rowContainer: {
    paddingTop: 10,
    flexDirection: "row",
    width: '100%',
    justifyContent: "space-between"
  },
  titles: {
    fontSize: 24,
    color: Colors.accent800,
    fontFamily: "zyra",
    textAlign: 'center'
  },
  artist: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 30,
    fontFamily: "zyra",
    color: Colors.accent500
  },
  album: {
    paddingRight: 5,
    maxWidth: "70%",
    color: Colors.accent800,
    fontSize: 17,
    fontFamily: "zyra",
  },
  year: { 
    color: Colors.accent800,
    fontSize: 17,
    fontFamily: "zyra"
  },
  producer: {
    width: "100%",
    textAlign: "left",
    color: Colors.accent800,
    fontFamily: "zyra",
    fontSize: 12,
  },
  label: {
    width: "100%",
    textAlign: "left",
    color: Colors.accent800,
    fontFamily: "zyra",
    fontSize: 12,
    paddingBottom: 10,
  }
});