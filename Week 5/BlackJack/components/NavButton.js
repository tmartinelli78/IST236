import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from '../constants/colors';


function NavButton(props) {
  return (
    <Pressable
      android_ripple={{ color: "grey" }}
      onPress={props.onPress}
    >
        <View style={styles.buttonContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </View>
    </Pressable>
  );
}

export default NavButton;



const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 4,
        borderColor: Colors.primary500,
        borderRadius: 300,
        backgroundColor: Colors.accent800,
        width: "100%",
        paddingHorizontal: 10
    },
    textContainer: {

    },
    text: {
        padding: 8,
        fontSize: 25,
        textAlign: "center",
        color: Colors.primary500,
        fontFamily: "poker"
    }

})