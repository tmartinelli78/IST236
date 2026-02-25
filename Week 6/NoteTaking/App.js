import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./constants/colors";
import AddNoteScreen from "./screens/AddNoteScreen";
import HomeScreen from "./screens/HomeScreen";
import NotesScreen from "./screens/NotesScreen";
import notesScreen from "./screens/NotesScreen";

export default function App() {
  // Loading in fonts required
  const [fontsLoaded] = useFonts({
    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
  });

  // keeping track of current screen
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  const [currentNotes, setCurrentNotes] = useState([
    //creating default state
    {
      //creating dictionary with keys for flatlist later
      id: 1,
      title: "To Do List",
      text: "1. Do Homework\n2. Clean Car\n3. Pay Bills\n4. Make Dinner",
    },
    {
      id: 2,
      title: "To Do List v2",
      text: "1. Do Homework\n2. Clean Car\n3. Pay Bills\n4. Make Dinner",
    },
  ]);

  //creating homescreenhandler function
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  //creating notescreenhandler function
  function notesScreenHandler() {
    setCurrentScreen("notes");
  }

  //creating addnotescreenhandler function
  function addNotesScreenHandler() {
    setCurrentScreen("add");
  }

  //creating addnotehandler function and requiring two parameters
  function addNoteHandler(enteredNoteTitle, enteredNoteText) {
    //setting currentNote(and checking for existing notes first) and adding anoyn function
    setCurrentNotes((currentNotes) => {
      //returning dictionary of notes
      return [
        //...expands the list
        ...currentNotes,
        { id: currentID, title: enteredNoteTitle, text: enteredNoteText },
      ];
    });
    // incrementing id
    setCurrentID(currentID + 1);
    //taking back to notes screen
    notesScreenHandler();
  }

  //creating function to handle deleting notes
  function deleteNoteHandler(id) {
    //requiring id
    //using setcurrentnotes and attaching anoyn function that displays currentnotes first
    setCurrentNotes((currentNotes) => {
      //returning currentnotes and filtering id
      return currentNotes.filter((item) => {
        //goes through each item and drops item if false (if )
        return item.id !== id;
      });
    });
  }

  let screen = <HomeScreen onNext={notesScreenHandler} />;

  //if statement to check and see what screen is displayed
  if (currentScreen === "add") {
    //assigning to screen to next proper screen
    screen = (
      <AddNoteScreen onAdd={addNoteHandler} onCancel={notesScreenHandler} />
    );
  }

  //if statement to check and see what screen is displayed
  if (currentScreen === "notes") {
    //assigning to screen to next proper screen
    screen = (
      <NotesScreen
        onHome={homeScreenHandler}
        onAdd={addNotesScreenHandler}
        onDelete={deleteNoteHandler}
        currentNotes={currentNotes}
      />
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
