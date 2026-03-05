import { Text, View, StyleSheet, ScrollView, Switch, ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function HomeScreen(props) {
  //setting safe area screen boundaries
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground source={require("../assets/images/background.jpg")}
    resizeMode="cover"
    style={styles.rootContainer}
    imageStyle={styles.backgroundImage}
    >
{/* creating view for rootcontainer */}
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Gear Guru</Title>
      </View>

      {/* adding scroll view area for all services */}
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.radioContainer}>
          <Text style={styles.radioHeader}>Service Times:</Text>
          <RadioGroup
            radioButtons={props.repairTimeRadioButtons}
            onPress={props.onSetRepairTimeId}
            selectedId={props.repairTimeId}
            layout="row"
            containerStyle={styles.radioGroup}
            labelStyle={styles.radioGroupLabels}
          />
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.checkBoxContainer}>
            <Text style={styles.checkBoxHeader}>Services:</Text>
            <View style={styles.checkBoxSubContainer}>
              {props.services.map((item) => {
                return (
                  <BouncyCheckbox
                    key={item.id}
                    text={item.name}
                    onPress={props.onSetServices.bind(this, item.id)}
                    textStyle={{
                      textDecorationLine: "none",
                      color: Colors.primary800,
                    }}
                    innerIconStyle={{
                      borderRadius: 0,
                      borderColor: Colors.primary800,
                    }}
                    iconStyle={{
                      borderRadius: 0,
                    }}
                    fillColor={Colors.primary800}
                    style={{
                      padding: 3,
                    }}
                  />
                );
              })}
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.addOnsContainer}>
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Join Newsletter Signup</Text>
                <Switch
                  onValueChange={props.onSetNewsLetter}
                  value={props.newsLetter}
                  thumbColor={
                    props.newsLetter ? Colors.primary300 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.accent300,
                    true: Colors.accent500,
                  }}
                />
              </View>
            </View>
            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>Join Rental Membership Signup</Text>
              <Switch
                onValueChange={props.onSetRentalMembership}
                value={props.rentalMembership}
                thumbColor={
                  props.rentalMembership ? Colors.primary300 : Colors.primary800
                }
                trackColor={{ false: Colors.accent300, true: Colors.accent500 }}
              />
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onNext}>Submit Order</NavButton>
        </View>

      </ScrollView>
    </View>
    </ImageBackground>
    
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    marginTop: 35,
    marginBottom: 30,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: Colors.primary800,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.primary800,
    fontFamily: "note"

  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabels: {
    fontSize: 15,
    colors: Colors.primary800,
    fontFamily: "note"
  },
  rowContainer: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  checkBoxContainer: {},
  checkBoxHeader: {
    fontSize: 20,
    color: Colors.primary800,
    fontFamily: "note"
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  addOnsContainer: {
    justifyContent: "space-between"
  },
  addOnsSubContainer: {
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center"
  },
  addOnsLabel: {
    color: Colors.primary800,
    fontSize: 20,
    fontFamily: "note"
  },
  buttonContainer: {
    alignItems: "center"
  },
  backgroundImage: {
  width: null,
  height: null,

},
});
