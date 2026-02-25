import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Image, StyleSheet } from "react-native";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import RecipeScreen from "./RecipeScreen";
import addRecipeScreen from "./AddRecipeScreen";

//props bc you are passing children to it
function HomeScreen(props) {
  //set safeareascreenboundaries
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* adding title to page */}
      <View style={styles.titleContainer}>
        <Title>The Cook's Book!</Title>
      </View>

      {/* adding stock image to page */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/recipe.jpg")}
          style={styles.image}
        />
      </View>

      {/* adding nav button to page */}
      <View style={styles.navButtonContainer}>
        <NavButton onNext={props.onNext}>Go To Recipes</NavButton>
      </View>
    </View>
  );
}

//exporting so page may be used
export default HomeScreen;

//adding in styles to page
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    borderWidth: 4,
    borderRadius: 55,
    borderColor: Colors.accent500,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    resizeMode: "stretch",
  },
  navButtonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
