import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

//All the other dummy Screens are placed here
export const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ChatScreen</Text>
    </View>
  );
};

export const ProfileScreen = () => {
  return (
    <View style={styles.containerProfile}>
      <Profile />
    </View>
  );
};

export const CallScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CallScreen</Text>
    </View>
  );
};

export const Search = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search!</Text>
    </View>
  );
};

export const Favorite = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>There is a Heart here!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerProfile: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  TabsContainer: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "red",
  },
});
