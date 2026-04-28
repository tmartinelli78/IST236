import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import Colors from "../../constants/colors";

function ArtItem(props) {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.itemContainer,
        {
          backgroundColor:
            props.listIndex % 2 === 0 ? Colors.primary500o8 : "transparent",
        },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => navigation.navigate("ArtDetail", { artId: props.id })}
      >
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <View style={styles.infoContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {props.title}
            </Text>
            <View style={styles.innerRowContainer}>
              <Text style={styles.artist}>Artist: {props.artist}</Text>
              <Text style={styles.year}>{props.year}</Text>
            </View>
            <Text style={styles.subDetail}>View details & history</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default ArtItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 15,
  },
  title: {
    fontFamily: "zyra",
    fontSize: 18,
    color: Colors.accent500,
  },
  artist: {
    fontSize: 14,
    color: Colors.primary300,
  },
  year: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.accent200,
  },
  innerRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  subDetail: {
    fontSize: 12,
    fontStyle: "italic",
    color: Colors.primary300o5,
    marginTop: 5,
  },
});
