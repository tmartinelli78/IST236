import { Entypo } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function FavoriteButton(props) {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Entypo
        name={props.pressed ? "star" : "star-outlined"}
        size={35}
        color={props.pressed ? Colors.accent500 : Colors.accent200}
      />
    </Pressable>
  );
}

export default FavoriteButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
