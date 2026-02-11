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
  Alert
} from "react-native";

import Item from "./components/Item";
import ItemInputModal from "./modals/ItemInputModal";

export default function App() {
  //create state management variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [shoppingItems, setShoppingItems] = useState([]); //setting this to a lis with []
  const [currentID, setCurrentID] = useState(0);

  //create modal scree handler functions
  function startAddItemHandler() {
    setModalIsVisible(true);
  }

  function endAddItemHandler() {
    setModalIsVisible(false);
  }

  function addItemHandler(enteredItemText) {
    //using enteredItemText
    //appending entered item to list (shoppingitems)
    setShoppingItems((currentShoppingItems) => {
      return [
        ...currentShoppingItems, //the ... flattens the list and gives back just the items
        { text: enteredItemText, id: currentID },
      ]; //for shorthand notation--> remove curly braces around return/and return itself.
      //It automatically assumes it just goes to that
    });
    setCurrentID(currentID + 1);
    endAddItemHandler();
  }

  function deleteItemHandler(id){
    Alert.alert("Delete Item",
      "Are you sure you want to delete?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Confirm",
          style: "default",
          onPress: () => {
            //taking current item from shoppingItems
            setShoppingItems((currentShoppingItems) => {
              //locating current item id to make sure it is not displayed
              return currentShoppingItems.filter((item) => item.id !== id);
            })
          }
        }
      ]

    )
  }

  return (
    <>
      {/* Set Status bar styling */}
      <StatusBar style="auto" />

      {/* Set SafeAreaView Screen container */}
      <SafeAreaView style={styles.appContainer}>
        {/* set title container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
        </View>

        {/* Set add item button container */}
        <View style={styles.buttonContainer}>
          <Pressable
            //add the android ripple
            android_ripple={{ color: "#0cc58d" }}
            //style button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            //When pressed, open modal screen
            onPress={startAddItemHandler}
          >
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>Add New Item</Text>
            </View>
          </Pressable>
        </View>

        {/* Set Item to get title container */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Items To Get:</Text>
        </View>

        {/* Set List of items container */}
        <View style={styles.listContainer}>
          <FlatList
            data={shoppingItems}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            //passing in itemdata to render
            renderItem={(itemData) => {
              //telling it to go to itemData list and render what is currently looked at
              return <Item text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteItemHandler}/>; //this is pulling the text from what we are looking at
            }}
          />
        </View>

        <ItemInputModal onAddItem={addItemHandler} onCancel={endAddItemHandler} visible={modalIsVisible}/>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#0cc58d",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    padding: 5,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    fontSize: 40,
    color: "#0cc58d",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  addButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0cc58d",
  },
  pressedButton: {
    opacity: 0.8,
  },
  subtitleContainer: {
    height: 50,
    margin: 10,
    justifyContent: "center",
    padding: 5,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  subtitle: {
    fontSize: 30,
    color: "#0cc58d",
  },
  listContainer: {
    flex: 7,
    width: "90%",
    alignItems: "center",
    borderRadius: 20,
  },
  listText: {
    fontSize: 20,
    color: "black",
  }
});
