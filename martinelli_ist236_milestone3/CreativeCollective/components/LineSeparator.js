import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function LineSeparator() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
}

export default LineSeparator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.accent500,
    marginVertical: 15,
    borderRadius: 5,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
  },
});
