import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';
import Colors from '../constants/colors';

//creating function for how items will display
function MenuItems(props) {
    return(
        <View style={styles.itemContainer}>
            {/* adding in the title container */}
            <View style={styles.titleContainer}>
                {/* adding in the title */}
                <Text style={styles.title}>{props.name}</Text>
            </View>
            {/* adding in the image container */}
            <View style={styles.imageContainer}>
                {/* adding int image */}
                <Image style={styles.image} source={props.image} />
            </View>
            {/* adding in the price container */}
            <View style={styles.priceContainer}>
                {/* adding in the price */}
                <Text style={styles.price}>{props.price}</Text>
            </View>
        </View>
    )
}

//exporting components so that other pages may use it
export default MenuItems;

//adding style to page
const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20
    },
    titleContainer: {
        backgroundColor: Colors.primary800,
        borderWidth: 3,
        borderRadius: 5,
        marginBottom: 5
    },
    title: {
        fontSize: 50,
        textAlign: "center",
        fontFamily: "hotelio",
        color: Colors.accent500
    },
    imageContainer: {
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: "black",
        marginBottom: 5
    },
    image: {
        width: "100%",
        height: 250,
        resizeMode: "cover"
    },
    priceContainer: {
        backgroundColor: Colors.primary800,
        borderWidth: 3,
        borderRadius: 5,
    },
    price: {
        fontSize: 40,
        textAlign: "center",
        fontFamily: "hotelio",
        color: Colors.accent500
    }

})