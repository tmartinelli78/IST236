import { useLayoutEffect } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { GENRES, SONGS } from "../data/song_data";
import SongItem from "../components/SongItem";

function SongsOveviewScreen(props) {
  const genreId = props.route.params.genreId;

  useLayoutEffect(() => {
    const genre = GENRES.find((genre) => genre.id === genreId);
    props.navigation.setOptions({ title: genre ? genre.title : null });
  }, [genreId, props.navigation]);

  const displayedSongs = SONGS.filter((songItem) => {
    return songItem.genreIds.indexOf(genreId) >= 0;
  });

  function renderSongItem(itemData) {
    const songItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      artist: itemData.item.artist,
      duration: itemData.item.duration,
      releaseYear: itemData.item.releaseYear,
      listIndex: itemData.index,
    };

    return <SongItem {...songItemProps} navigation={props.navigation} />;
  }
  return (
    <ImageBackground
      source={require("../assets/images/musicbackground.jpg")}
      resizeMode="cover"
      style={styles.container}
      imageStyle={styles.ImageBackground}
    >
      <View>
        <FlatList
          data={displayedSongs}
          keyExtractor={(item) => item.id}
          renderItem={renderSongItem}
        />
      </View>
    </ImageBackground>
  );
}

export default SongsOveviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
