import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import SafeAreaViewHoc from "../../HOC/SafeAreaViewHoc";
import CollectionTab from "./Tabs/CollectionTab";
import InsightsTab from "./Tabs/InsightsTab";
import SavesTab from "./Tabs/SavesTab";

const tabs = ["My Collection", "Insights", "Saves"];
const AccountHomeScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(0);

  const handleChangeTab = (i) => {
    if (selected === i) return;
    setSelected(i);
  };

  const renderTabs = () => {
    switch (selected) {
      case 0:
        return <CollectionTab />;
      case 1:
        return <InsightsTab navigation={navigation} />;
      case 2:
        return <SavesTab />;
      default:
        return <></>;
    }
  };
  return (
    <View style={{ flex: 1 }}>
      {/* Profile View */}
      <View style={styles.profileCon}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AccountEditProfileScreen")}
        >
          <Image
            style={styles.profileImg}
            source={{ uri: "https://picsum.photos/200" }}
          />
        </TouchableOpacity>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: "20px" }}>
            Codruta Puni
          </Text>
          <Text style={{ fontSize: "16px" }}>
            Welcome here! Feel free to explore.
          </Text>
        </View>
      </View>
      {/* Tabs Area */}
      <View style={styles.tabsContainer}>
        {tabs.map((item, index) => (
          <View
            key={index}
            style={[styles.tab, selected === index && styles.tabActive]}
            onTouchEnd={() => handleChangeTab(index)}
          >
            <Text
              style={[
                styles.tabText,
                selected === index && styles.activeTabText,
              ]}
            >
              {item}
            </Text>
          </View>
        ))}
      </View>

      {/* Render Tabs SCreens */}
      <View>{renderTabs()}</View>
    </View>
  );
};

export default AccountHomeScreen;

const styles = StyleSheet.create({
  // profile con
  profileCon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  profileImg: { height: 80, width: 80, borderRadius: "50%", marginRight: 15 },
  tabsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    height: 48,
  },
  tab: {
    flexBasis: "33.3%",
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderBottomColor: "transparent",
  },
  tabActive: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  tabText: {
    textAlign: "center",
  },
  activeTabText: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "teal",
  },
});
