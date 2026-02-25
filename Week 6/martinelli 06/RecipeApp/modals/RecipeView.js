import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet, Text, Modal } from "react-native";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function RecipeView(props) {
  //set safeareascreenboundaries
  const insets = useSafeAreaInsets();

  return (
    //setting modal to visible
    <Modal visible={props.visible} animationType="slide">
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
        {/* adding in user entered title to page */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        {/* adding in user entered text to page */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>

        {/* adding in nav button to go back to recipes */}
        <View style={styles.navButtonContainer}>
          <NavButton onNext={props.onClose}>Return to Recipes</NavButton>
        </View>
      </View>
    </Modal>
  );
}

// exporting so that it may be used 
export default RecipeView;

 const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.primary800,
        alignItems: "center"
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontFamily: "paperNoteSketch",
        color: Colors.primary500
    },
    textContainer: {
        flex: 5,
        width: "90%",
        borderWidth: 3,
        borderColor: Colors.accent500,
        padding: 10,
    },
    text: {
        color: Colors.primary500,
        fontSize: 20,
        fontFamily: "paperNote",
    },
    navButtonContainer: {
        marginTop: 10,
        flex: 1,
    },
 })