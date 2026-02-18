import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
        textAlign: "center",
        color: Colors.accent200,
        fontFamily: "hotelio"
    }
})