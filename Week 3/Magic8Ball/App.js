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
} from "react-native";

export default function App() {
  //creating state management variables
  const [modalIsVisible, setModalIsVisible] = useState(false); //modal should not be immediately visible
  const [userQuestion, setUserQuestion] = useState(""); //setting to blank for uesr inputs
  const [eightBallResponse, setEightBallResponse] = useState(1);
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  //create modal screen handler function
  function startAskQuestionHandler(){
    setModalIsVisible(true);
  }

  //function to close modal screen
  function endAskQuestionHandler(){
    setUserQuestion("");
    setModalIsVisible(false);
  }

  //function to generate random 8ball reponse
  function onAskQuestion() {
    // creating ballreponse var and setting equal to randomly generated response
    const ballResponse = Math.floor(Math.random() * responses.length);
    //setting seteightballresponse equal to ballresponse (randomly generated response from provided ones)
    setEightBallResponse(ballResponse);

    //running startaskquestionhandler
    startAskQuestionHandler();
  }

  return (
    <>
    {/* Set status bar styling */}
    <StatusBar style="auto" />

    {/* Set safeareaview screen container */}
    <SafeAreaView style={styles.appContainer}>

      {/* creating title for page */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Magic 8Ball</Text>
      </View>

      {/* creating area for user input */}
      <View style={styles.userInputContainer}>
        {/* text area to notify user to enter question */}
        <Text style={styles.userInputLabel}>Please Enter in Your Question</Text>
        {/* creating area for text input */}
        <TextInput style={styles.userInput} 
          //placeholder text till they enter question
          placeholder="Enter in your question"
          //when text changes, set equal to setuserquestion
          onChangeText={setUserQuestion}
          //assigning it to value of userquestion
          value={userQuestion}
        />
      </View>

      {/* creating view area for submit button */}
      <View style={styles.buttonContainer}>
          <Pressable
            //add the android ripple
            android_ripple={{ color: "#c7b6d4" }}
            //style button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            //When pressed, open modal screen
            onPress={onAskQuestion}
          >
            <View style={styles.askButton}>
              {/* text for button */}
              <Text style={styles.askButtonText}>Ask Question</Text>
            </View>
          </Pressable>
        </View>


        {/* creating modal screen  */}
      <Modal visible={modalIsVisible} animationType="slide">
        <SafeAreaView style={styles.appContainer}>

           {/* creating area to display entered user question */}
           <View style={styles.modalUserQuestionContainer}>
            {/* label for user question */}
            <Text style={styles.userQuestionLabel}>Your Question:</Text>
            {/* displaying user question entered back to user */}
            <Text style={styles.modalUserQuestion}>{userQuestion}</Text>
           </View>

           {/* creating area for random 8ball reponse */}
           <View style={styles.modalResponseContainer}>
            {/* label for random 8ball response */}
            <Text style={styles.responseLabel}>Magic 8Ball Response:</Text>
            {/* displaying random 8ball response to user */}
            <Text style={styles.modalResponse}>{responses[eightBallResponse]}</Text>
           </View>

           {/* creating area for close button */}
          <View style={styles.modalButtonContainer}>
            <Pressable
              //add the android ripple
              android_ripple={{ color: "#c7b6d4" }}
              //style button when pressed
              style={({ pressed }) => pressed && styles.pressedButton}
              //When pressed, close modal screen
              onPress={endAskQuestionHandler}
            >
              <View style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </View>
            </Pressable>
          </View>

        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  </>
  );
}


//all styles!!
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#410b6d',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 90,
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    padding: 5,
    paddingHorizontal: 70,
    backgroundColor: "#e2cdf3",
    borderRadius: 15,
  },
  title: {
    fontSize: 40,
    color: "#410b6d"
  },
  userInputContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 30,
    backgroundColor: "#e2cdf3",
    width: "90%",
    borderRadius: 20,
  },
  userInputLabel: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000"
  },
  buttonContainer: {
    flex: 6,
    marginTop: 5,
    justifyContent: "center"
  },
  askButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  askButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#410b6d"
  },
  pressedButton: {
    opacity: 0.8,
  },
  modalUserQuestionContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 30,
    backgroundColor: "#e2cdf3",
    width: "90%",
    borderRadius: 20,
  },
  modalUserQuestion: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    margin: 5,
  },
  userQuestionLabel: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#000"
  },
   modalResponseContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 30,
    backgroundColor: "#e2cdf3",
    width: "90%",
    borderRadius: 20,
  },
  modalResponse: {
    ontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  responseLabel: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#000"
  },
  modalButtonContainer: {
    flex: 6,
    marginTop: 5,
    justifyContent: "center"
  },
  closeButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 30
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#410b6d"
  },
});
