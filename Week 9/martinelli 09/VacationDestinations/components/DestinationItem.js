import { useState } from "react";
import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";
import ImageViewModal from "../modal/ImageViewModal";

function DestinationItem(props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function viewImageHandler() {
    setModalIsVisible(true);
  }

  function closeImageHandler() {
    setModalIsVisible(false);
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? Colors.accent300 : Colors.accent300o75 },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: Colors.primary300 }}
        onPress={viewImageHandler}
      >
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{props.name}</Text>
            {/* <View style={styles.innerRowContainer}> */}
              <Text style={styles.sites}>Average Cost to visit: {props.avgCost}</Text>
              <Text style={styles.year}>Founded: {props.foundedYear}</Text>
            {/* </View> */}
            <Text style={styles.rating}>Rating: {props.rating} / 5;</Text>
          </View>
        </View>
      </Pressable>

      <ImageViewModal
        isVisible={modalIsVisible}
        imageUrl={props.imageUrl}
        onClose={closeImageHandler}
      />
    </View>
  );
}

export default DestinationItem;


const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#ccc",
        paddingHorizontal: 5,
        paddingTop: 3,
        marginBottom: 3,
        borderRadius: 7
    }, 
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    rowContainer: {
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    image: {
        width: "25%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 15,
    },
    infoContainer: {
        width: "70%",
        paddingLeft: 10,
    },
    name: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20,
    },
    sites: {
        width: "65%",
        fontSize: 14,
    },
    year: {
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 5,
    },
    innerRowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    rating: {
        fontSize: 13,
        fontStyle: "italic",
    },
})