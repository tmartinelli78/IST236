import { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { NEWS } from "../data/news_data";
import { ARTWORKS } from "../data/art_data";
import { SONGS } from "../data/song_data";
import ArtItem from "../components/Lists/ArtItem";
import SongItem from "../components/SongItem";
import NewsItem from "../components/Lists/NewsItem";
import Colors from "../constants/colors";

function BookmarkScreen() {
  const bookmarkCtx = useContext(BookmarksContext);

  const bookmarkedNews = NEWS.filter((item) =>
    bookmarkCtx.ids.includes(item.id),
  );
  const bookmarkedArt = ARTWORKS.filter((item) =>
    bookmarkCtx.ids.includes(item.id),
  );
  const bookmarkedMusic = SONGS.filter((item) =>
    bookmarkCtx.ids.includes(item.id),
  );

  const allFavorites = [
    ...bookmarkedNews.map((item) => ({ ...item, category: "news" })),
    ...bookmarkedArt.map((item) => ({ ...item, category: "art" })),
    ...bookmarkedMusic.map((item) => ({ ...item, category: "music" })),
  ];

  if (allFavorites.length === 0) {
    return (
      <LinearGradient
        colors={[Colors.primary500, Colors.primary800]}
        style={styles.emptyContainer}
      >
        <Text style={styles.emptyText}>
          You haven't saved any masterpieces yet.
        </Text>
      </LinearGradient>
    );
  }

  function renderBookmarkItem(itemData) {
    const item = itemData.item;

    if (item.category === "art") {
      return (
        <ArtItem
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          artist={item.artist}
          year={item.year}
          listIndex={itemData.index}
        />
      );
    }

    if (item.category === "music") {
      return (
        <SongItem
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          artist={item.artist}
          releaseYear={item.releaseYear}
          listIndex={itemData.index}
        />
      );
    }

    return (
      <View style={styles.newsPlaceholder}>
        <Text style={styles.newsText}>{item.headline}</Text>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.primary800]}
      style={styles.root}
    >
      <FlatList
        data={allFavorites}
        keyExtractor={(item) => item.id}
        renderItem={renderBookmarkItem}
        contentContainerStyle={styles.listPadding}
      />
    </LinearGradient>
  );
}

export default BookmarkScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: Colors.primary300,
    fontSize: 18,
    fontFamily: "zyra",
  },
  listPadding: {
    padding: 16,
  },
  newsPlaceholder: {
    padding: 15,
    backgroundColor: Colors.primary500o8,
    borderRadius: 8,
    marginVertical: 5,
  },
  newsText: {
    color: Colors.accent500,
    fontWeight: "bold",
  },
});
