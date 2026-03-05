import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useMemo, useCallback } from "react";
import Colors from "./constants/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import OrderReviewScreen from "./screens/OrderReview";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

export default function App() {
  //set up custom fonts
  const [fontsLoaded, fontError] = useFonts({
    note: require("./assets/fonts/Note.ttf"),
  });

  //waiting for fonts to load before moving to home screen
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  //adding in all bicycle states provided
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary800,
        color: Colors.primary800,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary800,
        color: Colors.primary800,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary800,
        color: Colors.primary800,
      },
    ],
    [],
  );

  const [repairTimeId, setRepairTimeId] = useState(0);
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  const [newsLetter, setNewsLetter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  //creating function for services
  function setServicesHandler(id) {
    //going into setServices and checking for previouslt selected services
    setServices((prevServices) =>
      //mapping previous services
      prevServices.map((item) =>
        //checking if id is same as one clicked, if yes update it, if not then dont update
        item.id === id ? { ...item, value: !item.value } : item,
      ),
    );
  }

  //creating function for newsletter switch
  function setNewsLetterHandler() {
    //selecting and flipping to only other state
    setNewsLetter((previous) => !previous);
  }

  //creating function for rentalmembership switch
  function setRentalMembershipHandler() {
    //selecting and flipping to only other state
    setRentalMembership((previous) => !previous);
  }

  //setting screen handler for home screen
  function homeScreenHandler() {
    //reseting information
    setCurrentPrice(0);
    //setting current screen
    setCurrentScreen("home");
  }
  //Creating screen handler for orderreview page
  function orderReviewHandler() {
    //setting starting price for services
    let price = 0;

    //looping through services
    for (let i = 0; i < services.length; i++) {
      //if services is selected add value to price
      if (services[i].value) {
        //adding service price to total
        price = price + services[i].price;
      }
    }

    //checking if newsletter is selected
    if (newsLetter) {
      //adding no price because its free
      price = price + 0;
    }

    //checking if rental membership is selected
    if (rentalMembership) {
      //adding 100 to price
      price = price + 100;
    }

    //adding service time fee to price
    price = price + repairTimeRadioButtons[repairTimeId].price;

    //setting current price
    setCurrentPrice(price);

    //setting current screen to review
    setCurrentScreen("review");
  }
  //setting default screen for when app opens
  let screen = (
    <HomeScreen
      repairTimeId={repairTimeId}
      services={services}
      newsLetter={newsLetter}
      rentalMembership={rentalMembership}
      repairTimeRadioButtons={repairTimeRadioButtons}
      onSetRepairTimeId={setRepairTimeId}
      onSetServices={setServicesHandler}
      onSetNewsLetter={setNewsLetterHandler}
      onSetRentalMembership={setRentalMembershipHandler}
      onNext={orderReviewHandler}
    />
  );

  //setting current screen
  if (currentScreen == "review") {
    screen = (
      <OrderReviewScreen
        //displaying all information selected
        repairTime={repairTimeRadioButtons[repairTimeId].value}
        services={services}
        newsLetter={newsLetter}
        rentalMembership={rentalMembership}
        price={currentPrice}
        onNext={homeScreenHandler}
      />
    );
  }

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    alignItems: "center",
    justifyContent: "center",
  },
});
