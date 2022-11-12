import SafeAreaViewHoc from "../../HOC/SafeAreaViewHoc";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountHomeScreen from "./AccountHomeScreen";
import AccountEditProfileScreen from "./AccountEditProfileScreen";
import AccountSettingsScreen from "./AccountSettingsScreen";
const AccountStack = createNativeStackNavigator();

const AccountScreen = () => (
  <AccountStack.Navigator initialRouteName="AccountHomeScreen">
    <AccountStack.Screen
      name="AccountHomeScreen"
      options={{ title: "Account" }}
      component={AccountHomeScreen}
    />
    <AccountStack.Screen
      name="AccountEditProfileScreen"
      options={{ title: "Edit Profile" }}
      component={AccountEditProfileScreen}
    />
    <AccountStack.Screen
      name="AccountSettingsScreen"
      options={{ title: "Account Setting " }}
      component={AccountSettingsScreen}
    />
  </AccountStack.Navigator>
);

export default AccountScreen;
