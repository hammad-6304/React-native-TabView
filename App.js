import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BotTabs from "./components/navigation/BotNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox } from "react-native";
// uncomment to below lines to make Stack navigation Functional

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "./screens/HomeScreen";
// import AuctionScreen from "./screens/AuctionScreen";
// const Stack = createNativeStackNavigator();

const App = () => {
  LogBox.ignoreLogs(["Sending..."]);
  useEffect(() => {}, []);
  return (
    // Safe Area Provider which will be helpful to handle Top-Notch
    <SafeAreaProvider>
      <NavigationContainer>
        {/* Stack view Implementation below */}

        {/* <Stack.Navigator>
          <Stack.Screen
          name="Home"
          options={{ title: "Home Screen" }}
          component={HomeScreen}
          />
          <Stack.Screen
          name="AuctionScreen"
          options={{ title: "Second Screen" }}
          component={AuctionScreen}
          />
        </Stack.Navigator> */}

        {/* Bottom Tabs Navigation below */}
        <BotTabs />

        {/* Status Bar */}
        <StatusBar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
