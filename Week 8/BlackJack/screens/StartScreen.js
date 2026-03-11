import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet, Text, Image, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";

function startGameScreen(props) {
  //set safe area screen boundaries
  const inset = useSafeAreaInsets();

  const { width, height } = useWindowDimensions();


  return (
    <LinearGradient
    colors={[Colors.accent800, Colors.accent200, Colors.accent800, Colors.accent200, Colors.accent800, Colors.accent200, ]}
    style={styles.rootContainer}>
      
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: inset.top,
            paddingBottom: inset.bottom,
            paddingRight: inset.right,
            paddingLeft: inset.left,
            height: height,
            width: width
          },
        ]}
      >
        <View style={[styles.titleContainer, {height: height * 0.15}]}>
          <Title>BlackJack 21</Title>
        </View>

        <View style={[styles.imageContainer, {height: height * 0.5}]}>
          <Image
            style={styles.image}
            source={require("../assets/images/blackjackbg.png")}
          />
        </View>

        <View style={[styles.buttonContainer, {height: height * 0.15}]}>
          <NavButton onPress={props.onNext}>Play Now</NavButton>
        </View>
      </View>
    </LinearGradient>
  );
}

export default startGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: "100%",
    resizeMode: "contain",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
