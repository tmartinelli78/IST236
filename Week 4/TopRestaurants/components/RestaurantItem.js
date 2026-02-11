import { Image, Text, View, StyleSheet } from "react-native";


function RestaurantItem(props) {
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

export default RestaurantItem; //means this is available to every other file

const styles = StyleSheet.create({
    itemContainer: {
        margin: 20
    },
    titleContainer: {
        backgroundColor: "#c387df",
        borderWidth: 3,
        borderRadius: 5
    },
    itemTitle: {
        fontSize: 30,
        textAlign: "center"
    },
    imageContainer: {
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 5
    },
    itemImage: {
        width: "100%",
        height: 200,
        resizeMode: "cover"
    },
    ratingContainer: {
        backgroundColor: "#c387df",
        borderWidth: 3,
        borderRadius: 5
    },
    itemRating: {
        fontSize: 30,
        textAlign: "center"
    }
});