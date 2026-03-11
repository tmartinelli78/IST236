import { StyleSheet, Text, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

//function to display title
function Title(props) {
  //adding in usewindowdimensions and setting equal to width and height
  const { width, height } = useWindowDimensions();

  return (
    //adding styling and fontsize to text
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
    fontFamily: "campground",
    color: Colors.primary500,
    textAlign: "center",
  },
});
