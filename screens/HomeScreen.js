import { View, Text } from "react-native";
import SafeAreaViewHoc from "../HOC/SafeAreaViewHoc";

const HomeScreen = () => (
  <View>
    <Text>Home Screen</Text>
  </View>
);

export default SafeAreaViewHoc(HomeScreen);
