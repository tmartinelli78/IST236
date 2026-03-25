import { View, Text, FlatList } from "react-native";
import { STATES } from "../data/dummy-data";
import StateGridTitle from "../components/StateGridTile";


function HomeScreen (props) {

    function renderStateItem(itemData){
        function pressHandler() {
            props.navigation.navigate("CampgroundsOverviewScreen", {
                stateId: itemData.item.id,
            })
        }

        return (
            <StateGridTitle
                name={itemData.item.name}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }

    
    return (
        <View>
            <FlatList 
                data={STATES}
                keyExtractor={(item) => {
                    return item.id
                }}
                renderItem={renderStateItem}
                //creating grid view
                numColumns={2}
            />
        </View>
    );
}

export default HomeScreen;