import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";
import RecipeScreen from "./screens/RecipeScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";

export default function App() {
  // Loading in fonts required
  const [fontsLoaded] = useFonts({
    hotelio: require("./assets/fonts/TheHotelio.ttf"),
  });

  // keeping track of current screen
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  const [currentRecipes, setCurrentRecipes] = useState([
    //creating default state
    {
      //creating dictionary with keys for flatlist later
      id: 1,
      title: "Garlic Bread",
      text: "1. Preheat oven to 350F.\n2. Mix together garlic, butter, garlic powder, and parsley until fully combined.\n3. Slice bread.\n4. Apply garlic butter mix in even layer to bread.\n5. Place on baking sheet and bake in over for 10 minutes, or until top is golden brown.",
    },
  ]);

  //creating homescreenhandler function
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  //creating recipescreenhandler function
  function recipeScreenHandler() {
    setCurrentScreen("recipes");
  }

  //creating addrecipesscreenhandler function
  function addRecipesScreenHandler() {
    setCurrentScreen("add");
  }

  //creating addrecipeshandler function and requiring two parameters
  function addRecipesHandler(enteredRecipeTitle, enteredRecipeText) {
    //setting currentRecipes(and checking for existing recipes first) and adding anoyn function
    setCurrentRecipes((currentRecipes) => {
      //returning dictionary of recipes
      return [
        //...expands the list
        ...currentRecipes,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    // incrementing id
    setCurrentID(currentID + 1);
    //taking back to recipes screen
    recipeScreenHandler();
  }

  //creating function to handle deleting recipes
  function deleteRecipeHandler(id) {
    //requiring id
    //using setcurrentrecipes and attaching anoyn function that displays currentrecipes first
    setCurrentRecipes((currentRecipes) => {
      //returning currentrecipes and filtering id
      return currentRecipes.filter((item) => {
        //goes through each item and drops item if false (if )
        return item.id !== id;
      });
    });
  }

  let screen = <HomeScreen onNext={recipeScreenHandler} />;

  //if statement to check and see what screen is displayed
  if (currentScreen === "add") {
    //assigning to screen to next proper screen
    screen = (
      <AddRecipeScreen
        onAdd={addRecipesHandler}
        onCancel={recipeScreenHandler}
      />
    );
  }

  //if statement to check and see what screen is displayed
  if (currentScreen === "recipes") {
    //assigning to screen to next proper screen
    screen = (
      <RecipeScreen
        onHome={homeScreenHandler}
        onAdd={addRecipesScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
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

//adding styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
