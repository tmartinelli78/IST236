import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import MenuItems from "../components/MenuItems";

function MenuScreen(props) {
  //set safe area screen boundary
  const insets = useSafeAreaInsets();

  //adding list of menu items to display
  const [menuItems, setMenuItems] = useState([
    {
      name: "Toasted Ravioli",
      image: require("../assets/images/toastedRav.png"),
      price: "$9.79",
      id: 1,
    },
    {
      name: "Soup",
      image: require("../assets/images/chickenalfredo.png"),
      price: "$8.79",
      id: 2,
    },
    {
      name: "Chicken Alfredo",
      image: require("../assets/images/chickenalfredo.png"),
      price: "$19.99",
      id: 3,
    },
    {
      name: "Chicken Parmigiana",
      image: require("../assets/images/chickenparmig.png"),
      price: "$11.99",
      id: 4,
    },
    {
      name: "Tiramisu",
      image: require("../assets/images/tiramisu.png"),
      price: "$8.99",
      id: 5,
    },
  ]);

  return (
    <View
      style={[
        //giving an array of styles
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* adding title container to page */}
      <View style={styles.titleContainer}>
        {/* adding title to page */}
        <Title style={styles.title}>Menu</Title>
      </View>

      {/* adding list container to page */}
      <View style={styles.listContainer}>
        {/* adding flatlist to display all items from list */}
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id.toString()}
          alwaysBounceVerticalIndicated={false}
          renderItem={(itemData) => {
            return (
              //displaying items and using menuitems.js component
              <MenuItems
                name={itemData.item.name}
                image={itemData.item.image}
                price={itemData.item.price}
              />
            );
          }}
        />
      </View>

      {/* adding in nav button container */}
      <View style={styles.buttonContainer}>
        {/* adding nav button */}
        <NavButton onPress={props.onNext}>Home Page</NavButton>
      </View>
    </View>
  );
}

// exporting menuscreen so other screens may import
export default MenuScreen;

// adding styling to page
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: 400,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    width: "95%"
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20
  },
});
