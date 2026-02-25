
import { StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors';

//function to display title
function Title(props){
                //Whatever is entered between brackets is child
    return <Text style={styles.title}>{props.children}</Text>
}

//exporting title component so other pages may use it
export default Title;

//adding styles to page
const styles = StyleSheet.create({
    title: {
        fontSize: 60,
        color: Colors.primary300,
        textShadowColor: Colors.accent800,
        textShadowRadius: 25,
        textAlign: "center",
        fontFamily: "noteFont"
    }
})