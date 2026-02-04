import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, Modal, TextInput} from "react-native";

export default function App() {
  //Setting max and min dice value
  const maxVal = 6;
  const minVal = 1;
  //Create state management variables
  const [dice1, setDice1] = useState(1); //usestate sets state and keeps track
  const [dice2, setDice2] = useState(2);
  const [modalIsVisible, setModalIsVisible] = useState(false); //modal should not immediately be visible
  const [userGuess, setUserGuess] = useState(""); //blank because we want user input
  const [userWager, setUserWager] = useState("");
  const [diceSum, setDiceSum] = useState(0);

  function startDiceRollHandler() {
    setModalIsVisible(true);
    setUserGuess("");
    setUserWager("");
  }

  function endDiceRollHandler() {
    setModalIsVisible(false);
  }

  function onDiceRoll() {
    const rndNum1 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    const rndNum2 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    setDice1(rndNum1);
    setDice2(rndNum2);

    let result = rndNum1 + rndNum2;
    setDiceSum(result);

    endDiceRollHandler();
  }

  //Dynamically determine what type of result text to display
  let resultText = (
    <Text style={styles.resultText}>Roll the Dice and Make a Wager</Text>
  )

  const userGuessNum = parseInt(userGuess);
  const userWagerNum = parseInt(userWager);
  const diceSumNum = parseInt(diceSum);
  if (userGuess !== "" && userGuessNum === diceSumNum) {
    resultText = <Text style={styles.resultText}>You Won ${(userWagerNum *5).toFixed(2)}</Text>
  }

  if (userGuess !== "" && userGuessNum !== diceSumNum) {
    resultText = <Text style={styles.resultText}>You Lost ${(userWagerNum)}</Text>
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleBackground}>
            <Text style={styles.title}>Dice Roller</Text>
          </View>
        </View>
        

        <View style={styles.rollButtonContainer}>
          <Pressable
          //add the android ripple
          android_ripple={{color: "#8587f1"}}
          //Style the button when pressed
          style={({pressed}) => pressed && styles.pressedButton}
          //When pressed, open modal screen
          onPress={startDiceRollHandler}
          >
            <View style={styles.rollButton}>
              <Text style={styles.rollButtonText}>Roll Dice</Text>
            </View>
          </Pressable>
          {/* <Button title="Roll Dice" style={styles.rollButton}/> */}
        </View>

        <View style={styles.diceContainer}>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>{dice1}</Text>
          </View>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>{dice2}</Text>
          </View>
        </View>

        <View style={styles.resultsContainer}>
          <Text style={styles.resultText}>The resulting dice roll is {diceSum}</Text>
        </View>

        <View style={styles.resultsContainer}>
          <Text style={styles.resultText}>{resultText}</Text>
        </View>


        <Modal visible={modalIsVisible}>
          <SafeAreaView style={styles.modalRoot}>
            <Text style={styles.inputLabel}>Guess the Roll Value:</Text>
            <TextInput style={styles.textInput}
            //placeholder for when its empty
            placeholder="Enter A Guess Between 2 and 12" 
            //set the keyboard type to number pad for only integers
            keyboardType="number-pad"
            
            //when the text is changed, update the userguess
            onChangeText={setUserGuess}
            //tie the entered value to the userguess
            // it is reset to blank the input field will also reset
            value={userGuess} /> 

            <Text style={styles.inputLabel}>What's Your Wager:</Text>
            <TextInput style={styles.textInput}
            //placeholder for when its empty
            placeholder="Enter Your Wager Here" 
            //set the keyboard type to number pad for only integers
            keyboardType="number-pad"
            
            //when the text is changed, update the userguess
            onChangeText={setUserWager}
            //tie the entered value to the userguess
            // it is reset to blank the input field will also reset
            value={userWager} /> 

            <View style={styles.modalButtoncontainer}>
              <View style={styles.modalButton}>
                <Button title="Roll Dice" onPress={onDiceRoll}/>
              </View>
              <View style={styles.modalButton}>
                <Button title="Cancel" onPress={endDiceRollHandler}/>
              </View>
            </View>
          </SafeAreaView>
        </Modal>


      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a4d9b",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  },
  titleContainer: {
    flex: .5,
    backgroundColor: "#b4c4e6",
    justifyContent: "center",
    borderWidth: 3,
    borderRadius: 20
  },
  titleBackgrond: {
    backgroundColor: "#b4c4e6",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7
  },
  title: {
    fontSize: 60,
    fontWeight: "bold"
  },
  rollButtonContainer: {
    flex: 1,
    justifyContent: "center",

  },
  pressedButton: {
    opacity: 0.8,
    borderWidth: 1,
    borderRadius: 11
  },
  rollButton: {
    backgroundColor: "#b4c4e6",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7
  },
  rollButtonText: {
    fontSize: 25,
    
  },
  diceContainer: {
    flex: 3,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    
  },
  dice: {
    backgroundColor: "#b4c4e6",
    borderWidth: 3,
    borderRadius: 7,
    margin: 20,
    width: 100,
    height: 100,
    justifyContent: "center", //main axis; coloumn: up down,
    alignItems: "center", //cross axis; column: side side
  },
  diceNumber: {
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic"
  },
  resultsContainer: {
    flex: 1,
    backgroundColor: "#2a4d9b"
  },
  resultText: {
    fontSize: 25
  },
  modalRoot: {
    flex: 1,
    backgroundColor: "#2a4d9b",
    alignItems: "center"
  },
  inputLabel: {
    fontSize: 25,
    color: "#fff",
    marginTop: 20,
  },
  textInput: {
    backgroundColor: "#dbcece",
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    marginBottom: 30,
  },
  modalButtoncontainer: {
    flexDirection: "row",
    marginTop: 16,
    
  },
  modalButton: {
    width: "25%",
    marginHorizontal: 8,
    borderWidth: 3,
    borderRadius: 7
  }
});
