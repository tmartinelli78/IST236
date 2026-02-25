import { Button, View, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

//adding function to handle recipe items
function RecipeItem(props) {
  return (
    //adding item
    <View style={styles.item}>
      {/* adding user entered item title */}
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{props.title}</Text>
      </View>
      {/* adding buttons for to view or delete saved recipes */}
      <View style={styles.itemButtonsContainer}>
        <View style={styles.button}>
          <Button title="View" onPress={props.onView}/>
        </View>
        <View style={styles.button}>
          <Button title="Delete" onPress={props.onDelete}/>
        </View>
      </View>
    </View>
  );
}

// exporting so that other pages may import and use it
export default RecipeItem;

// adding styles to page
const styles= StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 8,
        borderRadius: 6,
        backgroundColor: Colors.accent500
    },
    itemTitleContainer: {
        justifyContent: "center",
    },
    itemTitle: {
        fontFamily: "paperNoteBold",
        fontSize: 20,
        color: Colors.primary300,
        padding: 8,
    },
    itemButtonsContainer: {
        flexDirection: "row"
    },
    button: {
        marginVertical: 5,
        marginHorizontal: 3,
    },
})