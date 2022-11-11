import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FlatListView from "./ListView";

const profiles = ["Collection", "Account", "Dreambox"];

// Componenet For Profile Tabs
const ProfileTabs = ({ currentTab, setCurrentTab }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
      {profiles.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setCurrentTab(index)}>
          <Text style={[currentTab == index && styles.profileTextSelected]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Profile Screen View
const Profile = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1, padding: 2 }}>
      <View style={styles.container}>
        <ProfileTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

        {/* On the basis of Tab index you change or render anything here */}

        {/* This is how you can do conditional rendring & you can even add nested navigation here as well */}
        {currentTab === 0 ? (
          <Text>
            Hey you are on the Tab 0, If you want to see the list please go to
            the next Tab. Thanks!
          </Text>
        ) : (
          <FlatListView currentTab={currentTab} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 23,
  },
  profileTextSelected: {
    color: "#FB8C00",
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: "#4B4982",
  },
});
