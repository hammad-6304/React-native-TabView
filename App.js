import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AccountScreen from "./screens/AccountScreen/index";
import ChatScreen from "./screens/ChatScreen";
import HomeScreen from "./screens/HomeScreen";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

// function DetailsScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Details!</Text>
//       <Button
//         title="Go to Setting"
//         onPress={() => navigation.navigate("Settings")}
//       />
//     </View>
//   );
// }
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Home screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//     </View>
//   );
// }
// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//     </View>
//   );
// }
// const HomeStack = createNativeStackNavigator();
// function HomeStackScreen() {
//   return (

//       <HomeStack.Navigator>
//         <HomeStack.Screen name="Home" component={HomeScreen} />
//         <HomeStack.Screen name="HomeDetails" component={DetailsScreen} />
//       </HomeStack.Navigator>

//   );
// }
// const SettingsStack = createNativeStackNavigator();
// function SettingsStackScreen() {
//   return (

//       <SettingsStack.Navigator initialRouteName="Details">
//         <SettingsStack.Screen name="Settings" component={SettingsScreen} />
//         <SettingsStack.Screen name="Details" component={DetailsScreen} />
//       </SettingsStack.Navigator>

//   );
// }
const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Chat" component={ChatScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
