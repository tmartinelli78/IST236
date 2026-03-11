import { StyleSheet, Text, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

//function to display title
function Title(props) {
  const { width, height } = useWindowDimensions();

  return (
    <Text style={[styles.title, { fontSize: width * 0.13 }]}>
      {props.children}
    </Text>
  );
}

//exporting title component so other pages may use it
export default Title;

//adding styles to page
const styles = StyleSheet.create({
  title: {
    fontFamily: "hotel",
    color: Colors.primary500,
    textAlign: "center",
  },
});
