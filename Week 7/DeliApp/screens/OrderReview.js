import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";

function OrderReviewScreen(props) {
  //set safe area screen boundaries
  const insets = useSafeAreaInsets();
  return (
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
      <View style={styles.titelContainer}>
        <Title>Order Summary</Title>
      </View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Your order has been placed with your order details below</Text>
      </View>

      <View style={styles.ingridientsContainer}>
        <Text style={styles.ingridient}>Sandwich Size:</Text>
        <Text style={styles.subIngridient}>{props.size}</Text>
        <Text style={styles.ingridient}>Bread:</Text>
        <Text style={styles.subIngridient}>{props.bread}</Text>
        <Text style={styles.ingridient}>Cheese:</Text>
        <Text style={styles.subIngridient}>{props.cheese}</Text>
        <Text style={styles.ingridient}>Meats:</Text>
        {props.meats.map((item) => {
            if (item.value){
                return(
                    <Text key={item.id} style={styles.subIngridient}>{item.name}</Text>
                );
            }
        })}
        <Text style={styles.ingridient}>Sauces:</Text>
        {props.sauces.map((item) => {
            if (item.value){
                return(
                    <Text key={item.id} style={styles.subIngridient}>{item.name}</Text>
                );
            }
        })}
        <Text style={styles.ingridient}>Vegetables:</Text>
        {props.vegetables.map((item) => {
            if (item.value){
                return(
                    <Text key={item.id} style={styles.subIngridient}>{item.name}</Text>
                );
            }
        })}
        <Text style={styles.ingridient}>Add Ons:</Text>
        <Text style={styles.subIngridient}>{props.toasted ? "Toasted" : ""}</Text>
        <Text style={styles.subIngridient}>{props.doubleMeat ? "Double Meat" : ""}</Text>
        <Text style={styles.subIngridient}>{props.doubleCheese ? "Double Cheese" : ""}</Text>
        <Text style={styles.subIngridient}>{props.mealCombo ? "Meal Combo" : ""}</Text>
      </View>

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Subtotal: ${props.price.toFixed(2)}</Text>
        <Text style={styles.subTitle}>
            Sales Tax: ${(props.price * 0.06).toFixed(2)}{" "}
        </Text>
        <Text style={styles.subTitle}>
            Total: ${(props.price + props.price * 0.06).toFixed(2)}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Return Home</NavButton>
      </View>
    </View>
  );
}

export default OrderReviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500
  },
  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary500
  },
  ingridientContainer: {
    flex: 3,
  },
  ingridient: {
    fontSize: 20,
    color: Colors.primary500
  },
  subIngridient: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold"
  },
  buttonContainer: {
    alignItems:"center"
  }
});
