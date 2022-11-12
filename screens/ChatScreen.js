import { View, Text } from "react-native";
import SafeAreaViewHoc from "../HOC/SafeAreaViewHoc";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AccountScreen from "./AccountScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const InboxScreen = SafeAreaViewHoc(() => (
  <View>
    <Text style={{ fontSize: 28, color: "teal" }}>Inbox Screen</Text>
  </View>
));

const SentAccountScreen = () => <AccountScreen />;

const ChatTopTabs = createMaterialTopTabNavigator();
const ChatScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ChatTopTabs.Navigator>
      <ChatTopTabs.Screen name="inbox" component={InboxScreen} />
      <ChatTopTabs.Screen name="DreamBox" component={SentAccountScreen} />
    </ChatTopTabs.Navigator>
  </SafeAreaView>
);

export default ChatScreen;
