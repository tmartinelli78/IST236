import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function GuestEntry(props) {
  return (
    <View style={styles.entryContainer}>
      <Pressable
        android_ripple={{ color: Colors.accent200 }} 
        style={({ pressed }) => pressed && styles.pressedEntry}
        onLongPress={() => props.onDeleteGuest(props.id)}
      >
        <View style={styles.textWrapper}>
          <Text style={styles.guestNameText}>{props.name}</Text>
          <Text style={styles.dateText}>{props.date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default GuestEntry;

const styles = StyleSheet.create({
  entryContainer: {
    marginVertical: 4, 
    borderRadius: 4,
    backgroundColor: "transparent",
    width: '100%', 
  },
  pressedEntry: {
    opacity: 0.5,
    backgroundColor: Colors.primary800,
  },
  textWrapper: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.primary300o5,
  },
  guestNameText: {
    color: Colors.accent500,
    fontSize: 18,
    fontFamily: "zyra",
    textAlign: 'center', 
  },
  dateText: {
    color: Colors.accent500,
    fontSize: 12,
    fontFamily: "zyra",
    textAlign: 'center',
    marginTop: 2,
    opacity: 0.6,
  },
});