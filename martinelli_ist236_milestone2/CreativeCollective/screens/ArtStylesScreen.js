import { View, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ART_STYLES } from "../data/art_data";
import ArtStyleGridTile from "../components/ArtStyleGridTile";
import Colors from "../constants/colors";

function ArtStylesScreen(props) {
  function renderArtStyleItem(itemData) {
    function pressHandler() {
      props.navigation.navigate("ArtOverview", {
        styleId: itemData.item.id,
      });
    }

    return (
      <ArtStyleGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.primary800]}
      style={styles.container}
    >
      <View style={styles.container}>
        <FlatList
          data={ART_STYLES}
          keyExtractor={(item) => item.id}
          renderItem={renderArtStyleItem}
          numColumns={2}
        />
      </View>
    </LinearGradient>
  );
}

export default ArtStylesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
