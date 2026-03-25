import { View, Text, FlatList } from "react-native";
import { COUNTRIES } from "../data/dummy-data";
import CountryGridTitle from "../components/CountryGridTile";


function HomeScreen (props) {

    function renderCountryItem(itemData){
        function pressHandler() {
            props.navigation.navigate("VacationDestinationsOverview", {
                countryId: itemData.item.id,
            })
        }

        return (
            <CountryGridTitle
                name={itemData.item.name}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }

    
    return (
        <View>
            <FlatList 
                data={COUNTRIES}
                keyExtractor={(item) => {
                    return item.id
                }}
                renderItem={renderCountryItem}
                //creating grid view
                numColumns={2}
            />
        </View>
    );
}

export default HomeScreen;