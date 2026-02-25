import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../constants/colors";

//adding navbutton function
function NavButton(props) {
  return (
    //adding pressable
    <Pressable
      onPress={props.onNext}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      {/* adding button container */}
      <View style={styles.buttonContainer}>
        {/* adding inn text container */}
        <View style={styles.textContainer}>
          {/* adding in button text */}
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

//exporting navbutton so other pages may use it
export default NavButton;

//adding in styling for navbutton
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    width: 150,
    margin: 8,
    borderRadius: 6,
    backgroundColor: Colors.accent800,
  },
  pressedItem: {
    opacity: 0.8,
  },
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    fontFamily: "paperNoteBold",
    color: Colors.primary300,
  },
});
