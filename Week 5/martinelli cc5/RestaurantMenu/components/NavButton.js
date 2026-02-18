import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from '../constants/colors';

//adding navbutton function
function NavButton(props) {
  return (
    //adding pressable
    <Pressable
        //including android ripple
      android_ripple={{ color: "grey" }}
      onPress={props.onPress}
    >
        {/* adding button container */}
        <View style={styles.buttonContainer}>
            {/* adding inn text container */}
            <View style={styles.textContainer}>
                {/* adding in button text */}
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </View>
    </Pressable>
  );
}

//exporting navbutton so other pages may use it
export default NavButton;

//adding in styling for navbutton
const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 4,
        borderColor: "#000000",
        borderRadius: 300,
        backgroundColor: Colors.primary800,
        width: "100%",
        paddingHorizontal: 10
    },
    text: {
        padding: 8,
        fontSize: 25,
        textAlign: "center",
        color: Colors.primary500,
        fontFamily: "hotelio"
    }

})