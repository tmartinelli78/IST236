import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar sytle="dark" />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/images/martinelliImagem.jpeg")}/>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Taylor Martinelli</Text>
          <Text style={styles.text}>taylormartinelli78@gmail.com</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:8433035248")}>(843)303-5248</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/tmartinelli78")}>github.com/tmartinelli78</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#84f1ff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 2,
    paddingTop: 30
  },
  Image: {
    height: 50,
    width: 15,
    resizeMode: "center",
    borderWidth: 45,
    borderColor: "#9f6adb"
  },
  informationContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    color: "#333333",
    fontStyle: "italic",
    marginBottom: 10
  }
});
