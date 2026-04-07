import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { NEWS } from "../data/dummy_data";
import List from "../components/Lists/List";
import Colors from "../constants/colors";

function BookmarksScreen() {
  const bookmarkedListingsCtx = useContext(BookmarksContext);
  const bookmarkedListings = NEWS.filter((newsItem) => {
    return bookmarkedListingsCtx.ids.includes(newsItem.id);
  });

  if (bookmarkedListings.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>There are no saved listings yet!</Text>
      </View>
    );
  } else {
    return <List items={bookmarkedListings} />;
  }
}

export default BookmarksScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 24,
    fontFamily: "playfairBold",
    color: Colors.primary300,
  },
});
