import * as React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../../screens/HomeScreen";
import Profile from "../Second";
import { Favorite, Search } from "../../screens/OtherScreens";
import AuctionScreen from "../../screens/AuctionScreen";

// To initiate Bottom Tab navigation
const Tab = createMaterialBottomTabNavigator();

function BotTabs() {
  return (
    // Bottom Tab Navigation Container
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ccc"
      labelStyle={{ fontSize: 12 }}
      style={styles.Tab}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="Auction"
        component={AuctionScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gavel" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={27}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BotTabs;

const styles = StyleSheet.create({
  Tab: {
    backgroundColor: "#f4f",
  },
});
