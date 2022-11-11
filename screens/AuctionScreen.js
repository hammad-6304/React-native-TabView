import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Profile from "../components/Second";
import { SafeAreaView } from "react-native-safe-area-context";
import { CallScreen, ChatScreen } from "./OtherScreens";

const Tab = createMaterialTopTabNavigator();

const AuctionScreen = () => {
  return (
    <SafeAreaView style={styles.TabsContainer}>
      <Tab.Navigator>
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profiles" component={Profile} />
        <Tab.Screen name="Call" component={CallScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
export default AuctionScreen;

const styles = StyleSheet.create({
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
