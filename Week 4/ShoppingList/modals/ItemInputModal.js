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

function ItemInputModal(props) {
  const [enteredItemText, setEnteredItemText] = useState("");

  function itemInputHandler(enteredText) {
    setEnteredItemText(enteredText);
  }

  function addItemHandler() {
    props.onAddItem(enteredItemText);
    setEnteredItemText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/ShoppingCart.png")}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Enter Item Here"
            onChangeText={itemInputHandler}
            value={enteredItemText}
          />

          <View style={styles.modalButtonContainer}>
            <View style={styles.modalButton}>
              <Button
                title="Add Item"
                color="#f3adf0"
                onPress={addItemHandler}
              />
            </View>
            <View style={styles.modalButton}>
              <Button title="Cancel" color="#f3adf0" onPress={props.onCancel} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default ItemInputModal;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#0cc58d",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  inputContainer: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    width: "70%",
    borderRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#f3adf0",
    backgroundColor: "#f3adf0",
    borderRadius: 6,
    width: "100%",
    padding: 12,
  },
  modalButtonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  modalButton: {
    width: "30%",
    marginHorizontal: 8,
  },
});
