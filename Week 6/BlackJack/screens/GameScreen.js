import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import NavButton from "../components/NavButton";
import Header from "../components/Header";
import Cards from "../constants/cards";

function generateRandonBetween(min, max, exclude) {
  //getting all cards crom cards file
  const cardKeys = Object.keys(Cards);
  //getting random number that is * difference of max and min, plus min
  const rndNum = Math.floor(Math.random() * (max - min)) + min; //flooring it to make an integer

  //grabbing card name using cardkeys
  const cardName = cardKeys[rndNum];

  //checking if exclude includes card mentioned
  if (exclude.includes(cardName)) {
    return generateRandonBetween(min, max, exclude);
  } else {
    //if not included, name is generated
    return cardName;
  }
}

function GameScreen(props) {
  //set safe area screen boundaries
  const inset = useSafeAreaInsets();

  //set state variables for drawn cards
  const [drawnCards, setDrawnCards] = useState([]);
  const [userHand, setUserHand] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [numUserHand, setNumUserHand] = useState(0);
  const [computerHand, setComputerHand] = useState([]);
  const [computerScore, setComputerScore] = useState(0);
  const [userFinished, setUserFinished] = useState(false);

  //creating function to allow user to draw cards from deck
  function drawUserCardHandler() {
    //Generate a random card name
    let userCard = generateRandonBetween(0, 52, drawnCards);

    //set card as drawn from the deck
    setDrawnCards((prevDrawnCards) => {
      return [userCard, ...prevDrawnCards]; //... is the syntax to spread something !!!
    });

    //Set the card in the user hand
    setUserHand((prevUserCards) => {
      return [userCard, ...prevUserCards];
    });

    //set the number of cards in players hand
    setNumUserHand(userHand.length);

    //calculate the new score for the user to see if the card will make the player bust
    if (Cards[userCard].value + userScore > 21) {
      //CARDS is the dictionary, userCard is the actual card
      //if the new card will make the player bust, check to see if there are any aces in the users hand
      //Ace of Clubs
      if (userHand.includes("aceClubs")) {
        //change aceClubs to lowAceClubs
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceClubs")] = "lowAceClubs";
          return newUserCards;
        });

        //changing user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
      } //Ace of Diamonds
      else if (userHand.includes("aceDiamonds")) {
        //change aceDiamonds to lowAceDiamonds
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceDiamonds")] = "lowAceDiamonds";
          return newUserCards;
        });

        //changing user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
      } //Ace of Hearts
      else if (userHand.includes("aceHearts")) {
        //change aceDiamonds to lowAceDiamonds
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceHearts")] = "lowAceHearts";
          return newUserCards;
        });

        //changing user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
      } //Ace of Spades
      else if (userHand.includes("aceSpades")) {
        //change aceDiamonds to lowAceDiamonds
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceSpades")] = "lowAceSpades";
          return newUserCards;
        });

        //changing user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
      } //No Aces
      else {
        //if the player has no aces then add score and they bust
        setUserScore((prevUserScore) => {
          return prevUserScore + Cards[userCard].value;
        });
      }
    } //else statement incase user does not bust
    else {
      //if player wont bust, add score like normal
      setUserScore((prevUserScore) => {
        return prevUserScore + Cards[userCard].value;
      });
    }
  }

  function drawComputerCardHandler() {
    //Generate a random card name
    let computerCard = generateRandonBetween(0, 52, drawnCards);

    //set card as drawn from the deck
    setDrawnCards((prevDrawnCards) => {
      return [computerCard, ...prevDrawnCards]; //... is the syntax to spread something !!!
    });

    //Set the card in the computer hand
    setComputerHand((prevComputerCards) => {
      return [computerCard, ...prevComputerCards];
    });

    //calculate the new score for the computer to see if the card will make the computer bust
    if (Cards[computerCard].value + computerScore > 21) {
      //CARDS is the dictionary, userCard is the actual card
      //if the new card will make the computer bust, check to see if there are any aces in the computer hand
      //Ace of Clubs
      if (computerHand.includes("aceClubs")) {
        //change aceClubs to lowAceClubs
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceClubs")] =
            "lowAceClubs";
          return newComputerCards;
        });

        //changing computer score
        setComputerHand((prevComputerCards) => {
          return prevComputerCards - 10 + Cards[computerCard].value;
        });
      } //Ace of Diamonds
      else if (computerHand.includes("aceDiamonds")) {
        //change aceDiamonds to lowAceDiamonds
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceDiamonds")] =
            "lowAceDiamonds";
          return newComputerCards;
        });

        //changing computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
      } //Ace of Hearts
      else if (computerHand.includes("aceHearts")) {
        //change aceDiamonds to lowAceDiamonds
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceHearts")] =
            "lowAceHearts";
          return newComputerCards;
        });

        //changing computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
      } //Ace of Spades
      else if (computerHand.includes("aceSpades")) {
        //change aceDiamonds to lowAceDiamonds
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceSpades")] =
            "lowAceSpades";
          return newComputerCards;
        });

        //changing computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
      } //No Aces
      else {
        //if the computer has no aces then add score and they bust
        setComputerScore((prevComputerScore) => {
          return prevComputerScore + Cards[computerCard].value;
        });
      }
    } //else statement incase user does not bust
    else {
      //if computer wont bust, add score like normal
      setComputerScore((prevComputerScore) => {
        return prevComputerScore + Cards[computerCard].value;
      });
    }
  }

  //hook that will occur only when the page is added to the UI
  useEffect(() => {
    setUserHand([]);
    setComputerHand([]);
    setDrawnCards([]);
    setNumUserHand(0);
    setUserScore(0);
    setComputerScore(0);
    setUserFinished(false);

    //draw initial two cards for user and computer
    drawComputerCardHandler();
    drawComputerCardHandler();
    drawUserCardHandler();
    drawUserCardHandler();
  }, []); //Since no dependencies only resolves when gamescreen is added to UI

  //hook that will trigger when the user score changes to check to see if the user busts
  useEffect(() => {
    if (userScore > 21) {
      props.onSetUserScore(userScore);
      props.onSetComputerScore(computerScore);
      props.onNext();
    }
  }, [userScore]); //Dependent on userScore and will active when userScore changes

  useEffect(() => {
    if (userFinished === true && computerScore > 16) {
      props.onSetUserScore(userScore);
      props.onSetComputerScore(computerScore);
      props.onNext();
    }
  }, [userFinished, computerScore]);

  //function that handles the user finishing the game and adding cards to computers hand
  function stayHandler() {
    //set user finished to true
    setUserFinished(true);

    //Attempt to add up to 10 cards to the computers hand
    if (computerScore <= 16) {
      //wait for the draw handler to complete before continuing the loop
      drawComputerCardHandler();
    }
  }

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: inset.top,
          paddingBottom: inset.bottom,
          paddingRight: inset.right,
          paddingLeft: inset.left,
        },
      ]}
    >
      <View style={styles.headerContainer}>
        <Header>Computer's Hand</Header>
      </View>

      <View style={styles.computerImageContainer}>
        <Image
          style={styles.computerImage}
          source={require("../assets/images/cardback2.png")}
        />
        <Image
          style={styles.computerImage}
          source={
            computerHand.length === 0
              ? require("../assets/images/cardback2.png")
              : Cards[computerHand[1]].picture
          }
        />
      </View>

      <View style={styles.headerContainer}>
        <Header>Player's Hand</Header>
      </View>

      <View style={styles.playerImageContainer}>
        {userHand.map((index) => {
          return (
            <Image
              style={[styles.playerImage, {width: 100 - numUserHand * 10 }]}
              key={index}
              source={
                userHand.length === 0
                  ? require("../assets/images/cardback2.png")
                  : Cards[index].picture
              }
            />
          );
        })}
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <NavButton onPress={drawUserCardHandler}>Hit Me!</NavButton>
        </View>
        <View style={styles.buttonContainer}>
          <NavButton onPress={stayHandler}>Stay!</NavButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  computerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  computerImage: {
    height: 150,
    width: 100,
    resizeMode: "contain",
  },
  playerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  playerImage: {
    height: 150,
    width: 100,
    resizeMode: "contain",
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
    marginBottom: 25,
  },
});
