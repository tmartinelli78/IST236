import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  FlatList,
} from "react-native";

function Item(props) {
  return (
    <View style={styles.item}>
      <Pressable
        android_ripple={{ color: "#0cc58d" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.itemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  item: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#fff",
    width: 400,
  },
  pressedItem: {
    opacity: 0.5,
  },
  itemText: {
    color: "#0cc58d",
    padding: 8,
  },
});
