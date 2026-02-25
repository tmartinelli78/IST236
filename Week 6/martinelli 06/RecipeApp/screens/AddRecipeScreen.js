import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import Title from "../components/Title";
import { TextInput } from "react-native";
import { useState } from "react";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import RecipeScreen from "./RecipeScreen";

//props bc you are passing children to it
function addRecipeScreen(props) {
  //set safeareascreenboundaries
  const insets = useSafeAreaInsets();

  //adding constant variables
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeText, setRecipeText] = useState("");

  //function to add recipe
  function addRecipeHandler() {
    //adding recipetitle and recipetext to onAdd
    props.onAdd(recipeTitle, recipeText);
    //onCancel to handle cancel recipe button
    props.onCancel();
  }

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
        <Title>Add New Recipe</Title>
      </View>

      {/* adding scroll container to help view text */}
      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.recipeTitleContainer}>
            {/* adding in user text input */}
            <TextInput
            // placeholder till user enters text
              placeholder="Enter Note Title Here"
              style={styles.recipeTitle}
              // setting recipe title to user entered text
              onChangeText={setRecipeTitle}
            />
          </View>

        {/* adding in user entered text for recipe */}
          <View style={styles.recipeTextContainer}>
            <TextInput
            // placeholder till user enters recipe text
              placeholder="Enter Recipe Text Here"
              style={styles.recipeText}
              //setting recipetext to user entered text
              onChangeText={setRecipeText}
              textAlignVertical="top"
              //allowing for multiple lines of text
              multiline={true}
              numberOfLines={20}
            />
          </View>

          {/* adding in navbuttons for submit and cancel buttons */}
          <View style={styles.navButtonContainer}>
            <View style={styles.navButton}>
              <NavButton onNext={addRecipeHandler}>Submit</NavButton>
            </View>
            <View style={styles.navButton}>
              <NavButton onNext={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

// exporting page so it can be used
export default addRecipeScreen;

// adding in styles to page
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 50,
  },
  scrollContainer: {
    flex: 5,
  },
  recipeTitleContainer: {
    borderWidth: 3,
    backgroundColor: Colors.primary300,
  },
  recipeTitle: {
    color: Colors.accent800,
    fontWeight: "bold",
    fontSize: 30
  },
  recipeTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.primary300,
    alignItems: "flex-start",
  },
  recipeText: {
    color: Colors.primary800,
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  navButton: {
    marginHorizontal: 10,
  }
});
