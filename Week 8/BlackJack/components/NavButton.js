import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "../constants/colors";

function NavButton(props) {
  const { width, height } = useWindowDimensions();

  //if in portrait mode, base size on screen width
  let size = width * 0.05;

  //if in landscape mode, base size on screen height
  if (width > height) {
    size = height * 0.1;
  }
  return (
    <Pressable android_ripple={{ color: "grey" }} onPress={props.onPress}>
      <View
        style={[
          styles.buttonContainer,
          { width: width * 0.4, borderRadius: width * 0.4 },
        ]}
      >
        <View style={styles.textContainer}>
          <Text style={[styles.text, { fontSize: size }]}>
            {props.children}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: Colors.primary500,
    borderRadius: 300,
    backgroundColor: Colors.accent800,
    width: "100%",
    paddingHorizontal: 10,
  },
  textContainer: {},
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "poker",
  },
});
