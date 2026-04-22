import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function NewsItem(props) {
  const navigation = useNavigation();

    function selectedNewsHandler() {
      navigation.navigate("NewsDetail", {
        newsId: props.id,
      });
    }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable onPress={selectedNewsHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{props.headline}</Text>
          <Text style={styles.space}>
            {props.date} | {props.author} | {props.agency}{" "}
          </Text>

          <Text style={styles.description}>
            {props.description}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default NewsItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    height: 300
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
    width: '100%'
  },
  infoContainer: {
    flex: 1,
    alignItems: "center"
  },
  headline: {
    fontSize: 35,
    fontFamily: "zyra",
    paddingBottom: 5
  },
  space: {
    fontSize: 25,
    fontFamily: "zyra",
    paddingBottom: 5
  },
  description: {
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "zyra",
    paddingBottom: 5
  }
});
