import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../constants/colors";

//adding navbutton function
function NavButton(props) {
  return (
    //adding pressable
    <Pressable
      onPress={props.onPress}
      //adding android ripple to give visual response to being click
      androind_ripple={{ color: Colors.primary800 }}
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
    backgroundColor: Colors.primary500,
    borderRadius: 300,
    width: 300,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pressedItem: {
    opacity: 0.8,
  },
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    color: Colors.accent500,
  },
});
