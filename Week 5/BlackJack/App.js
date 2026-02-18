import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from './constants/colors';
import Title from './components/Title';
import NavButton from './components/NavButton';
import StartGameScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() { 
  //set up custom fonts
  const [fontsLoaded] = useFonts({
    'poker': require("./assets/fonts/Poker.ttf"),
    'pokerGeneral': require("./assets/fonts/PokerKings-Regular.ttf")
  })

  //st state variable to determinw which screento be on
  const [currentScreen, setCurrentScreen] = useState("start");

  if (!fontsLoaded) {
    return null; 
  }

  function newGameHandler() { 
    setCurrentScreen("game");
  }

  function gameOverHandler(){
    setCurrentScreen("gameOver");
  }

  function restartHandler(){
    setCurrentScreen("start");
  }

  let screen = <StartGameScreen onNext={newGameHandler}/>;

  if (currentScreen === "game"){
    screen = <GameScreen onNext={gameOverHandler} />;
  }

  if (currentScreen === "gameOver"){
    screen = <GameOverScreen onNext={restartHandler}/>;
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
    backgroundColor: Colors.accent500
  },
});
