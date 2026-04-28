import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../constants/colors";
import GuestEntry from "../components/Lists/GuestEntryItem"; 

function HomeScreen() {
  const [enteredName, setEnteredName] = useState("");
  const [guestList, setGuestList] = useState([]);
  const [currentID, setCurrentID] = useState(0);

  function addGuestHandler() {
    if (enteredName.trim().length === 0) return;

    const timestamp = new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    setGuestList((currentGuests) => [
      ...currentGuests,
      { 
        text: enteredName, 
        id: currentID.toString(),
        date: timestamp
      },
    ]);

    setEnteredName("");
    setCurrentID((prevId) => prevId + 1);
    Keyboard.dismiss();
  }

  function deleteGuestHandler(id) {
    setGuestList((currentGuests) => {
      return currentGuests.filter((guest) => guest.id !== id);
    });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screen}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Creative Collective</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}></Text>
          </View>

          <View style={styles.logWrapper}>
            <View style={styles.logRectangle}>
              <FlatList
                data={guestList}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => (
                  <GuestEntry 
                    name={itemData.item.text}
                    id={itemData.item.id}
                    date={itemData.item.date}
                    onDeleteGuest={deleteGuestHandler}
                  />
                )}
                contentContainerStyle={styles.listContent}
              />
            </View>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.footerInstruction}>
              This is a guestbook; enter your name if you wish.
            </Text>

            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Name"
              placeholderTextColor={Colors.accent500}
              onChangeText={setEnteredName}
              value={enteredName}
            />

            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.pressed]}
              onPress={addGuestHandler}
            >
              <Text style={styles.buttonText}>SUBMIT TO GUESTBOOK</Text>
            </Pressable>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary300,
  },
  innerContainer: {
    flex: 1,
    paddingTop: 60,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontFamily: "zyra", 
    fontSize: 40,
    color: Colors.primary500,
  },
  descriptionContainer: {
    paddingHorizontal: 40,
    marginVertical: 10,
    minHeight: 20, 
  },
  descriptionText: {
    textAlign: "center",
    color: Colors.primary500,
    fontSize: 16,
    fontFamily: "zyra",
  },
  logWrapper: {
    flex: 1,
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  logRectangle: {
    flex: 1,
    backgroundColor: Colors.primary500, 
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.accent500,
    overflow: "hidden", 
  },
  listContent: {
    padding: 15,
  },
  footerContainer: {
    paddingBottom: 40,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  footerInstruction: {
    fontFamily: "zyra",
    fontSize: 13,
    color: Colors.accent800,
    marginBottom: 15,
    textAlign: "center",
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.accent500,
    backgroundColor: Colors.primary500,
    color: Colors.accent500, 
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "zyra",
  },
  button: {
    backgroundColor: Colors.accent500,
    width: "100%",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    color: Colors.primary800,
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
  pressed: {
    opacity: 0.7,
  },
});