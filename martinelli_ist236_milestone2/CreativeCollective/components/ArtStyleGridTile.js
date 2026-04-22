import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";

function ArtStyleGridTile(props) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={props.onPress}
      >
        <LinearGradient
          colors={[props.color, Colors.primary500]}
          style={styles.innerContainer}
        >
          <Text style={styles.title}>{props.title}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

export default ArtStyleGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: Colors.primary500,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: "zyra",
    color: Colors.primary300,
    textAlign: "center",
  },
});
