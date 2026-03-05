import { Text, View, StyleSheet, ScrollView, Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Title from "../components/Title";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";

function OrderReviewScreen(props) {
  //setting safe area screen boundaries
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[
        Colors.accent300,
        Colors.accent500,
        Colors.accent300,
        Colors.accent500,
        Colors.accent300,
        Colors.accent500,
        Colors.accent300,
        Colors.accent500,
      ]}
      style={styles.rootContainer}
    >
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
          {/* adding title to page */}
          <Title>Order Summary</Title>
        </View>

        <View style={styles.subTitleContainer}>
          {/* adding subtitle to the page */}
          <Text style={styles.subTitle}>
            Your order has been submitted with your order details below!
          </Text>
        </View>

        <View style={styles.servicesContainer}>
          {/* adding in title for service time selected */}
          <Text style={styles.services}>Service Time Selected:</Text>
          {/* adding user selection */}
          <Text style={styles.subServices}>{props.repairTime}</Text>
          {/* adding title for services selected */}
          <Text style={styles.services}>Service Selected:</Text>
          {/* mapping through services */}
          {props.services.map((item) => {
            // checking if selected
            if (item.value) {
              return (
                // grabbing item.id
                <Text key={item.id} style={styles.subServices}>
                  {/* displaying item name */}
                  {item.name}
                </Text>
              );
            }
          })}
          {/* showing switch selections */}
          {/* title for newsletter switch */}
          <Text style={styles.services}>Add Ons Selected:</Text>
          {/* adding newsletter selection */}
          <Text style={styles.subServices}>
            {props.newsLetter ? "Newsletter" : ""}
          </Text>
          {/* adding rental membership selection */}
          <Text style={styles.subServices}>
            {props.rentalMembership ? "Rental Membership" : ""}
          </Text>
        </View>

        <View style={styles.subTitleContainer}>
          {/* adding title for subtotal and displaying price */}
          <Text style={styles.subTitle}>
            Subtotal: ${props.price.toFixed(2)}
          </Text>
          {/* adding title for sales tax and multiplying price by 6% */}
          <Text style={styles.subTitle}>
            Sales Tax: ${(props.price * 0.06).toFixed(2)}{" "}
          </Text>
          {/* adding title for total and displaying full price */}
          <Text style={styles.subTitle}>
            Total: ${(props.price + props.price * 0.06).toFixed(2)}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          {/* adding button to return to homescreen */}
          <NavButton onPress={props.onNext}>Return Home</NavButton>
        </View>
      </View>
    </LinearGradient>
  );
}

export default OrderReviewScreen;

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
  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary800,
  },
  servicesContainer: {
    flex: 3,
  },
  services: {
    fontSize: 20,
    color: Colors.primary800,
  },
  subServices: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
