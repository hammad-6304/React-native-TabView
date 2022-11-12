import { View, Text } from "react-native";
import SafeAreaViewHoc from "../HOC/SafeAreaViewHoc";

const ChatScreen = () => (
  <View>
    <Text>Chat Screen</Text>
  </View>
);

export default SafeAreaViewHoc(ChatScreen);
