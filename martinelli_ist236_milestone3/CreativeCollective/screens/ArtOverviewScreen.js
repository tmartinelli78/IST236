import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ART_STYLES, ARTWORKS } from "../data/art_data"; 
import ArtItem from "../components/Lists/ArtItem";
import Colors from "../constants/colors";

function ArtOverviewScreen(props) {
  const styleId = props.route.params.styleId;

  useLayoutEffect(() => {
    const style = ART_STYLES.find((style) => style.id === styleId);
    props.navigation.setOptions({ 
      title: style ? style.title : "Art Gallery",
      headerTintColor: Colors.accent500,
    });
  }, [styleId, props.navigation]);

  const displayedArt = ARTWORKS.filter((artItem) => {
    return artItem.styleIds.indexOf(styleId) >= 0;
  });

  function renderArtItem(itemData) {
    const artItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      artist: itemData.item.artist,
      year: itemData.item.year, 
      listIndex: itemData.index,
    };

    return <ArtItem {...artItemProps} />;
  }

  return (
    <LinearGradient 
      colors={[Colors.primary500, Colors.primary800]} 
      style={styles.container}
    >
      <View style={styles.listWrapper}>
        <FlatList 
          data={displayedArt} 
          keyExtractor={(item) => item.id} 
          renderItem={renderArtItem} 
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
}

export default ArtOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
});
