import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function BookmarkButton(props) {
  return (
    <Pressable 
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons 
        name={props.pressed ? "bookmark" : "bookmark-outline"} 
        size={30} 
        color={props.pressed ? Colors.accent500 : Colors.primary300} 
      />
    </Pressable>
  );
}

export default BookmarkButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
