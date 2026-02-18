import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, Linking, Pressable } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";


function HomeScreen(props) {
  //set safe area screen boundary
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        //giving an array of styles
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* creating title for page */}
      <View style={styles.titleContainer}>
        {/* adding title */}
        <Title>Olive Garden</Title>
      </View>

      {/* adding image container */}
      <View style={styles.imageContainer}>
        {/* adding image to page */}
        <Image
          style={styles.image}
          source={require("../assets/images/olivegarden.png")}
        />
      </View>

      {/* adding info text container */}
      <View style={styles.infoContainer}>
        {/* adding info text phone number */}
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:8439033630")}
        >
          843-903-3630
        </Text>

        {/* adding info text address */}
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/g4q7v76c4EfqCd5q6")
          }
        >
          73 Rodeo Dr{"\n"}Myrtle Beach{"\n"}SC 29579
        </Text>

        {/* adding info text webpage link */}
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("https://www.olivegarden.com/locations/sc/myrtle-beach/myrtle-beach-near-carolina-forest-and-conway/4452?cmpid=br:og_ag:ie_ch:loc_ca:OGGMB_sn:gmb_gt:myrtle-beach-sc-4452_pl:locurl_rd:1793")}
        >
          www.olivegarden.com
        </Text>
      </View>

          {/* adding in nav button container */}
      <View style={styles.buttonContainer}>
        {/* adding text to nav button */}
        <NavButton onPress={props.onNext}>View Menu</NavButton>
      </View>
    </View>
  );
}

//exporting so it can be imported
export default HomeScreen;

// adding styles to page
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 5,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 400,
    borderRadius: 5
  },
  infoContainer: {
    flex: 3,
    justifyContent: "center",
    paddingTop: 5,
  },
  infoText: {
    fontSize: 38,
    textAlign: "center",
    padding: 7,
    color: Colors.accent200,
    fontFamily: "hotelio",
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 10
  }
});
