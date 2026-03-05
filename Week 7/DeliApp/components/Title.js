import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

//function to display title
function Title(props) {
  //Whatever is entered between brackets is child
  return <Text style={styles.title}>{props.children}</Text>;
}

//exporting title component so other pages may use it
export default Title;

//adding styles to page
const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: Colors.primary500,
    textAlign: "center",
  },
});
