import { Image, Text, View, StyleSheet } from "react-native";

function MovieItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.itemTitle}>{props.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.itemImage} source={props.image} />
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.itemRating}>{props.rating} / 10</Text>
      </View>
    </View>
  );
}

export default MovieItem; //means this is available to every other file

const styles = StyleSheet.create({
  itemContainer: {
    margin: 20,
  },
  titleContainer: {
    backgroundColor: "#f1c3ce",
    borderWidth: 3,
    borderTopLeftRadius: 70,
    borderBottomRightRadius: 70,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "#000",
    borderStyle: 'dashed',
    borderColor: "#e96c8a",
    marginBottom: 5
  },
  itemTitle: {
    fontSize: 30,
    textAlign: "center",
    color: "#000000"
  },
  imageContainer: {
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: "#00FFFF",
    marginBottom: 5
  },
  itemImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  ratingContainer: {
    backgroundColor: "#97acf8",
    borderWidth: 3,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderStyle: 'dashed',
    borderColor: "#FFD700",
    marginBottom: 5
  },
  itemRating: {
    fontSize: 30,
    textAlign: "center",
  },
});
