import { View, Text } from "react-native";
import SafeAreaViewHoc from "../HOC/SafeAreaViewHoc";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AccountScreen from "./AccountScreen";

const InboxScreen = SafeAreaViewHoc(() => (
  <View>
    <Text style={{ fontSize: 28, color: "teal" }}>Inbox Screen</Text>
  </View>
));

const ChatTopTabs = createMaterialTopTabNavigator();
const ChatScreen = () => (
  <ChatTopTabs.Navigator>
    <ChatTopTabs.Screen name="inbox" component={InboxScreen} />
    <ChatTopTabs.Screen name="sentAccount" component={AccountScreen} />
  </ChatTopTabs.Navigator>
  // <InboxScreen/>
);

export default SafeAreaViewHoc(ChatScreen);
