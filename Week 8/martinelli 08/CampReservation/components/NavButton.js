import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
} from "react-native";
import Colors from "../constants/colors";

//adding navbutton function
function NavButton(props) {
    //adding in usewindowdimensions and setting equal to width and height
  const { width, height } = useWindowDimensions();
  return (
    //adding pressable
    <Pressable
      onPress={props.onPress}
      //adding in styling for pressed
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      {/* adding button container */}
      <View style={styles.buttonContainer}>
        {/* adding inn text container */}
        <View style={styles.textContainer}>
          {/* adding in button text */}
          <Text style={[styles.text, { fontSize: width * 0.07 }]}>
            {props.children}
          </Text>
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
    width: 1000,
    maxWidth: "70%",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pressedItem: {
    opacity: 0.8,
  },
  text: {
    padding: 8,
    fontFamily: "campground",
    textAlign: "center",
    color: Colors.primary300,
  },
});
