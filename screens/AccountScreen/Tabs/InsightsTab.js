import { View, Text, Button } from "react-native";

const InsightsTab = ({ navigation }) => {
  const handleNavigate = (screenName) => {
    navigation?.navigate(screenName);
  };
  return (
    <View
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text>Insights Tab</Text>
        <Button
          onPress={() => handleNavigate("AccountSettingsScreen")}
          title="Click me to Go to Settings Screen"
        />
      </View>
    </View>
  );
};
export default InsightsTab;
