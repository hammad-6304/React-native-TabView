import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <View
        style={styles.styler}
        onTouchEnd={() => {
          navigation.navigate("Profile");
        }}
      >
        <Text style={styles.color}> TT Go to Second Screen On press TT </Text>
      </View>
      <View>
        <Text>
          I need for when i Press on the pink text to switch to SecondScreen.js
          screen, maybe use TouchableOpacity??.{" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  styler: {
    padding: 23,
  },
  color: {
    backgroundColor: "#f4f",
    marginTop: 100,
  },
});
