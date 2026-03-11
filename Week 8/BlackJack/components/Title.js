import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from '../constants/colors';


function Title(props){
    const { width, height } = useWindowDimensions();

    //if in portrait mode, base size on screen width
    let size = width * 0.2

    //if in landscape mode, base size on screen height
    if (width > height){
        size = height * 0.12
    }
                                    //Whatever is entered between brackets is child
    return <Text style={[styles.title, {fontSize: size}]}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: Colors.primary500,
        fontFamily: "poker"
    }

})